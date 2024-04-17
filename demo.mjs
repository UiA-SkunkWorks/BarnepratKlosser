
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}

Start(Demo);

function Demo() {

    const flower = new Blocks.Image("resources/demo/flower.png", { x: 0, y: 0, width: 100, height: 100 });





}

const dragndrop = () => {

    let myX;
    let myY;
    let target;

    function touchStart(e) {
        e.preventDefault();

        target = e.target;
        const touch = e.touches[0];
        const moveOffsetX = whichArt.offsetLeft - touch.pageX;
        const moveOffsetY = whichArt.offsetTop - touch.pageY;

        target.addEventListener("touchmove", touchMove, { passive: false });

        function touchMove(e) {
            const touch = e.touches[0];
            const positionX = touch.pageX + moveOffsetX;
            const positionY = touch.pageY + moveOffsetY;

            target.style.left = `${positionX}px`;
            target.style.top = `${positionY}px`;
        }
    }

    document.body.addEventListener('touchstart', touchStart, { passive: false });
}
dragndrop();