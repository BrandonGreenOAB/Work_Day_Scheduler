$("#currentDay").append(moment().format("dddd, MMMM Do h:mm:ss a"))

var timeblk1 = $(".time-block-1").val()

console.log(timeblk1)

function compareTimes() {

    if ($(".time-block-1").val() < moment().format("h")) {

        $(".time-block-1").addClass("class past");
    }
    if ($(".time-block-1").val() > moment().format("h")) {

        $(".time-block-1").addClass("class future");
    }
    if ($(".time-block-1").val() === moment().format("h")) {

        $(".time-block-1").addClass("class present");
    }

    //

    if ($(".time-block-2").val() < moment().format("HH")) {

        $(".time-block-2").addClass("class past")
    }
    if ($(".time-block-2").val() > moment().format("HH")) {

        $(".time-block-2").addClass("class future")
    }
    if ($(".time-block-1").val() === moment().format("H")) {
        $(".time-block-2").addClass("class present")
    }

    //

    if ($(".time-block-3").val() < moment().format("HH")) {

        $(".time-block-3").addClass("class past")
    }
    if ($(".time-block-3").val() > moment().format("HH")) {

        $(".time-block-3").addClass("class future")
    }
    if ($(".time-block-1").val() === moment().format("HH")) {
        $(".time-block-3").addClass("class present")
    }

    //

    if ($(".time-block-4").val() < moment().format("HH")) {

        $(".time-block-4").addClass("class past")
    }
    if ($(".time-block-4").val() > moment().format("HH")) {

        $(".time-block-4").addClass("class future")
    }
    if ($(".time-block-1").val() === moment().format("HH")) {
        $(".time-block-4").addClass("class present")
    }

    //

    if ($(".time-block-5").val() < moment().format("HH")) {

        $(".time-block-5").addClass("class past")
    }
    if ($(".time-block-5").val() > moment().format("h")) {

        $(".time-block-5").addClass("class future")
    }
    if ($(".time-block-1").val() == moment().format("h")) {
        $(".time-block-5").addClass("class present")
    }

    if ($(".time-block-6").val() < moment().format("h")) {

        $(".time-block-6").addClass("class past")
    }
    if ($(".time-block-6").val() > moment().format("h")) {

        $(".time-block-6").addClass("class future")
    }
    else {
        $(".time-block-6").addClass("class present")
    }

    if ($(".time-block-7").val() < moment().format("h")) {

        $(".time-block-7").addClass("class past")
    }
    if ($(".time-block-7").val() > moment().format("h")) {

        $(".time-block-7").addClass("class future")
    }
    else {
        $(".time-block-7").addClass("class present")
    }

    if ($(".time-block-8").val() < moment().format("h")) {

        $(".time-block-8").addClass("class past")
    }
    if ($(".time-block-8").val() > moment().format("h")) {

        $(".time-block-8").addClass("class future")
    }
    else {
        $(".time-block-8").addClass("class present")
    }

    if ($(".time-block-9").val() < moment().format("h")) {

        $(".time-block-9").addClass("class past")
    }
    if ($(".time-block-9").val() > moment().format("h")) {

        $(".time-block-9").addClass("class future")
    }
    else {
        $(".time-block-9").addClass("class present")
    }

    

    
}

compareTimes();