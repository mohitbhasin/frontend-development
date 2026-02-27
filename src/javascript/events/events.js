const button = document.querySelector('button');
button.addEventListener('click', () => {
	console.log("Button clicked and event logger!");
});

const input = document.querySelector('input');
input.addEventListener('keydown', (event) => {
	console.log(`event - keydown: ${event.key}`)
});

const unorderedList = document.querySelector('ul');
unorderedList.addEventListener('click', (event) => {
	console.log(event.target.tagName+" "+event.target.textContent);
})

const eventList = document.querySelector('.eventList');
eventList.addEventListener('click', (event) => {
	const displayBox = document.querySelector('.displayBox');
	const text = event.target.textContent.split(":")[0].trim();
	displayBox.textContent = event[text];
});

// Event Bubbling
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const bubbleDisplay = document.getElementById("bubbleDisplay");

parent.addEventListener("click", () => {
	bubbleDisplay.append(document.createElement('br'));
	bubbleDisplay.append("Bubbled up to parent.");
});

child.addEventListener("click", () => {
	bubbleDisplay.textContent="child clicked.";
});

// Event capturing
const parent2 = document.getElementById("parent2");
const child2 = document.getElementById("child2");
const captureDisplay = document.getElementById("captureDisplay");

parent2.addEventListener("click", () => {
	captureDisplay.textContent="parent capturing.";
}, {capture: true});

child2.addEventListener("click", () => {
	captureDisplay.append(document.createElement('br'));
	captureDisplay.append("child clicked.");
});