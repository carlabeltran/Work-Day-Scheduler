//TEST IS JAVASCRIPT FILE IS LINKED TO HTML PAGE
console.log("JAVA & HTML LINKED!!");

//DISPLAYS THE DAY
var todaysDate = moment().format("MMMM Do, YYYY")
console.log(todaysDate);

//DISPLAYS THE CURRENT TIME AM/PM
var currentTime = moment().format("h:mm:ss a");
console.log(currentTime);

//DISPLAYS THE CURRENT HOUR AM / PM
var currentHour = moment().format("h A");
console.log(currentHour);

var workDayScheduler = [];

//FUNCTION TRIGGERS ONCE THE HTML PAGE IS LOADED
$(document).ready(function () {

  //DISPLAYS THE CURRENT DATE AND TIME ON WORKDAY SCHEDULER HEADING
  $("#currentDay").text(todaysDate);

  //TESTING IF THE DATE AND TIME IS ON THE WORKDAY SCHEDULER HEADING
  console.log(currentDay);

  $("#currentTime").text(currentTime);
  
  //TESTING IF THE DATE AND TIME IS ON THE WORKDAY SCHEDULER HEADING
  console.log(currentTime);

  displayWorkScheduler();
});


function displayWorkScheduler() {
  
  var hourNow = parseInt(moment().hour());

  //HOUR FOR LOOP 
  for (var hour = 9; hour < 18; hour++) {
    //variable hour = 9am; less than 6pm; hour increase each time)
  
    var hourIndex = parseInt(moment().format("h"))

    //THIS VARIBALE STORS THE HOUR ID
    var hourID = moment().hour[hour];

    //CREATE A ROW TO WRAP EVERYTHING IN
    var row = $('<div class="row">');
    
    //CREATE COLUMN 1 FOR THE HOUR
    var timeColumn = $("<div class='timeColumn col-1 w-100 h-100 mx-0 my-0 px-0 py-0'>");

    var timeBlock = $('<span class="timeBlock">' + formatAMPM(hour) + '</span>');

    timeColumn.append(timeBlock);

    //CREATE COLUMN 1 FOR THE TEXT
    var textColumn = $("<div class='col-10 w-100 h-100 mx-0 my-0 px-0 py-0'>");

    var textInput = $("<input class='workSchedulerText' placeholder='Enter schedule here...'>");

    var textId = "text-input-" + hour;
    console.log(hour);

    textInput.attr("id", textId);
    console.log(textId);

    //IF ELSE STATEMENT TO ESTABLISH THE BACKGROUND OF THE TEXT INPUT AREA
    if ( hourNow == hourIndex) {
      
      textInput.addClass("present");
      console.log("present");

    } else if ( currentHour > hourID ) {
      
      textInput.addClass("past");
      console.log("past");

    } else {
      
      textInput.addClass("future");
      console.log("future");

    }
    
    textInput.val(workDayScheduler[hour - 9]);
    textColumn.append(textInput);

    //CREATE COLUMN 1 FOR THE SAVE BUTTON

    var saveColumn = $("<div class='saveColumn col-1 w-100 h-100 mx-0 my-0 px-0 py-0'>")

    var saveButton = $("<button type='button' class='saveButton col-1 w-100 h-100 mx-0 my-0 px-0 py-0' onclick='storeUserWorkScheduler()'><i class='material-icons' id='icon'>save</i>");

    saveButton.attr("data-textinput", hour);
    saveColumn.append(saveButton);


    row.append(timeColumn);
    row.append(textColumn);
    row.append(saveButton);

    $(".workDaySchedulerList").append(row);

  };

};

////////////////////////////////////////////////////////////////////
//CREATE A FUNCTION TO FORMAT HOURS && CHANGES THE HOUR DISPLAY FROM MIILTARY TIME TO REGULAR TIME
/////////////////////////////////////////////////////////////////////
function formatAMPM(hour) {
console.log("format AMPM is working!!");

  var ampm = hour >= 12 ? "PM" : "AM";
  //variable ampm equals hours greater than or equal to 
  //variable ampm is storing greater than or equal to 12 ternary operator
  //>= : greater than or equal to
  // ?: ternary operator
                            
  hour = hour % 12;
  //hour equal hours 
  //% :   Modulus (Division Remainder)
    
  hour = hour ? hour : 12;
  //HOURS EQUALS HOURS 
    
  return hour + " " + ampm;
};
//INITIALIZE FORMATAMPM(HOURS)
formatAMPM();
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////
//SAVE WORK SCHEDULE TO LOCAL STORAGE
/////////////////////////////////////////////////////////////////////
saveButton.on("click", storeUserWorkScheduler);
function storeUserWorkScheduler() { 
  console.log(storeUserWorkScheduler);


}



/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////