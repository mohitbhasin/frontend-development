const parseButton = document.querySelector("#parse");
parseButton.addEventListener("click", () => {
    const textArea = document.querySelector("textarea");
    const result =  document.querySelector("#parsedTextLabel");
    const text = textArea.value;
    if(text.trim()==='') {
        result.textContent = "Noting to parse."
        return;
    }

    try {
        const jsonObject = JSON.parse(text);
        const keys = Object.keys(jsonObject);
        result.textContent = "Json key = "+keys;
        const jsonStringLabel = document.querySelector("#jsonStringLabel");
        jsonStringLabel.textContent = JSON.stringify(jsonObject);
    } catch (error) {
        result.textContent = "Invalid JSON";
        console.log(error);
    }
});