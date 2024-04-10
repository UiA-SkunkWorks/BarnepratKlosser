function positionElement(element, settings) {
    element.style.position = "absolute";
    element.style.left = `${settings.x}px`;
    element.style.top = `${settings.y}px`;
    element.style.width = `${settings.width}px`;
    element.style.height = `${settings.height}px`;

}


export { positionElement }
