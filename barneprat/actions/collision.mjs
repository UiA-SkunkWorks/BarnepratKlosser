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

const Snap = (a, b, snapOffset) => {
    const snap = {
        a, b, snapOffset,
        update: () => {
            Colide(a, b, () => {
                let rectA = a.target.getBoundingClientRect();
                let centerX_A = rectA.left + rectA.width / 2;
                let centerY_A = rectA.top + rectA.height / 2;
        
                let rectB = b.target.getBoundingClientRect();
                
                let leftB = centerX_A - rectB.width / 2;
                let topB = centerY_A - rectB.height / 2;
        
                b.target.style.left = leftB + "px";
                b.target.style.top = topB + "px";
            });
        }
    };

    addListener(snap);
    return snap;
};



export { Colide, Snap };
