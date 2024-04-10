import * as Utils from "../utils/_utils.mjs";
import * as GlobalTimer from "../globalTimer.mjs"
import BaseBlock from "./baseBlock.mjs";

class CellAnimation extends BaseBlock {


    constructor(images, settings = { loop: false, auto: false, x: 0, y: 0, width: 100, height: 100 }, container) {
        super();
        this.container = container || document.body;
        this.sourceFiles = images;
        this.images = [];
        this.x = settings.x || 0;
        this.y = settings.y || 0;
        this.width = settings.width || 100;
        this.height = settings.height || 100;
        this.loop = settings.loop;
        this.auto = settings.auto;
        this.isPlaying = false;
        this.currentAnimationCell = 0;
        this.maxAnimationCell = this.sourceFiles.length;

        this.img = document.createElement("img");
        Utils.positionElement(this.img, settings);
        this.container.appendChild(this.img);
        this.sourceFiles.forEach(image => {
            fetch(image).then(resp => resp.blob()).then(blob => this.images.push(URL.createObjectURL(blob))).catch(e => console.error(e));
        });

        if (this.auto) {
            this.start();
        }

        this.target = this.img;
    }


    start() {
        if (this.isPlaying) {
            return;
        }
        this.isPlaying = true;
        GlobalTimer.addListener(this);
    }

    update() {

        if (!this.isPlaying) {
            return;
        }

        this.img.src = this.images[this.currentAnimationCell];
        this.currentAnimationCell++;
        if (this.currentAnimationCell >= this.maxAnimationCell) {
            this.currentAnimationCell = 0;
        }
    }

    next() {

        if (this.isPlaying) {
            return;
        }

        this.img.src = this.images[this.currentAnimationCell];
        this.currentAnimationCell++;
        if (this.currentAnimationCell >= this.maxAnimationCell) {
            this.currentAnimationCell = 0;
        }
    }

    stop() {
        this.isPlaying = false;
        GlobalTimer.removeListener(this);
    }
}

export default CellAnimation;