//TESTING IF JAVASCRIPT FILE IS LINKED TO HTML PAGE
console.log("JAVA & HTML LINKED!!");
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////
//DISPLAYS THE DAY
var todaysDate = moment().format("MMMM Do, YYYY")
console.log(todaysDate);

//DISPLAYS THE CURRENT TIME AM/PM
var currentTime = moment().format("h:mm:ss a");
console.log(currentTime);

//DISPLAYS THE CURRENT HOUR AM / PM
var currentHour = moment().format("h A");
console.log(currentHour);

var workDaySchedulerList = document.querySelectorAll(".workDaySchedulerList");

displaySchedule();
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



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


/////////////////////////////////////////////////////////////////////
//CREATES AND DISPLAYS WORK DAY SCHEDULER ALSO CHANGES THE BACKGROUND COLOR BASED ON THE TIME OF DAY
/////////////////////////////////////////////////////////////////////
function displaySchedule() {

  //DISPLAYS THE CURRENT DATE AND TIME ON WORKDAY SCHEDULER HEADING
  $("#currentDay").text(todaysDate);

  //TESTING IF THE DATE AND TIME IS ON THE WORKDAY SCHEDULER HEADING
  console.log(currentDay);

  $("#currentTime").text(currentTime);
  
  //TESTING IF THE DATE AND TIME IS ON THE WORKDAY SCHEDULER HEADING
  console.log(currentTime);
  
  //THIS VARIBALE STORS THE HOUR ID
  var hourId = parseInt(moment().hour());
  console.log("hourId", hourId);

  //HOUR FOR LOOP 
  for (var hour = 9; hour < 18; hour++) {
    //variable hour = 9am; less than 6pm; hour increase each time)

    var hourEl = moment().hour(hour);
    console.log("hourEl:", hourEl)

    var hourIndex = parseInt(hourEl.format("h"));
    console.log("hourIndex:", hourIndex);

    //CREATE A ROW TO WRAP EVERYTHING IN
    var row = $('<div class="workDaySchedulerList row">');

    //CREATE COLUMN 1 FOR THE HOUR
    var timeColumn = $("<div class='time col-1 w-100 h-100 mx-0 my-0 px-0 py-0'>");

    var timeBlock = $('<span class="hour">' + formatAMPM(hour) + '</span>');
    console.log(hour);

    //APPENDING TIME BLOCK TO TIME COLUMN
    timeColumn.append(timeBlock);

    //CREATE COLUMN 1 FOR THE TEXT
    var textColumn = $("<form class='workDaySchedulerForm col-10 w-100 h-100 mx-0 my-0 px-0 py-0'>");

    var textInput = $("<input class='workDaySchedulerText' placeholder='Enter work schedule here...'>");

    var textInputId = "text-input-" + hour;
    console.log(textInputId);

    textInput.attr("id", textInputId);
    console.log(textInput);

    //IF ELSE STATEMENT TO ESTABLISH THE BACKGROUND OF THE TEXT INPUT AREA
    if (currentHour == hourIndex) {

      //THIS WILL CHANGE THE INPUT BACKGROUND TO GREEN
      textInput.addClass("present");
      console.log("present");
    } else if (currentHour > hourIndex) {
      
      //THIS WILL CHANGE THE INPUT BACKGROUND TO RED
      textInput.addClass("past");
      console.log("past");
    } else {
      
      //THIS WILL CHANGE THE INPUT BACKGROUND TO GREEN
      textInput.addClass("future");
      console.log("future");
    }

    textInput.val(workDaySchedulerList[ hour - 9]);
    textColumn.append(textInput);

    //CREATE COLUMN 1 FOR THE SAVE BUTTON

    var saveColumn = $("<div class='saveColumn col-1 w-100 h-100 mx-0 my-0 px-0 py-0'>");

    var saveButton = $("<button type='button' class='saveButton col-1 w-100 h-100 mx-0 my-0 px-0 py-0' onclick='storeSchedule()'><i class='material-icons' id='icon'>save</i>");

    saveButton.attr("data-textinput", hour);
    console.log(timeBlock);
    
    saveColumn.append(saveButton);

    row.append(timeColumn);
    row.append(textColumn);
    row.append(saveButton);

    $(".workDayScheduler").append(row);


  };

};
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

$(".saveButton").on("click", storeSchedule);

////////////////////////////////////////////////////////////////////
//GET WORK SCHEDULE TO LOCAL STORAGE
/////////////////////////////////////////////////////////////////////

function storeSchedule() {
  console.log(storeSchedule);
  
  //TEXT TIME VARIABLE IS PARSING INTEGER WITH THE ATTRIBUTE OF DATA-TEXTINPUT
  let textTime = parseInt($(this).attr("data-textinput"));
  console.log(textTime);

  var textValue = $("#text-input-" + textTime).val();
  console.log(textValue);
  
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
//SAVE WORK SCHEDULE TO LOCAL STORAGE
/////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
