import { addListener } from "../globalTimer.mjs"

const doesRectsOverlapp = (ra, rb) => {

    if (ra.right <= rb.left || rb.right <= ra.left) {
        return false;
    }

    if (ra.bottom <= rb.top || rb.bottom <= ra.top) {
        return false;
    }

    return true;
}


const Colide = (a, b, callback) => {

    const collision = {
        a, b, callback, update: () => {
            let ra = a.target.getBoundingClientRect();
            let rb = b.target.getBoundingClientRect();

            if (doesRectsOverlapp(ra, rb)) {
                callback(a, b);
            }
        }
    };


    addListener(collision);
    return collision;
}

export default Colide 