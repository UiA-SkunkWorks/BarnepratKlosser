//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
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
//#endregion

Start(Eggekurven);

// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function Velkommen() {
    const velkommen = new Blocks.Text("Trykk på denne teksten", { style: "overskrift", x: 0, y: 0, width: 100, height: 100 });
    Actions.Click(velkommen, () => {
        GaaTil(Eggekurven);
    })
}

function scene2() {
    new Blocks.Text("Dette er en ny scene, som du ser pga at du trykket ", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
}

function Eggekurven()
{

// Å gjøre: Gi bedre navn til alle tingene.

	const txt1 = new Blocks.Text("Fang eggene!", {style:"headingText", x:400,y:5,width:400,height:100});
	const img2 = new Blocks.Image("resources/demo/egg.jpg", {x:200,y:10,width:100,height:100});
	let test = Actions.Tween(img2,0,1)
	Actions.Tween.Start(test);
	const img1 = new Blocks.Image("resources/demo/basket.jpg", {x:200,y:550,width:100,height:100});
	Actions.Drag(img1);
}