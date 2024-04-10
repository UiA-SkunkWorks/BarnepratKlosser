import * as GlobalTimer from "../globalTimer.mjs"

const tweenItems = []

const TweenManager = {
    "update": () => {
        tweenItems.forEach(tween => {
            if (tween.active) {
                let x = tween.item.x + tween.dx;
                let y = tween.item.y + tween.dy;
                tween.item.target.style.left = x + "px"
                tween.item.target.style.top = y + "px";
                tween.item.x = x;
                tween.item.y = y;
            }
        });
    }
}


GlobalTimer.addListener(TweenManager);


const Tween = (item, dx, dy) => {
    let tweenItem = { item, dx, dy, active: true };
    tweenItem.pause = () => {
        tweenItem.active = false;
    }
    tweenItem.start = () => {
        tweenItem.active = true;
    }
    tweenItem.reverse = () => {
        tweenItem.dx *= -1;
        tweenItem.dy *= 1;
    }
    tweenItems.push(tweenItem);
    return tweenItem;
}




export default Tween;