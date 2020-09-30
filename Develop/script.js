$("#currentDay").append(moment().format("dddd, MMMM Do h:mm:ss a"))

currTime = moment().format("HH");

valTime = parseInt(currTime);

function compareTime (){

    $(".color").each(function() {

        var timeBlock = parseInt($(this).attr("id"));


        console.log(timeBlock);
        console.log(valTime);

        if (timeBlock < valTime) {

            $(this).addClass("past");
        }
        else if (timeBlock === valTime){

        $(this).removeClass("past");

        $(this).addClass("present");

        }
        else if (timeBlock > valTime) {

            $(this).removeClass("present");

            $(this).addClass("future");
        }
    });
}

//set for loop to target time block numbers in order to get localStorage
for (let i = 9; i < 18; i++) {

    //set index to start at 9 so it would target .time-block-9 through 17
    $(".time-block-" + i).val(localStorage.getItem("time-block-"+ i));
    //used template and added index to the end of the class name

    }


$(".saveBtn").on("click", function(e){

    var value = $(this).siblings(".description").val();
    console.log(value)
    var time =$(this).siblings(".description").attr("class").split(" ")[2];
//console.log($(this).siblings(".description").attr("class").split(" ")[2])
    localStorage.setItem(time, value); 

});

//calling compareTime function in order to color the rows
compareTime();