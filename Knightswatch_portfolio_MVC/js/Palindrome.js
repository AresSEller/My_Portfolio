$("#btnPalindrome").click(function () {

    var input = $("#wordInput").val();

    var output = ReverseWord(input);

    if (input.toLowerCase() == output.toLowerCase()) {
        $("#Results").text("The word " + input + " reversed equals " + output + ". Therefor " + input + " is a Palindorme");
    }
    else {
        $("#Results").text("The word " + input + " reversed equals " + output + ". Therefor " + input + " is not a Palindrome");
    }
});

function ReverseWord(word) {
    return word.split('').reverse().join('');
}