const fibonacci = function(index) {
    if (index < 0) return 'OOPS';
    if (index === 0) return 0;
    if (index == 1 || 2) return 1;
   
    let actualNumber = 1;
    let exNumber = 1;
    let temp;
    //1 1 2 3 5 


    //1 -> 1
    //2 -> 1
    //3 -> 1 + 1
    //4 -> 1 + 2
    for (let i = 2; i <= index; i++) {
        temp = actualNumber;
        actualNumber += exNumber;
        exNumber = temp;
    }
    return actualNumber;
};

// Do not edit below this line
module.exports = fibonacci;
