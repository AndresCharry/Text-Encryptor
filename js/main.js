// variables
const text = document.getElementById("text");
const viewText = document.getElementById("viewText");
const invisible = document.getElementById("invisible");
const observable = document.getElementById("observable");
const encryptedButton = document.getElementById("button-enc");
const decryptionButton = document.getElementById("button-dec");
const copyButton = document.getElementById("copy");
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
    const text = textValue().toLowerCase();
    const newList = wordSplit(text).map(encryptedList);
    areaView(newList.join(""));
}

const decryptionText = () => {
    const text = textValue().toLowerCase();
    const newList = decryptionList(wordSplit(text));
    areaView(newList.join(""));
}

const copy = () => {
    viewText.select();
    navigator.clipboard.writeText(viewText.value)
  .then(() => {
    console.log('Text copied to clipboard');
  })
  .catch(err => {
    console.error('Error copying text: ', err);
  });
  navigator.clipboard.readText()
  .then( viewText => {
    // do something with the text, e.g. paste it into an element
    text.value = viewText;
  })
  .catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });
}

encryptedButton.addEventListener("click", encryptedText);
decryptionButton.addEventListener("click", decryptionText);
copyButton.addEventListener("click", copy);

