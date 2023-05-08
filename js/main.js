// variables
const text = document.getElementById("text");
const viewText = document.getElementById("viewText");
const invisible = document.getElementById("invisible");
const observable = document.getElementById("observable");
const encryptedButton = document.getElementById("button-enc");
const decryptionButton = document.getElementById("button-dec");
const encryptedRules = new Map([
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
]);
const decryptionRules = new Map([
    ["a", 1],
    ["e", 4],
    ["i", 3],
    ["o", 3],
    ["u", 3],
]);

// functions
const textValue = () => {
    const textValue = text.value;
    
    return textValue;
}

const areaView = (text) => {
    invisible.style.display = "none";
    observable.style.display = "flex";
    console.log(text);
    viewText.value = text;
}

const wordSplit = (word) => {
    const textValue = word.split("");
    return textValue;
}

const encryptedList = (list) => {
    if(encryptedRules.has(list)){
        list = encryptedRules.get(list);
    }
    return list;
}


const decryptionList = (list) =>{
    for (let index = 0; index < list.length; index++) {
        if(encryptedRules.has(list[index])){
            list.splice(index+1, decryptionRules.get(list[index]));
        }
    }
    return list
}

const encryptedText = () => {
    const text = textValue();
    console.log(text);
    console.log(wordSplit(text)); 
    const newList = wordSplit(text).map(encryptedList);
    areaView(newList.join(""));

    return newList.join("");
}

const decryptionText = () => {
    const text = textValue();
    console.log(wordSplit(text)); 
    const newList = decryptionList(wordSplit(text));
    areaView(newList.join(""));

    return newList.join("");
}

encryptedButton.addEventListener("click", encryptedText);
decryptionButton.addEventListener("click", decryptionText);
// const EncryptedText = encryptedText;
// decryptionText(EncryptedText);

