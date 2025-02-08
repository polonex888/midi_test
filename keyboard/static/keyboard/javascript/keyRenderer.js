const WHITE_KEY = {
    width: 20,
    height: 100,
    margin: 0,
    zIndex: 1,
    backColor: white,
    fontColor: black,
}
const BLACK_KEY = {
    width: 16,
    height: 60,
    margin: -6,
    zIndex: 2,
    backColor: black,  
    fontColor: white,
}

const HOVER_COLOR = '#ccc'


function createKeyboard(minNodeNum,maxNodeNum) {
    let keyConst = isBlack ? BLACK_KEY : WHITE_KEY;
    let keyboardDiv = document.createElement("div");
    keyboardDiv.className = "keyboard";
    keyboardDiv.style.display = "flex"
    keyboardDiv.style.position = "relative";
    for(let note = minNodeNum; note <= maxNodeNum; note++){
        let keyDiv = document.createElement("div");
        let octave = Math.floor((notenum) / 12)-1
        let isBlack = [1, 3, 6, 8, 10].includes(note % 12);
        keyDiv.className = "key"
        keyDiv.noteNum = note
        keyDiv.style.borderWidth = "1px";
        keyDiv.style.borderColor = "#000000";
        keyDiv.style.borderStyle = "solid";
        keyDiv.style.position = "relative";
        keyDiv.style.width = isBlack? WHITE_KEY.width:BLACK_KEY.width
        keyDiv.style.height = isBlack? WHITE_KEY.height:BLACK_KEY.height
        keyDiv.style.marginLeft = isBlack? WHITE_KEY.margin:BLACK_KEY.margin
        keyDiv.zIndex = isBlack? WHITE_KEY.zIndex:BLACK_KEY.zIndex
        keyDiv.style.fontSize = isBlack? WHITE_KEY.width:BLACK_KEY.width
        keyDiv.style.backColor = isBlack? WHITE_KEY.backColor:BLACK_KEY.backColor
        keyDiv.style.color = isBlack? WHITE_KEY.fontColor:BLACK_KEY.fontColor
        keyDiv.hover(() => (this.style.backColor = HOVER_COLOR),
                     () => (this.style.backColor = isBlack? WHITE_KEY.backColor:BLACK_KEY.backColor))
        keyboardDiv.appendChild(keyDiv)
    }
}