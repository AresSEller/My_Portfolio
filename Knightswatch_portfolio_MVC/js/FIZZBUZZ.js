//function FizzBuzzA(value1, value2) {
//    let returnValue = "";
//    for (let i = 1; i <= 100; i++) {
//        if (i % value1 == 0 && i % value2 == 0) {
//            returnValue += 'FizzBuzz, ';
//        }
//        else if (i % value1 == 0) {
//            returnValue += 'Fizz, ';
//        }
//        else if (i % value2 == 0) {
//            returnValue += 'Buzz, ';
//        }
//        else {
//            returnValue += i + ', ';
//        }
//    }
//    return returnValue.substr(0, returnValue.length - 2);
//}

//function buzzIt() {
//    let output = "";
//    let val1 = document.getElementById('Fizzvalue').value;
//    let val2 = document.getElementById('Buzzvalue').value;
//    output = FizzBuzzA(val1, val2);
//    document.getElementById('results').innerHtml = output;
//}



$(document).ready(function () {

    $("#fizzbuzz").submit(function (event) {
        var start = parseInt($("#start").val());
        var finish = parseInt($("#finish").val());

        // check that the input values are numbers
        if (!isNaN(start) && !isNaN(finish)) {
            // loop through numbers
            var i;
            for (i = 1; i <= 100; i++) {

                if (i % start == 0 && i % finish == 0) {
                    $("#output").append("<span class='fizzbuzz'>FizzBuzz</span>");
                } else if (i % 3 === 0) {
                    $("#output").append("<span class='fizz'>Fizz</span>");
                } else if (i % 5 === 0) {
                    $("#output").append("<span class='buzz'>Buzz</span>");
                } else {
                    $("#output").append("<span>" + i + "</span>");
                }
            }
            $("#output span").fadeIn(400);
        } else {
            // if the inputs are not valid numbers
            $("#error").append("<p class='error'>Please enter a valid number in both boxes</p>");
        }
        // prevent form submission
        return false;
    });

    // empty the output & error divs
    $('input').on('focus', function () {
        $("#output span").fadeOut(400, function () {
            $("#output").empty();
        });
        $("#error").empty();
    });

}); // end ready