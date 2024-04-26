
import * as GlobalTimer from "../globalTimer.mjs"

class CountDown {

    constructor(duration, callback, settings = { onTick: false, auto: false }) {
        this.duration = duration * 1000;
        this.callback = callback;
        this.remainingTime = 0;
        this.updateOnTick = settings.onTick;
        this.remainingTime = this.duration;
        this.active = false;

        if (settings.auto) {
            this.start();
        }
    }

    start() {
        this.remainingTime = this.duration;
        this.active = true;
        GlobalTimer.addListener(this)
    }

    update() {

        if (!this.active) { return }

        this.remainingTime -= GlobalTimer.TIME_DELTA;
        if (this.remainingTime < 0) {
            this.active = false;
            this.callback(true);
            GlobalTimer.removeListener(this)
        } else if (this.updateOnTick) {
            this.callback(false);
        }
    }


}


export default CountDown 