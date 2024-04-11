import * as Utils from "../utils/utils.mjs";
import BaseBlock from "./baseBlock.mjs";

class Text extends BaseBlock {

    constructor(text, settings = { style: null, x: 0, y: 0, width: 100, height: 100 }, container) {
        super();
        this.container = container || document.body;
        this.textContainer = document.createElement("div");
        this.textContainer.style["user-select"] = "none";
        this.container.appendChild(this.textContainer);
        this.textContainer.innerHTML = text;
        Utils.positionElement(this.textContainer, settings);
        if (settings.style) {
            this.textContainer.setAttribute("class", settings.style);
        }
        this.target = this.textContainer;
    }

    update() {

    }
}


export default Text;