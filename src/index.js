module.exports = function reverse(n) {
    let str = n + "";

    return str.split("").reverse().join("") > 0
        ? str.split("").reverse().join("")
        : str.split("").reverse().join("").replace("-", "");
};
