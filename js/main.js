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
    ["a", 1],
    ["e", 4],
    ["i", 3],
    ["o", 3],
    ["u", 3],
]);

// functions
const wordSplit = (word) => {
    const textValue = word.split("");
    return textValue;
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


const decryptionList = (list) =>{
    for (let index = 0; index < list.length; index++) {
        if(encryptedRules.has(list[index])){
            list.splice(index+1, decryptionRules.get(list[index]));
        }
    }
    console.log(list);
    return list
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
    // const newList = wordSplit(text).map(decryptionList);
    const newList = decryptionList(wordSplit(text));
    console.log(newList.join(""));

    return newList;
}

// encryptedButton.addEventListener("click", encrypted);
const text = "hi dog" ;
const EncryptedText = encryptedText(text);
decryptionText(EncryptedText);