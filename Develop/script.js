$("#currentDay").append(moment().format("dddd, MMMM Do h:mm:ss a"))

var hr = $(".hr").text()

var hrArr = [];

i = 0;

function hrToVal() {

    hrArr.push(hr);

    console.log(hrArr)

}


function whatTime() {
    for (let i = 0; i < hrArr.length; i++) {

        parseInt(hrArr[i]);

        console.log(hrArr); 
    }
}

whatTime();

hrToVal();



