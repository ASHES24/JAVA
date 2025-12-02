const inputText = document.getElementById("inputText");
const analyzeBtn = document.getElementById("analyzeBtn");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const reversedText = document.getElementById("reversedText");

analyzeBtn.addEventListener("click", () => {
    const text = inputText.value.trim();

    if(text === "") {
        charCount.innerText = 0;
        wordCount.innerText = 0;
        reversedText.innerText = "";
        return;
    }

    charCount.innerText = text.length;

    const wordsArray = text.split(/\s+/).filter(word => word.length > 0);
    wordCount.innerText = wordsArray.length;

    reversedText.innerText = text.split("").reverse().join("");
});
