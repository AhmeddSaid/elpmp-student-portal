import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
	withCredentials: true,
	forceNew: false,
});

export default socket;
