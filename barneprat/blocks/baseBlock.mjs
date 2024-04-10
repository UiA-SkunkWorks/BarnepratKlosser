class BaseBlock {

    constructor() {
        this.target = null;
    }

    hide() {
        this.target.hidden = true;
    }

    show() {
        this.target.hidden = false;
    }

    update() {

    }

}

export default BaseBlock;