import { addListener } from "./globalTimer.mjs";

const Bound = (item, bounds, callback) => {

    const orgUpdate = item.update;

    addListener(item);

    item.update = () => {

        orgUpdate.call(item)

        let x = item.x;
        let y = item.y;
        let boundsViolation = false;

        if (bounds.left > x) {
            item.x = bounds.left
            boundsViolation = true;
        } else if (bounds.right < x) {
            item.x = bounds.right
            boundsViolation = true;
        }

        if (bounds.top > y) {
            item.y = bounds.top;
            boundsViolation = true
        } else if (bounds.bottom < y) {
            item.y = bounds.bottom
        }

        if (boundsViolation) {
            callback(item);
        }

    }
}

const Bounds = (left, top, right, bottom) => {
    return { left, top, right, bottom }
}

export { Bound, Bounds }