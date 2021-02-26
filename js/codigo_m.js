const inputToTranslate = document.querySelector(".totranslate");
const inputTranslated = document.querySelector(".translated");



function translateTextMorse(word){
    let letter="abcdefghijklmnopqrstuvwxyz 0123456789,";
    let morse=[".- ", "-... ", "-.-. ", "-.. ", ". ", "..-. ", "--. ", ".... ", ".. ", ".--- ", "-.- ", ".-.. ", "-- ", "-. ", "--- ", ".--. ", "--.- ", ".-. ", "... ", "- ", "..- ", "...- ", ".-- ", "-..- ", "-.-- ", "--.. ", "  ", "----- ", ".---- ", "..--- ", "...-- ", "....- ", "..... ", "-.... ", "--... ", "---.. ", "----. ", "/"];
    let result="";
    for(let i of word){
        for(let y of letter){
            if(i == y){
                let a = letter.indexOf(i);
                result = result+morse[a];
            }
        }
    }
    return result;
}

function translateMorseText(morsecode){
    let word = [];
    let aux = "";
    let aux1;
    for(let i of morsecode){
        if(i != "/" && i!= " "){
            aux+=i;
        }
        if(i == "/" || i == " "){
            word.push(aux);
            aux="";
        }
    }

    let morse=[".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "//", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----."];
    let letter="abcdefghijklmnopqrstuvwxyz 123456789";
    let result="";

    for(let y of word){
        for(let x of morse){
            if(y == x){
                aux1=morse.indexOf(y);
            }
        }
        if(y == ""){
            result+=" ";
        } else{
            result+=letter[aux1];
        }
    }

    return result;
}
inputToTranslate.addEventListener("keyup", ()=>{
    let value = inputToTranslate.value;
    let a = translateTextMorse(value.toLowerCase());
    inputTranslated.value = a;
})

inputTranslated.addEventListener("keyup", ()=>{
    let value = inputTranslated.value;
    let b = translateMorseText(value);
    inputToTranslate.value = b;
})

