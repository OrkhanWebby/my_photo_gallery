const items = [
	{
		image: "https://picsum.photos/id/237/200/200",
		title: "Dog",
		creator: "Jim Beam",
		price: "$9.99",
	},
	{
		image: "https://picsum.photos/id/238/200/200",
		title: "City",
		creator: "Jack Daniels",
		price: "$6.50",
	},
	{
		image: "https://picsum.photos/id/239/200/200",
		title: "Dandelion",
		creator: "Johnnie Walker",
		price: "$19.00",
	},
	{
		image: "https://picsum.photos/id/244/200/200",
		title: "Pelicans",
		creator: "John Jameson",
		price: "$12.50",
	},
	{
		image: "https://picsum.photos/id/248/200/200",
		title: "Cactus",
		creator: "Jim Beam",
		price: "$15.99",
	},
	{
		image: "https://picsum.photos/id/249/200/200",
		title: "Bridge",
		creator: "William Grant",
		price: "$29.99",
	},
	{
		image: "https://picsum.photos/id/250/200/200",
		title: "Camera",
		creator: "George Smith",
		price: "$10.00",
	},
	{
		image: "https://picsum.photos/id/251/200/200",
		title: "Landscape",
		creator: "Johnnie Walker",
		price: "$29.00",
	},
	{
		image: "https://picsum.photos/id/255/200/200",
		title: "Private Drive",
		creator: "John Jameson",
		price: "$19.00",
	},
	{
		image: "https://picsum.photos/id/256/200/200",
		title: "Snowy Mountains",
		creator: "William Grant",
		price: "$19.99",
	},
	{
		image: "https://picsum.photos/id/257/200/200",
		title: "Canal",
		creator: "Jim Beam",
		price: "$19.99",
	},
	{
		image: "https://picsum.photos/id/258/200/200",
		title: "Birds",
		creator: "Johnnie Walker",
		price: "$24.00",
	},
	{
		image: "https://picsum.photos/id/259/200/200",
		title: "Waterfront",
		creator: "George Smith",
		price: "$15.00",
	},
	{
		image: "https://picsum.photos/id/261/200/200",
		title: "Dune",
		creator: "John Jameson",
		price: "$7.50",
	},
	{
		image: "https://picsum.photos/id/274/200/200",
		title: "City Night",
		creator: "Jim Beam",
		price: "$14.99",
	},
];

const div = document.querySelector(".main-container");

for (let item of items) {
	const divSmall = document.createElement("div");
	divSmall.className = "divSmall";
	div.appendChild(divSmall);

	const image = document.createElement("img");
	image.src = item.image;
	image.className = "imageNew";
	image.alt = item.title;
	divSmall.appendChild(image);

	const text = document.createElement("h3");
	text.textContent = item.title;
	text.className = "h3";
	text.style.backgroundColor = "white";
	divSmall.appendChild(text);

	const divText = document.createElement("div");
	divText.className = "divText";
	divSmall.appendChild(divText);

	const p1 = document.createElement("p");
	p1.className = "p1";
	p1.textContent = item.creator;
	divText.appendChild(p1);

	const p2 = document.createElement("p");
	p2.className = "p2";
	p2.textContent = item.price;
	divText.appendChild(p2);
}
