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

let j = 0;

// i is the index that changes inside of the loop (it is the index items)
// j is the index that is changed every time the loop finished

function showMore() {
	for (let i = j; i < j + 3; i++) {
		const divSmall = document.createElement("div");
		divSmall.className = "divSmall";
		div.insertBefore(divSmall, divSmall_new);

		const image = document.createElement("img");
		image.src = items[i].image;
		image.className = "imageNew";
		image.alt = items[i].title;
		divSmall.appendChild(image);

		const text = document.createElement("h3");
		text.textContent = items[i].title;
		text.className = "h3";
		text.style.backgroundColor = "white";
		divSmall.appendChild(text);

		const divText = document.createElement("div");
		divText.className = "divText";
		divSmall.appendChild(divText);

		const p1 = document.createElement("p");
		p1.className = "p1";
		p1.textContent = items[i].creator;
		divText.appendChild(p1);

		const p2 = document.createElement("p");
		p2.className = "p2";
		p2.textContent = items[i].price;
		divText.appendChild(p2);
	}

	j = j + 3;
	// we need to increment the function so it shows 3 pics at a time

	if (j >= items.length) {
		div.removeChild(divSmall_new);
	}
}

const divSmall_new = document.createElement("div");
divSmall_new.className = "showMore";
divSmall_new.setAttribute("onclick", "showMore()");
div.appendChild(divSmall_new);

const text = document.createElement("h3");
text.className = "showMore_h3";
text.textContent = "Show More";
divSmall_new.appendChild(text);

const text2 = document.createElement("h1");
text2.className = "showMore_plus";
text2.textContent = "+";
divSmall_new.appendChild(text2);

showMore();
