const repeatString = function(string, num) {
    if (num < 0) return "ERROR";

    let stringrepeat = "";
    for (let i = 0; i < num; i++) {
        stringrepeat += string;
        console.log(stringrepeat);
    }
    
    return stringrepeat;
};    

// Do not edit below this linen
module.exports = repeatString;
