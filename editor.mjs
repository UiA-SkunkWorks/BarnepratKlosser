import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { STORAGE_KEY } from "./editor/constants.mjs";
import * as IO from "./editor/io.mjs"
import { ToolBoxHandler } from "./editor/toolbox.mjs";
import { cloneUITemplate } from "./editor/templates.mjs";
import * as sourceView from "./editor/sourceview.mjs";

const workArea = document.getElementById("workArea");

const newProjectBT = document.getElementById("newProjectBT");

newProjectBT.onclick = (e) => {

    if (confirm("Dette vil slette alt arbeidet ditt, ønsker å gjøre dette?")) {
        project = { items: [] };
        IO.save(project, STORAGE_KEY);
        workArea.innerHTML = "";
    }
}

let project = IO.retrive(STORAGE_KEY) || { items: [] };

if (project.items.length > 0) {
    restoreProject(project);
}


ToolBoxHandler.onToolboxItemCreated = (item) => {
    project.items.push(item);
    displayItem(item);
    IO.save(project, STORAGE_KEY);
}

IO.addOnSaveEventListener(() => {
    sourceView.update(project.items);
});

sourceView.addOnSourceUpdateEventListener((items) => {
    project.items = items;
    restoreProject(project);
    IO.save(project, STORAGE_KEY);
})

function restoreProject(project) {
    workArea.innerHTML = "";
    project.items.forEach(item => {
        displayItem(item);
    });
    sourceView.update(project.items);
}

function displayItem(item) {
    let view = cloneUITemplate(item.type)
    workArea.appendChild(view);
    let items = document.querySelectorAll(".item")
    view = items[items.length - 1];
    view.setAttribute("id", item.id);
    view.querySelector('button[data-action="delete"]').onclick = () => {
        deleteItem(item);
    }

    view.querySelectorAll("[data-label]").forEach(el => {
        el.onchange = (e) => {
            let attribute = e.target.getAttribute("data-label");
            item[attribute] = e.target.value;
            IO.save(project, STORAGE_KEY);
            sourceView.update(project.items);
        };
    });


}

function deleteItem(item) {

    const view = document.getElementById(item.id);
    if (view) {
        view.remove();
    }

    let index = project.items.indexOf(item);
    if (index > -1) {
        project.items.splice(index, 1);
    }

    IO.save(project, STORAGE_KEY);
}




