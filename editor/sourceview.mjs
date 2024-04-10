import * as IO from "./io.mjs"
import { STORAGE_KEY } from "./constants.mjs"

const sourceTogleButton = document.getElementById("toggleSourceBt");
const sourceExportButton = document.getElementById("exportSourceBt");
const sourceDisplay = document.getElementById("source");

sourceExportButton.onclick = (ev) => {
    let project = IO.retrive(STORAGE_KEY);

    console.log(project);
}

sourceTogleButton.onclick = (ev) => {
    if (sourceDisplay.style.display === "none") {
        sourceDisplay.style.display = "flex";
    } else {
        sourceDisplay.style.display = "none";
    }
}

const updateSourceDisplay = (items) => {
    sourceDisplay.innerHTML = "";

    let output = "";

    items.forEach(element => {
        output += JSON.stringify(element);
        output += "\n\n";
    });

    sourceDisplay.innerText = output;
}

const listeners = [];
const addOnSourceUpdateEventListener = (callback) => { listeners.push(callback) }

sourceDisplay.onkeydown = (ev) => {
    if (ev.code == "Enter" && ev.shiftKey == false) {
        const rawElements = sourceDisplay.innerText.split("\n").filter(item => item.length > 0 && item != "\n").join(",");
        const items = JSON.parse(`[${rawElements}]`);
        listeners.forEach(callback => callback(items));
        updateSourceDisplay(items);
    }
}



export { updateSourceDisplay as update, addOnSourceUpdateEventListener }