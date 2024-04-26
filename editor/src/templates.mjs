const UI_TEMPLATS = {
    Image: "uiTemplateImage",
    CellAnimation: "uiTemplateCellAnimation",
    Text: "uiTemplateText",
    Sound: "uiTemplateSound"
}

const cloneUITemplate = (type) => {
    const templateID = UI_TEMPLATS[type];
    const template = document.querySelector(`#${templateID}`);
    const clone = template.content.cloneNode(true);
    return clone;
}

export { cloneUITemplate, UI_TEMPLATS }