/**
 * Created by V-Rod on 11/16/16.
 */
"use strict";

(function () {

    //---Displays
    var left = document.getElementById("displayLeft");
    var operator = document.getElementById("displayCenter");
    var right = document.getElementById("displayRight");
    var decimalPressOnce = false;


    //--Getting numbers, presses and sending them to the displays
    var pressNumberButton = function () {
        var numberButtons = document.getElementsByClassName("number");
        for (var i = 0; i < numberButtons.length; i++) {
            numberButtons[i].addEventListener("click", sendNumberToTop);
            console.log(numberButtons);
        }

    };

    var sendNumberToTop = function () {
        if (operator.value == "") {
            if (this.id == "decimalBtn") { //If what I'm clicking is a button with an id "decimalBtn"
                if (decimalPressOnce == false) {
                    decimalPressOnce = true;
                } else {
                    return;
                }
            } left.value += this.getAttribute("value");
        } else {
            right.value += this.getAttribute("value");
        }

    };

    pressNumberButton();

    //--Decimal Point Problem: in order to prevent the user to add more than once decimal
    //point to any display



    //--Operands
    var pressSignButton = function () {
        var operationButtons = document.getElementsByClassName("signs");
        for (var i = 0; i < operationButtons.length; i++) {
            operationButtons[i].addEventListener("click", sendSignToTop);
        }
    };


    var sendSignToTop = function () {
        var operator = document.getElementById("displayCenter");
        operator.value = this.getAttribute("value");
    };
    pressSignButton();


    //--Math Operations
    var equals = function () {
        var equalsButton = document.getElementById("equals");
        equalsButton.addEventListener("click", math);
    };

    var math = function () { //change name of variable; figure out to refactor the parseFloats creating one function for all operations
        var x = left.value;
        var y = operator.value;
        var z = right.value;
        var result;

        if (y == "+") {
            result = (parseFloat(x) + parseFloat(z));
        } else if (y == "-") {
            result = (parseFloat(x) + (-parseFloat(z)));
        } else if (y == "/") {
            result = (parseFloat(x) / parseFloat(z));
        } else if (y == "*") {
            result = (parseFloat(x) * parseFloat(z));
        } else if (y == "%") { //change the id of the percentage so there is no confusion with a symbol
            result = parseFloat((x) * 0.1)
        } else if (y == "sqrt") {
            result = (parseFloat(Math.sqrt(x))).toFixed(4);
        }

        left.value = result;
        right.value = "";
        operator.value = "";

    };
    equals();


    //--Clear the displays
    var clearDisplay = function () {
        var clearButton = document.getElementById("clear");
        clearButton.addEventListener("click", function () {
            left.value = "";
            operator.value = "";
            right.value = "";
            decimalPressOnce = false;
        });
    };
    clearDisplay();


})();