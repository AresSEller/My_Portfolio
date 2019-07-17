$("#btnFact").click(function () {
    var NTFV = Number($("#NTF").val());

    var result = Factorial(NTFV);

    $("#factResult").text(result);

});

function Factorial(number) {

    for (var loop = number - 1; loop > 1; loop--) {
        number *= loop
    }
    return number;
}