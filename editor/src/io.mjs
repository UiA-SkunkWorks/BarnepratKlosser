
const listeners = [];

const addOnSaveEventListener = (callback) => { listeners.push(callback) }

const onSave = () => {
    listeners.forEach(callback => callback());
}

const save = (data, key) => {
    localStorage.setItem(key, JSON.stringify(data));
    onSave();
}

const retrive = (key) => {
    let savedData = localStorage.getItem(key);
    if (savedData != null) {
        return JSON.parse(savedData);
    }
    return null;
}

export { save, retrive, addOnSaveEventListener }