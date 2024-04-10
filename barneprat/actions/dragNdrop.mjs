
let dragTarget = null;
let dragItem = null;
let shiftX = 0;
let shiftY = 0;

const dropTargets = []

window.document.onmousemove = (e) => {
    if (dragTarget) {
        dragTarget.style.left = (e.pageX - shiftX) + "px";
        dragTarget.style.top = (e.pageY - shiftY) + "px";
        dragItem.x = e.pageX - shiftX;
        dragItem.y = e.pageY - shiftY;
    }
}

window.document.onmouseup = (e) => {

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


const Drag = (item, label = "dragDefault") => {

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