$("#currentDay").append(moment().format("dddd, MMMM Do h:mm:ss a"))

currTime = moment().format("HH");

valTime = parseInt(currTime);

// console.log(valTime);

// console.log($(".time-block-2").data("value"))

function compareTime (){

    $(".color").each (function() {

        var timeBlock = $(this).attr("id");


         console.log(timeBlock);
        // console.log(valTime)
        if (timeBlock < valTime) {

            $(this).addClass("past");
        }
        else if (timeBlock === valTime){

        $(this).removeClass("past");

        $(this).addClass("present");

        }
        else if (timeBlock > valTime) {

            $(this).removeClass("past");

            $(this).removeClass("present");

            $(this).addClass("future");
        }


        
    });
}

$(".saveBtn").on("click", function(e){
    var value = $(this).siblings(".description").val();
    console.log(value)
    var time =$(this).siblings(".description").attr("class").split(" ")[2];
//console.log($(this).siblings(".description").attr("class").split(" ")[2])
    localStorage.setItem(time, value); 

});


$(".time-block-15").val(localStorage.getItem("time-block-15"))


compareTime();