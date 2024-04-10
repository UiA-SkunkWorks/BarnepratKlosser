//#region 
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
//#endregion

let spill = null

try {
    spill = await import("spill.mjs")
} catch (error) {
    alert("Noe er feil");
    console.log(error);
}
