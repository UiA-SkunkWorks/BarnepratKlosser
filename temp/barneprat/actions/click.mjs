const Click = (item, callback) => {
    item.target.onclick = (e) => {
        callback();
    }
}


export default Click;