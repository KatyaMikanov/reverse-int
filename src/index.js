module.exports = function reverse (n) {
    let numberAbs = Math.abs(n);
    let numberToStr = numberAbs.toString().split('').reverse();
    let resultStr = numberToStr.reduce ((acc, el) => acc + el);
    let result = Number(resultStr);
    return result;
}
