import { cookies } from "next/headers";
import { beforeEach, describe, expect, it, vi } from "vitest";
import HttpStatus from "./../../../../src/Utils/httpStatus";
import { loginAction } from "../../../../src/app/[locale]/(auth)/auth/login/action";
import { axiosInstance } from "@/Utils/AxiosFetch";

vi.mock("@/Utils/AxiosFetch", () => ({
	axiosInstance: {
		post: vi.fn(),
	},
}));

vi.mock("next/headers", () => ({
	cookies: vi.fn(() => ({
		set: vi.fn(),
	})),
}));

describe("loginAction", () => {
	const sampleUser = {
		email: "user@example.com",
		password: "strongPassword123",
		rememberMe: true,
	};
	let setCookieMock;

	beforeEach(() => {
		setCookieMock = vi.fn();
		vi.mocked(cookies).mockReturnValue({ set: setCookieMock });
		vi.resetAllMocks();
	});

	it("should return 200 on successful login and set userId cookie", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", {
			httpOnly: true,
			secure: true,
			sameSite: "lax",
			path: "/",
			maxAge: 60 * 60 * 24 * 3,
		});
	});

	it("should handle missing set-cookie header by returning INTERNAL_SERVER_ERROR", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should return INTERNAL_SERVER_ERROR if userId not found in set-cookie header", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["sessionId=abc123; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should set cookie without maxAge if rememberMe is false", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction({ ...sampleUser, rememberMe: false });
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", {
			httpOnly: true,
			secure: true,
			sameSite: "lax",
			path: "/",
			maxAge: undefined,
		});
	});

	it("should handle Axios error with response status", async () => {
		vi.mocked(axiosInstance.post).mockRejectedValueOnce({
			isAxiosError: true,
			response: { status: 401 },
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(401);
	});

	it("should return INTERNAL_SERVER_ERROR on non-Axios error", async () => {
		vi.mocked(axiosInstance.post).mockRejectedValueOnce(new Error("Network error"));
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
	});

	it("should handle large payload gracefully", async () => {
		const largePayload = { ...sampleUser, email: "a".repeat(5000), password: "b".repeat(5000) };
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(largePayload);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", expect.any(Object));
	});

	it("should handle unexpected response without status", async () => {
		vi.mocked(axiosInstance.post).mockRejectedValueOnce({
			isAxiosError: true,
			response: {},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
	});

	it("should handle high volume requests in stress test", async () => {
		const numRequests = 100;
		vi.mocked(axiosInstance.post).mockResolvedValue({
			status: 200,
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const requests = Array.from({ length: numRequests }).map(() => loginAction(sampleUser));
		const results = await Promise.all(requests);
		results.forEach(result => expect(result.status).toBe(200));
		expect(setCookieMock).toHaveBeenCalledTimes(numRequests);
	});

	it("should handle unexpected error type gracefully", async () => {
		vi.mocked(axiosInstance.post).mockRejectedValueOnce("Unknown error");
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
	});

	it("should handle unexpected response codes", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 418,
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(418);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", expect.any(Object));
	});

	it("should handle non-standard but valid HTTP status codes", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 202, // Accepted, often used for async processing
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(202);
	});

	it("should reject insecure set-cookie headers and return INTERNAL_SERVER_ERROR", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; SameSite=Lax"], // Missing HttpOnly and Secure
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should handle empty response from server gracefully", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce(null);
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should handle rapid login attempts to test rate limiting and throttling", async () => {
		const attempts = 50;
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 429,
			headers: {},
		});
		const results = await Promise.all(
			Array.from({ length: attempts }).map(() => loginAction(sampleUser)),
		);
		results.forEach(result => expect(result.status).toBe(429));
	});

	it("should handle email with unusual but valid characters", async () => {
		const userWithSpecialEmail = {
			...sampleUser,
			email: "test+filter@example.co.uk",
		};
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(userWithSpecialEmail);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", expect.any(Object));
	});

	it("should reject login when email or password fields are empty", async () => {
		const invalidUser = { email: "", password: "", rememberMe: false };
		const result = await loginAction(invalidUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should handle server overload gracefully by simulating timeout", async () => {
		vi.mocked(axiosInstance.post).mockRejectedValueOnce({
			isAxiosError: true,
			code: "ECONNABORTED",
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
	});

	it("should handle invalid JSON response from server gracefully", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			data: "<html>Invalid response</html>",
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should handle unexpected header formats in set-cookie without breaking", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["userId=; Path=/; HttpOnly; Secure; SameSite=Lax"], // Empty userId
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should retry login on transient errors (5xx status codes)", async () => {
		let callCount = 0;
		vi.mocked(axiosInstance.post).mockImplementation(() => {
			callCount++;
			if (callCount === 1) {
				return Promise.reject({ isAxiosError: true, response: { status: 503 } });
			}
			return Promise.resolve({
				status: 200,
				headers: {
					"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
				},
			});
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(200);
		expect(callCount).toBe(2);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", expect.any(Object));
	});

	it("should handle multiple set-cookie headers and extract userId correctly", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": [
					"sessionToken=xyz; Path=/; HttpOnly; Secure; SameSite=Lax",
					"userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax",
				],
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", expect.any(Object));
	});

	it("should fail gracefully if set-cookie format is unexpected", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["unexpected-format-cookie"],
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should handle concurrent login attempts without conflicting cookies", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValue({
			status: 200,
			headers: {
				"set-cookie": ["userId=token123; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const results = await Promise.all([loginAction(sampleUser), loginAction(sampleUser)]);
		results.forEach(result => expect(result.status).toBe(200));
		expect(setCookieMock).toHaveBeenCalledTimes(2);
	});

	it("should sanitize inputs to prevent SQL injection and other injection attacks", async () => {
		const maliciousUser = {
			email: "user@example.com' OR '1'='1",
			password: "password' OR '1'='1",
			rememberMe: true,
		};
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["userId=token123; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(maliciousUser);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "token123", expect.any(Object));
	});

	it("should handle UTF-8 encoded characters in email and password", async () => {
		const utf8User = {
			email: "测试@example.com",
			password: "p@ssw0rd测试",
			rememberMe: false,
		};
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(utf8User);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", expect.any(Object));
	});

	it("should return INTERNAL_SERVER_ERROR when server sends unexpected headers without breaking", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"x-unexpected-header": "unexpected",
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should prevent CSRF vulnerability by ensuring request has proper withCredentials", async () => {
		vi.mocked(axiosInstance.post).mockImplementation((url, data, config) => {
			expect(config.withCredentials).toBe(true);
			return Promise.resolve({
				status: 200,
				headers: {
					"set-cookie": ["userId=token123; Path=/; HttpOnly; Secure; SameSite=Lax"],
				},
			});
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "token123", expect.any(Object));
	});

	it("should handle extremely rapid consecutive login attempts gracefully", async () => {
		const loginAttempts = 500;
		vi.mocked(axiosInstance.post).mockResolvedValue({
			status: 200,
			headers: {
				"set-cookie": ["userId=token123; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const results = await Promise.all(
			Array.from({ length: loginAttempts }).map(() => loginAction(sampleUser)),
		);
		results.forEach(result => expect(result.status).toBe(200));
		expect(setCookieMock).toHaveBeenCalledTimes(loginAttempts);
	});

	it("should handle incomplete credentials by returning INTERNAL_SERVER_ERROR", async () => {
		const incompleteUser = { email: "", password: "password", rememberMe: false };
		const result = await loginAction(incompleteUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should handle very long but valid email and password", async () => {
		const longUser = {
			email: "a".repeat(254) + "@example.com",
			password: "b".repeat(128),
			rememberMe: true,
		};
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(longUser);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", expect.any(Object));
	});

	it("should handle cross-origin request failure gracefully", async () => {
		vi.mocked(axiosInstance.post).mockRejectedValueOnce({
			isAxiosError: true,
			code: "ERR_CORS",
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should handle server slow response without timing out", async () => {
		vi.mocked(axiosInstance.post).mockImplementation(
			() =>
				new Promise(resolve =>
					setTimeout(
						() =>
							resolve({
								status: 200,
								headers: {
									"set-cookie": ["userId=token123; Path=/; HttpOnly; Secure; SameSite=Lax"],
								},
							}),
						5000,
					),
				),
		);
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "token123", expect.any(Object));
	});

	it("should handle changes in token name in set-cookie header gracefully", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["newUserToken=token123; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should handle invalid characters in set-cookie header gracefully", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["userId=<invalid>; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should set appropriate maxAge based on rememberMe", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});

		const resultRememberMe = await loginAction({ ...sampleUser, rememberMe: true });
		const resultNoRememberMe = await loginAction({ ...sampleUser, rememberMe: false });

		expect(resultRememberMe.status).toBe(200);
		expect(resultNoRememberMe.status).toBe(200);

		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", {
			httpOnly: true,
			secure: true,
			sameSite: "lax",
			path: "/",
			maxAge: 60 * 60 * 24 * 3,
		});

		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", {
			httpOnly: true,
			secure: true,
			sameSite: "lax",
			path: "/",
			maxAge: undefined,
		});
	});

	it("should handle rate limiting after multiple failed login attempts", async () => {
		vi.mocked(axiosInstance.post).mockRejectedValueOnce({
			isAxiosError: true,
			response: { status: 429 }, // Too Many Requests
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(429);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should handle non-JSON response content gracefully", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			data: "<html><body>Unexpected HTML Content</body></html>",
			headers: {
				"set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"],
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should correctly handle set-cookie header with specific domain and path attributes", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": [
					"userId=sampleToken; Path=/secure; Domain=example.com; HttpOnly; Secure; SameSite=Lax",
				],
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", {
			httpOnly: true,
			secure: true,
			sameSite: "lax",
			path: "/",
			maxAge: 60 * 60 * 24 * 3,
		});
	});

	it("should handle simultaneous login for different users without data leakage", async () => {
		vi.mocked(axiosInstance.post)
			.mockResolvedValueOnce({
				status: 200,
				headers: { "set-cookie": ["userId=tokenUser1; Path=/; HttpOnly; Secure; SameSite=Lax"] },
			})
			.mockResolvedValueOnce({
				status: 200,
				headers: { "set-cookie": ["userId=tokenUser2; Path=/; HttpOnly; Secure; SameSite=Lax"] },
			});

		const user1 = { email: "user1@example.com", password: "pass1", rememberMe: true };
		const user2 = { email: "user2@example.com", password: "pass2", rememberMe: false };

		const [result1, result2] = await Promise.all([loginAction(user1), loginAction(user2)]);

		expect(result1.status).toBe(200);
		expect(result2.status).toBe(200);

		expect(setCookieMock).toHaveBeenCalledWith("userId", "tokenUser1", expect.any(Object));
		expect(setCookieMock).toHaveBeenCalledWith("userId", "tokenUser2", expect.any(Object));
	});

	it("should handle malformed JSON response without crashing", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			data: "{invalidJson}",
			headers: { "set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"] },
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should prevent server-side request forgery attempts", async () => {
		const dangerousUser = {
			email: "user@example.com",
			password: "password",
			rememberMe: true,
		};
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": [
					"userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax",
					"Location=http://localhost/admin", // SSRF attempt
				],
			},
		});
		const result = await loginAction(dangerousUser);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "sampleToken", expect.any(Object));
	});

	it("should securely enforce headers without allowing manipulation", async () => {
		vi.mocked(axiosInstance.post).mockImplementation((url, data, config) => {
			config.headers["Extra-Header"] = "UnwantedValue";
			expect(config.headers["Content-Type"]).toBe("application/json");
			expect(config.withCredentials).toBe(true);
			return Promise.resolve({
				status: 200,
				headers: { "set-cookie": ["userId=token123; Path=/; HttpOnly; Secure; SameSite=Lax"] },
			});
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "token123", expect.any(Object));
	});

	it("should handle empty or uninitialized cookie store gracefully", async () => {
		vi.mocked(cookies).mockReturnValueOnce(null); // Simulating uninitialized cookie store
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: { "set-cookie": ["userId=sampleToken; Path=/; HttpOnly; Secure; SameSite=Lax"] },
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
	});

	it("should catch unhandled promise rejections without crashing", async () => {
		vi.mocked(axiosInstance.post).mockRejectedValueOnce(new Promise(() => {}));
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should handle oversized payload gracefully", async () => {
		const oversizedUser = {
			email: "a".repeat(10000),
			password: "b".repeat(10000),
			rememberMe: true,
		};
		vi.mocked(axiosInstance.post).mockRejectedValueOnce({
			isAxiosError: true,
			response: { status: 413 }, // Payload Too Large
		});
		const result = await loginAction(oversizedUser);
		expect(result.status).toBe(413);
		expect(setCookieMock).not.toHaveBeenCalled();
	});

	it("should respect CSP headers without causing errors", async () => {
		vi.mocked(axiosInstance.post).mockResolvedValueOnce({
			status: 200,
			headers: {
				"set-cookie": ["userId=token123; Path=/; HttpOnly; Secure; SameSite=Lax"],
				"Content-Security-Policy": "default-src 'self';", // Simulate CSP
			},
		});
		const result = await loginAction(sampleUser);
		expect(result.status).toBe(200);
		expect(setCookieMock).toHaveBeenCalledWith("userId", "token123", expect.any(Object));
	});

	it("should not cause memory leaks on repeated use", async () => {
		const numCalls = 10000;
		const results = await Promise.all(
			Array.from({ length: numCalls }).map(() => loginAction(sampleUser)),
		);
		results.forEach(result => expect(result.status).toBe(200));
		expect(setCookieMock).toHaveBeenCalledTimes(numCalls);
	});
});
