console.log("Exercise 1 - Word Highlighter");

const paragraph = document.getElementById('myParagraph').innerText
const paragraphObj = {};

paragraph.split(' ').map(elt=>{
    let newarr = []
    if(elt.includes('.\n')){
        newarr = elt.split('.\n');
        return (newarr[0],newarr[1])
    }
    else if(elt.includes(`"`)){
        newarr = elt.split(`"`);
        return (newarr[1] !== "") ? (newarr[1]) : (newarr[2])
    }
    else if(elt.includes(",")){
        newarr = elt.split(",");
        return (newarr[1] !== "") ? (newarr[1]) : (newarr[2])
    }
    else if(elt.includes(".")){
        newarr = elt.split(".");
        return (newarr[1] !== "") ? (newarr[1]) : (newarr[2])
    }
    else if(elt.includes(";")){
        newarr = elt.split(";");
        return (newarr[1] !== "") ? (newarr[1]) : (newarr[2])
    }
    else if(elt.includes(":")){
        newarr = elt.split(":");
        return (newarr[1] !== "") ? (newarr[1]) : (newarr[2])
    }
    else{
        return elt;
    }
}).forEach(elt=>{
    if(!Object.keys(paragraphObj).includes(elt)){
        paragraphObj[elt] = 1;
    }
    else{
        paragraphObj[elt]++;
    }
})

let maxes = [Math.max(...Object.values(paragraphObj))]

Object.values(paragraphObj).sort((a,b)=>b-a).forEach(elt=>{
    if(!maxes.includes(elt) && (elt < Math.min(...maxes)) && maxes.length<5){
        maxes.push(elt)
    }
})

let toBeHighlighted = Object.keys(paragraphObj).map(elt=>{
    if(maxes.includes(paragraphObj[elt])){
        return elt
    }
})

while(toBeHighlighted.includes(undefined)){
    toBeHighlighted.splice(toBeHighlighted.indexOf(undefined),1)
}

console.log(toBeHighlighted,'to be highlighted')

document.getElementById('myParagraph').innerHTML = paragraph.split(' ').map(elt=>{
    if(toBeHighlighted.includes(elt)){
        return "<span style='background-color: yellow;'>"+elt+'</span>'
    }
    else{
        return elt
    }
    // if(elt.includes('.\n')){
    //     newarr = elt.split('.\n');
    //     return (newarr[0],newarr[1])
    // }
    // else if(elt.includes(`"`)){
    //     newarr = elt.split(`"`);
    //     return (newarr[1] !== "") ? (newarr[1]) : (newarr[2])
    // }
    // else if(elt.includes(",")){
    //     newarr = elt.split(",");
    //     return (newarr[1] !== "") ? (newarr[1]) : (newarr[2])
    // }
    // else if(elt.includes(".")){
    //     newarr = elt.split(".");
    //     return (newarr[1] !== "") ? (newarr[1]) : (newarr[2])
    // }
    // else if(elt.includes(";")){
    //     newarr = elt.split(";");
    //     return (newarr[1] !== "") ? (newarr[1]) : (newarr[2])
    // }
    // else if(elt.includes(":")){
    //     newarr = elt.split(":");
    //     return (newarr[1] !== "") ? (newarr[1]) : (newarr[2])
    // }
    // else{
    //     return elt;
    // }
}).join(' ')

console.log(maxes,'maxs')