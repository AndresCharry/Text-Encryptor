// variables
// const text = document.getElementById("text");
// const encryptedButton = document.getElementById("button-enc");
// const decryptionButton = document.getElementById("button-dec");
const encryptedRules = new Map([
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
]);
const decryptionRules = new Map([
    ["a", "i"],
    ["e", "nter"],
    ["i", "mes"],
    ["o", "ber"],
    ["u", "fat"],
]);

// functions
const wordSplit = (word) => {
    const textValue = word.split("");
    return textValue;
}

const del = (item) => {
    console.log(item);
}

const encryptedList = (list) => {
    console.log(list);
    console.log(encryptedRules.has(list));
    if(encryptedRules.has(list)){
        list = encryptedRules.get(list);
    }
    console.log(list);
    return list;
}

const decryptionList = (list, index) => {
    console.log(list);
    console.log(index);
    console.log(decryptionRules.has(list));
    if(decryptionRules.has(list)){
        console.log(list);
        console.log(decryptionRules.get(list));
        const deletedItem = del(list),
        list = decryptionRules.get(list);
        console.log(list);
    }
    console.log(list);
    return list;
}

const encryptedText = (text) => {
    console.log(encryptedRules);
    console.log(wordSplit(text)); 
    const newList = wordSplit(text).map(encryptedList);
    console.log(newList.join(""));

    // const textValue = text.value;
    // console.log(textValue);
    // const textList = textValue.split("");
    // console.log(textList);
    return newList.join("");
}

const decryptionText = (text) => {
    console.log(text);
    const newList = wordSplit(text).map(decryptionList);
    console.log(newList);
}

// encryptedButton.addEventListener("click", encrypted);
const text = "hi dog" ;
const EncryptedText = encryptedText(text);
decryptionText(EncryptedText);