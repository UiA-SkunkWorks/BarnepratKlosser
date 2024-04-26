//#region 
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
//#endregion


await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

let spill = null

try {
    spill = await import("./spill.mjs")
} catch (error) {
    alert("Noe er feil");
    console.log(error);
}

