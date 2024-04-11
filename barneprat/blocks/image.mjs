import * as Utils from "../utils/utils.mjs";
import BaseBlock from "./baseBlock.mjs";

class Image extends BaseBlock {

    constructor(source, settings = { x: 0, y: 0, width: 100, height: 100 }, container) {
        super();
        this.container = container || document.body;
        this.source = source;
        this.x = settings.x || 0;
        this.y = settings.y || 0;
        this.width = settings.width || 100;
        this.height = settings.height || 100;
        this.img = document.createElement("img");
        this.img.src = this.source;
        Utils.positionElement(this.img, settings);
        this.container.appendChild(this.img);
        this.target = this.img;
    }

}


export default Image;