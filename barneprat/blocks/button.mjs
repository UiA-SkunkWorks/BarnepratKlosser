import Image from "./image.mjs";
import BaseBlock from "./baseBlock.mjs";

class Button extends BaseBlock {

    constructor(callback, source, settings) {
        super();
        this.dispaly = new Image(source, settings);
        this.callback = callback;
        this.init();
        this.target = this.dispaly;
        this.dispaly.target.onclick = (e) => {
            this.callback();
        }
    }

}

export default Button;