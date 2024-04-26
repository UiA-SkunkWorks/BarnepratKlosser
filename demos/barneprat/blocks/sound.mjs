import BaseBlock from "./baseBlock.mjs";

class Sound extends BaseBlock {

    constructor(source, settings = { loop: false, auto: false }) {
        super();
        this.source = source;
        this.loop = settings.loop;
        this.auto = settings.auto;
        this.audio = null;
        this.isPlaying = false;
        this.audio = new Audio(this.source);
        this.audio.loop = this.loop;
        this.audio.autoplay = this.auto;
        this.target = this.audio;
    }

    start() {
        if (this.isPlaying) {
            return;
        }
        this.isPlaying = true;
        this.audio.play();
        this.audio.onended = (e) => {
            this.isPlaying = false;
        };
    }

    stop() {
        this.audio.stop();
        this.isPlaying = false;
    }
}

export default Sound;