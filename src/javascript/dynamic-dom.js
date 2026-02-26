const appendEle = document.getElementById("appendElementButton");
appendEle.addEventListener("click", () => {
	const parentList = document.querySelector(".parentUL");
	const child = document.createElement("li");
	const input = document.getElementById("appendInput");
	if(!input.value.trim()) {
		return;
	}
	child.textContent = input.value;
	parentList.append(child);
});

const appendString = document.getElementById("appendStringButton");
appendString.addEventListener("click", () => {
	const parentList = document.querySelector(".parentUL");
	const input = document.getElementById("appendInput");
	if(!input.value.trim()) {
		return;
	}
	parentList.append(input.value);
});

const appendChild = document.getElementById("appendChildButton");
appendChild.addEventListener("click", () => {
	const parentList = document.querySelector(".parentUL");
	const child = document.createElement("li");
	const input = document.getElementById("appendInput");
	if(!input.value.trim()) {
		return;
	}
	child.textContent = input.value;
	parentList.append(child);
});

const cloningBtn = document.querySelector(".cloningButton");
const div = document.querySelector(".cloneParaDiv");
cloningBtn.addEventListener(("click"), () => {
	const para = document.querySelector(".paraToClone");
	const clone = para.cloneNode(para);
	div.appendChild(clone);
});

const replaceBtn = document.querySelector(".replaceButton");
replaceBtn.addEventListener(("click"), () => {
	const paraToReplace = div.querySelector(".paraToClone");
	const replacementPara = document.createElement("p");
	replacementPara.textContent ="This is the replaced para.";
	div.replaceChild(replacementPara, paraToReplace);
});

const beforeFirstChild = document.querySelector("#firstChildButton");
beforeFirstChild.addEventListener(("click"), () => {
	const input = document.querySelector("#taskInput");
	if(!input.value.trim()) {
		return;
	}
	const priorityList = document.querySelector(".priority-list");
	const newItem = document.createElement("li");
	newItem.textContent = input.value;
	priorityList.insertBefore(newItem, priorityList.firstChild);
});

const beforeNextSib = document.querySelector("#nextSiblingButton");
beforeNextSib.addEventListener(("click"), () => {
	const input = document.querySelector("#taskInput");
	if(!input.value.trim()) {
		return;
	}
	const item = document.querySelector("#implement");
	const parent = item.parentNode;
	const newItem = document.createElement("li");
	newItem.textContent = input.value;
	parent.insertBefore(newItem, item.nextSibling);
});