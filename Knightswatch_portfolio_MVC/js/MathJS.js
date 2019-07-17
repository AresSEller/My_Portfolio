function myFunction() {
    var a = +$("#num1").val();
    var b = +$("#num2").val();
    var c = +$("#num3").val();
    var d = +$("#num4").val();
    var e = +$("#num5").val();
    var str = "min value: " + Math.min(a, b, c, d, e) + " max value: " + Math.max(a, b, c, d, e);
    document.getElementById("demo").innerHTML = str;
}