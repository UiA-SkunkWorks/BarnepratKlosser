//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Blocks from "./barneprat/blocks.mjs";
import * as Actions from "./barneprat/actions.mjs";
import * as Utils from "./barneprat/utils.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    //removeAll();
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

Start(home);

// Disse scenene er her som eksempler. Du kan ta dem bort eller endre dem. 

function Velkommen() {
    const velkommen = new Blocks.Text("Trykk på denne teksten", { style: "overskrift", x: 0, y: 0, width: 100, height: 100 });
    Actions.Click(velkommen, () => {
        GaaTil(home);
    })
}

function scene2() {
    new Blocks.Text("Dette er en ny scene, som du ser pga at du trykket ", { style: "overskrift2", x: 0, y: 0, width: 500, height: 500 });
}



function anim() {
    /*
    const bilde5 = new Blocks.Image("bilder/bird/8bird_.png", {x:0,y:0,width:250,height:250});
    let array = ["bilder/bird/1bird_.png", "bilder/bird/2bird_.png", "bilder/bird/3bird_.png", "bilder/bird/5bird_.png", "bilder/bird/8bird_.png"];

    const testAnim = new Blocks.CellAnimation(array,{x:0,y:0,width:250,height:250, loop:false, auto:true})
    Actions.Click(bilde5, ()=>{
        testAnim.start();
    })
    */
    let drage = new Blocks.Image("bilder/drage1.jpg", { x: 500, y: 50, width: 450, height: 550 });
        
    let animTimerScene1 = new Actions.CountDown(2, ()=>{
        drage = new Blocks.Image("bilder/drage2.jpg", { x: 500, y: 50, width: 450, height: 550 });
        
        animTimerScene2.start();
    });
    
    let animTimerScene2 = new Actions.CountDown(1, ()=>{
        drage = new Blocks.Image("bilder/drage3.jpg", { x: 500, y: 50, width: 450, height: 550 });
        
        animTimerScene3.start();
    });
    
    let animTimerScene3 = new Actions.CountDown(1, ()=>{
        drage = new Blocks.Image("bilder/drage4.jpg", { x: 500, y: 50, width: 450, height: 550 });
        animTimerScene4.start();
    });

    let animTimerScene4 = new Actions.CountDown(1, ()=>{
        drage = new Blocks.Image("bilder/drage5.jpg", { x: 500, y: 50, width: 450, height: 550 });
    });

    animTimerScene1.start();

    

    
}
function home()
{

// Å gjøre: Gi bedre navn til alle tingene.

	const gameBoard = new Blocks.Image("bilder/brett.png", {x:0,y:0,width:1400,height:700});
	const triangle2 = new Blocks.Image("bilder/triangle.png", {x:0,y:50,width:100,height:100});
    const diamond = new Blocks.Image("bilder/diamond.png", {x:38,y:230,width:200,height:200});
	const sound16 = new Blocks.Sound("lyd/sound.m4a", {loop:false, auto:false});
    Actions.Click(diamond, () => {
        GaaTil(puzzle)
    })
    Actions.Tween(triangle2,2,0)
}
function puzzle()
{
   alert("Test")
// Å gjøre: Gi bedre navn til alle tingene.
/*
    let place1 = false;
    let place2 = false;
    let place3 = false;
    let place4 = false;

    const pusslePlass1 = new Blocks.Image("bilder/sone.png", {x:400,y:50,width:250,height:250});
    const pusslePlass2 = new Blocks.Image("bilder/sone.png", {x:650,y:50,width:250,height:250});
    const pusslePlass3 = new Blocks.Image("bilder/sone.png", {x:400,y:300,width:250,height:250});
    const pusslePlass4 = new Blocks.Image("bilder/sone.png", {x:650,y:300,width:250,height:250});
*/    
    const square1 = new Blocks.Image("bilder/drage1.jpg", {x:0,y:0,width:250,height:250});
    const square2 = new Blocks.Image("bilder/drage2.jpg", {x:0,y:300,width:250,height:250});
    const square3 = new Blocks.Image("bilder/drage3.jpg", {x:1000,y:0,width:250,height:250});
    const square4 = new Blocks.Image("bilder/drage4.jpg", {x:1000,y:300,width:250,height:250});

	Actions.Drag(square1);
    Actions.Drag(square2);
    Actions.Drag(square3);
    Actions.Drag(square4);
    /*
    Actions.Colide(pusslePlass1,square1,()=>{place1 = true},()=>{place1 = false});
    Actions.Colide(pusslePlass2,square2,()=>{place2 = true},()=>{place2 = false});
    Actions.Colide(pusslePlass3,square3,()=>{place3 = true},()=>{place3 = false});
    Actions.Colide(pusslePlass4,square4,()=>{place4 = true},()=>{place4 = false});
*/
    const bird = new Blocks.Image("bilder/drage1.jpg", {x:500,y:660,width:450,height:550});
    Actions.Click(bird, ()=>{
        bird = new Blocks.Image("bilder/drage4.jpg", {x:500,y:660,width:450,height:550});
        //if (place1 && place2 && place3 && place4) {
            alert("Well done!");
        //}
    })
    
}
