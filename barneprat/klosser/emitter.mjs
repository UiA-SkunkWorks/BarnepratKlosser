import * as Utils from "../utils/_utils.mjs";
import BaseBlock from "./baseBlock.mjs";

class Emitter extends BaseBlock {

    constructor(source, itemCount, settings = { x: 0, y: 0, width: 100, height: 100 }, container) {
        super();
        this.container = container || document.body;
        this.source = source;
        this.x = settings.x || 0;
        this.y = settings.y || 0;
        this.width = settings.width || 100;
        this.height = settings.height || 100;
        this.itemCount = itemCount;
        this.itemContainer = document.createElement("div");
        Utils.positionElement(this.itemContainer, settings);
        this.container.appendChild(this.itemContainer);
        this.target = this.itemContainer;
    }

}


export default Emitter;