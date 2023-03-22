function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    var value = cb(result);
    return value;
}
addAndHandle(1, 2, function (number) {
    console.log(number);
    return number;
});
