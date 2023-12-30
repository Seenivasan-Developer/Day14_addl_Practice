var parentdiv = document.createElement("div");
parentdiv.className = "main";

var dateElement = document.createElement("input");
dateElement.setAttribute("type", "date");
dateElement.id = "dob";

var button = document.createElement("button");
button.setAttribute("type", "button");
button.innerHTML = "Click Me";
button.className = "btn btn-primary";
button.addEventListener("click", date_manipulation);

var resultdiv = document.createElement("div");
resultdiv.className = "main2";

parentdiv.append(dateElement, button, resultdiv);
document.body.append(parentdiv)

function date_manipulation() {
    var input = document.getElementById("dob").value;
    var time_stamp = Date.parse(input);
    if (time_stamp) {
        var inputdate = new Date(time_stamp);
        var currentdate = new Date();
        var millisecDiff = parseInt(currentdate.getTime() - inputdate.getTime());
        var secondsdiff = mathfloor(millisecDiff, 1000);
        var minutediff = mathfloor(secondsdiff, 60);
        var hoursdiff = mathfloor(minutediff, 60);
        var daydiff = mathfloor(hoursdiff, 24);
        var yeardiff = year_diff(inputdate, currentdate);
        var monthdiff = month_diff(inputdate, currentdate);
        resultdiv.innerHTML = `Given input date is ${inputdate}<br> year ${yeardiff}<br> month ${monthdiff}<br> day ${daydiff}<br> hour ${hoursdiff}<br> minute ${minutediff}<br> second ${secondsdiff}<br> milli second ${millisecDiff}`;
    }
    else {
        resultdiv.innerHTML = "Enter valid date...";
    }
}
function mathfloor(value1, value2) {
    return Math.floor(value1 / value2);
}
function year_diff(value1, value2) {
    var date1 = new Date(value1);
    var date2 = new Date(value2);
    return date2.getFullYear() - date1.getFullYear();
}

function month_diff(value1, value2) {
    var year = year_diff(value1, value2);
    var month = (year * 12) + (value2.getMonth() - value1.getMonth());
    return month
}
