function popup() {
	const countTag = document.getElementsByTagName('p');
	alert(`total <p> count: ${countTag.length}`);
}

function createElements(btnElement) {
	const header = document.getElementById('main-header');
	const paragraph = document.getElementsByTagName('p');
	const newPara = document.createElement('p');
	newPara.textContent = paragraph[0].innerText;
	document.getElementById("newParaElementDiv").appendChild(newPara);
	btnElement.disabled = true;
}

function togglePara() {
	const existingPara = document.getElementById("dynamic-para");
	const toggleParaDiv = document.getElementById("toggle-para-div");
	if(existingPara) {
		existingPara.remove();
	} else {
		const newPara = document.createElement('p');
		newPara.id = 'dynamic-para';
		newPara.textContent = "Created <p> from within function"
		toggleParaDiv.appendChild(newPara);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const items = document.getElementsByClassName('items-list');
	const display = document.getElementById('count-items');
	display.textContent = items.length;
});

// querySelector() returns the first matching element.
function enableQuerySelector() {
	const checkbox = document.getElementById("selectorOperations");
	if(checkbox.checked) {
		// To select a tag, the name itself is used.
		const h3Element = document.querySelector('h3');
		const gradient = 'linear-gradient(to right, red, blue, orange)'; // Example: Red to Blue
		// Apply the CSS properties via JavaScript
		h3Element.style.background = gradient;

		// # is used for selecting element by id.
		const lable = document.querySelector("#selectorLable");
		lable.addEventListener("mouseover", function() {
			lable.style.fontSize = "22px";
		});
		lable.addEventListener("mouseout", function() {
			lable.style.fontSize = "18px";
		});

		// Use . for selecting by class
		const items = document.querySelector(".items-list");
		items.style.color = "Magenta";

		// selecting by attribute
		const paragraph = document.querySelector('p[name="paraReverse"]');
		const reversedText = paragraph.textContent.split('').reverse().join('');
		paragraph.textContent = reversedText;

		// querySelectorAll() returns all the elements matching query.
		const elements = document.querySelectorAll('.querySelectAll');
		const colors = ["red", "green", "blue", "orange", "purple", "pink", "black", "gray"];
		elements.forEach((element, index) => {
			element.style.color=colors[Math.floor(Math.random()*colors.length)];
		});
	}
}

// Modifying content and style
function modify(para) {
	para.setAttribute('contenteditable', 'true');
	para.style.color="green"
}

function reset(para) {
	para.removeAttribute('contenteditable')
	para.style.color="orange"
}

document.addEventListener('DOMContentLoaded', () => {
	const para = document.getElementById("forTextContent");
	const textContdiv = document.getElementById("textContentDiv");
	const innerTextdiv = document.getElementById("innerTextDiv");
	textContdiv.textContent += para.textContent;
	innerTextdiv.textContent += para.innerText;
});


function addCard() {
	const input = document.getElementById('classInput');
	const box = document.getElementById('contentBox');
	
	const newValue = input.value;
	const heading = document.getElementById('classHeading');
	const list = heading.classList;
	if(list.length>=3) {
		return;
	}
	if(newValue.trim() !== "") {
		if(list.contains(newValue)) {
			return;
		}
		list.add(newValue);
		const entry = document.createElement('div');
		entry.innerHTML = `${list[list.length - 1]}`;
		box.appendChild(entry);
	}
}

function checkClass() {
	const heading = document.getElementById("classHeading");
	const searchBox = document.getElementById("searchClass");
	const searchQuery = searchBox.value;
	if(searchQuery.trim()==='') {
		return;
	}
	const resultBox = document.getElementById("searchResult");
	if(heading.classList.contains(searchQuery)) {
		resultBox.textContent = "Present"
	} else {
		resultBox.textContent = "Not present";
	}
}

function toggleItalic() {
	const para = document.getElementById("classListPara");
	para.classList.toggle("italics");
}

function innerHtmlEffect(item) {
	item.innerHTML = '<button>Button added using innerHTML</button>';
}

function textContentEffect(item) {
	item.textContent = 'Changes only content. Cannot read or change HTML';
}

function styleEffect(item) {
	item.style.fontSize = '25px';
	item.style.color = 'orange';
}