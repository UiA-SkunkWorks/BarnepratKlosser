
const FPS = 30;
const TIME_DELTA = 1000 / FPS;

const listeners = new Set();
let isPaused = false;

const onTick = () => {
    if (!isPaused) {
        listeners.forEach(listener => {
            listener["update"]();
        })
    }
}

const addListener = (listener) => {
    listeners.add(listener);
}

const removeListener = (listener) => {
    listeners.delete(listener);
}

const toggleGlobalPause = () => {
    isPaused = !isPaused;
}

const removeAll = () => {
    listeners.clear();
}

const globalInterval = setInterval(onTick, TIME_DELTA);

export { addListener, removeListener, toggleGlobalPause, removeAll, TIME_DELTA }

