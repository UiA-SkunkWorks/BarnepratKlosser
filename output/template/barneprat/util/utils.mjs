function positionElement(element, settings) {
    element.style.position = "absolute";
    element.style.left = `${settings.x}px`;
    element.style.top = `${settings.y}px`;
    element.style.width = `${settings.width}px`;
    element.style.height = `${settings.height}px`;

}

function isRuningOnTouchDevice() {
    return "ontouchend" in window.document;
}

function randomString() {
    return (Math.random() + 1).toString(36).substring(7);
}


export { positionElement, isRuningOnTouchDevice, randomString }
