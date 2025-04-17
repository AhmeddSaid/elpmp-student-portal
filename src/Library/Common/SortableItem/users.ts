// data/users.ts
export interface User {
	id: number;
	name: string;
	initials: string;
}

export const users: User[] = [
	{ id: 1, name: "Alice Johnson", initials: "AJ" },
	{ id: 2, name: "Bob Smith", initials: "BS" },
	{ id: 3, name: "Charlie Brown", initials: "CB" },
	{ id: 4, name: "David Wilson", initials: "DW" },
	{ id: 5, name: "Eva Davis", initials: "ED" },
	{ id: 6, name: "Frank Miller", initials: "FM" },
	// { id: 7, name: "Grace Lee", initials: "GL" },
	// { id: 8, name: "Hannah White", initials: "HW" },
	// { id: 9, name: "Ian Green", initials: "IG" },
	// { id: 10, name: "Jack Black", initials: "JB" },
];
