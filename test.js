
var start = "12345678"
var result = "";
var source = start.replace(/\s/g, '');
for (var i = 0; i < source.length; i++) {
    if (i % 4 == 0 && i != 0) {
        result += " ";
    }
    result += source[i];
}
console.log(result)
