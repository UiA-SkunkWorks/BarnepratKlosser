import { isRuningOnTouchDevice, randomString } from "../utils/utils.mjs"

let dragTarget = null;
let dragItem = null;
let shiftX = 0;
let shiftY = 0;

const dropTargets = []

function touchStart(e) {
    //e.preventDefault(); // This makes the click events stop working.

    let target = e.target;
    console.log(target);

    let dragId = target.getAttribute("data-drag-id");
    if (dragId == undefined) { return }

    const touch = e.touches[0];
    const moveOffsetX = target.offsetLeft - touch.pageX;
    const moveOffsetY = target.offsetTop - touch.pageY;

    target.addEventListener("touchmove", touchMove, { passive: false });

    function touchMove(e) {
        const touch = e.touches[0];
        const positionX = touch.pageX + moveOffsetX;
        const positionY = touch.pageY + moveOffsetY;

        target.style.left = `${positionX}px`;
        target.style.top = `${positionY}px`;
    }
}

if (isRuningOnTouchDevice()) {
    document.body.addEventListener('touchstart', touchStart, { passive: false });
}


const onMovement = (e) => {
    if (dragTarget) {
        dragTarget.style.left = (e.pageX - shiftX) + "px";
        dragTarget.style.top = (e.pageY - shiftY) + "px";
        dragItem.x = e.pageX - shiftX;
        dragItem.y = e.pageY - shiftY;
    }
}

const endMovment = (e) => {

    if (!dragTarget) { return }

    dragTarget.v = true;
    let elementBelow = document.elementFromPoint(e.clientX, e.clientY);
    dragTarget.hidden = false;

    if (elementBelow) {

        let dropTarget = dropTargets.filter(item => item.item.target == elementBelow)

        if (dropTarget.length > 0) {
            dropTarget = dropTarget[0];
            dropTarget.callback(dragItem);
        }
    }


    dragTarget = null;
    dragItem = null;
}

window.document.onmouseup = endMovment;
window.document.onmousemove = onMovement;

const Drag = (item, label = "dragDefault") => {

    item.dragId = randomString();
    item.target.setAttribute("data-drag-id", item.dragId);

    item.target.onmousedown = (e) => {
        dragItem = item;
        dragTarget = item.target;
        dragTarget.setAttribute("data-drag", label);
        item.target.style.zIndex = 9999;
        shiftX = e.clientX - item.target.getBoundingClientRect().left;
        shiftY = e.clientY - item.target.getBoundingClientRect().top;
    }

    item.target.ondragstart = (e) => {
        return false;
    }
}

const Drop = (item, filter, callback) => {
    item.target.classList.add(".dropptarget");
    dropTargets.push({ item, filter, callback });
}

export { Drag, Drop };