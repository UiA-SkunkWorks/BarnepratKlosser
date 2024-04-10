import { BLOCK_TYPES } from "./constants.mjs";
import { UI_TEMPLATS } from "./templates.mjs";

export const ToolBoxHandler = {
    onToolboxItemCreated: null
}

const addImageButton = document.getElementById("addImageBt");
const addTextButton = document.getElementById("addTextBt");
const addSoundButton = document.getElementById("addSoundBt");

let id = 1;
const incrId = () => { return id++; }

const addImage = () => { return { id: `img${incrId()}`, type: BLOCK_TYPES.Image, x: 0, y: 0, width: 100, height: 100, source: null } }
const addText = () => { return { id: `txt${incrId()}`, type: BLOCK_TYPES.Text, x: 0, y: 0, width: 100, height: 100, text: "" } }
const addSound = () => { return { id: `sound${incrId()}`, type: BLOCK_TYPES.Sound, loop: false, autoPlay: false, source: null } }


const onToolboxItemClick = (action) => {
    let item = action();
    if (ToolBoxHandler.onToolboxItemCreated) {
        ToolBoxHandler.onToolboxItemCreated(item);
    }
}

addSoundButton.onclick = () => { onToolboxItemClick(addSound, UI_TEMPLATS.Sound); }
addTextButton.onclick = () => { onToolboxItemClick(addText, UI_TEMPLATS.Text); }
addImageButton.onclick = () => { onToolboxItemClick(addImage, UI_TEMPLATS.Image); }
