const form = document.querySelector('form');
const inputText = document.querySelector('input[type="text"]');
const inputSubmit = document.querySelector('input[type="submit"]');
const buttonSubmit = document.querySelector('button[type="submit"]');
console.log(form, inputText.value, buttonSubmit);

inputText.addEventListener("input", () => {
    inputSubmit.disabled = inputText.value.trim()==='';
});

const preventSubmitText = document.querySelector("#preventSubmitText");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    buttonSubmit.disabled = true;
    inputSubmit.disabled = true;
    preventSubmitText.textContent = "Form submisstion prevented!"
});

const addDeviceButton = document.querySelector('button[name="addDeviceButton"]');
addDeviceButton.addEventListener("click", () => {
    const newDevice = document.querySelector('input[name="deviceInput"]');
    const deviceOption = document.createElement("option");
    deviceOption.textContent = newDevice.value;
    
    const deviceList = document.querySelector('select[name="peripheralsList"]');
    deviceList.appendChild(deviceOption);

    addDeviceButton.disabled = true;
});