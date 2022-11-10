const palindromes = function (string) {
    let processedString = string.toLowerCase().replace(/[^a-z]/g, "");

    return (
        processedString.split("").reverses.join("") == processedString
    )
};

// Do not edit below this line
module.exports = palindromes;
