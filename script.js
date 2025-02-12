function NumOnClick(val) {
    document.getElementById("display").value += val;
}
function clearDisplayScreen() {
    document.getElementById("display").value = "";
}
function calculate() {
    var eq = document.getElementById("display").value;
    if (eq == "") {
        document.getElementById("display").value = 0;
    }
    else {
        var result = eval(eq);
        document.getElementById("display").value = result;
    }
}