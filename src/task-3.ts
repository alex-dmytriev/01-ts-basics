const usernames: string[] = ["alice", "bob", "charlie"];

const ratings: number[] = [4.5, 3.8, 5];

interface Products {
	readonly id: number;
	title: string;
}

const products: Products[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log('=== Task 3 ===');
console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);
