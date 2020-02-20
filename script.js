//verify html and javascript file are properly linked
console.log("Java && HTML are linked!!");


//global variables
var present = $(this).css("backgroundColor", "#E4DACE");

var past = $(this).css("backgroundColor", "#D92139");

var future = $(this).css("backgroundColor", "#AEC33A");

var currentHour = moment().format("h");

var saveBtn = $(".saveBtn");

var row = $(".row");

var textarea = $(".textArea");

var currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

var currentTime = moment().format("h:mm:ss a");

function getStorage(key){
    var value = localStorage.getItem(key)
    if(value) {
        $("#text${key}").text(value);
    };
};

function newDateTime() {
    var date = new Date();
        console.log("date");
        let h = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        console.log("hour: " + h + "Minute: " + mm + "Second: " + ss + "a");
}
$("#currentDay").html(newDateTime());
//this updates the current date every mil sec
var interval = setInterval(newDateTime, 1000);

//////////////////// Step 1 /////////////////////////////////////////////////
//create a function to display date and time
//on HTML Page:<p id="currentDay"></p>
//Ex: January 29th 2020, 3:08:57 pm
//Hint: https://momentjs.com/
/////////////////////////////////////////////////////////////////////////////

//code on line 14:
$(document).ready(function () {
//code line 14 in english:get(html document).start(do the following/this/something ()
//$ = get
//(document) = html document
//.ready = start as soon as document is loaded
//(function () { = do the following/this/something 

//verify function is working
console.log("function is working!!");

    ///////////////////////// Option 1 display date ///////////////////////  
    
    // step 1 for option 1: create a variable to store date and time in (2 lines of code)
    
        //code on line 29:

        
        //code line 29 in english: variable date = January 29th 2020, 3:08:57 pm
        //var = variable 
        //date = the name I chose for my variable that will use to store data in this case the date & time. 
        //moment().format('MMMM Do YYYY, h:mm:ss a'); = January 29th 2020, 3:08:57 pm
    
    // step 2 for option 1: display current date and time on html
    
        //code on line 39:
    //$("#currentDay").html("date + h + mm + ss");
    
        //code line 39 in english: get("idname").in/on html document(display this = date)
        //$ = get
        //# = id
        //currentDay = the name in id
        //in this case paragraph in html document has id name of currentDay 
        //.html = in html document or on html document
        //(date) = display the data stored in date variable
        //in this case it would be: moment().format('MMMM Do YYYY, h:mm:ss a'); = January 29th 2020, 3:08:57 pm
            //this updates the current date

    //this updates the current date every mil sec

    ///////////////////////// Option 2 display date ////////////////////////
    
    // step 1: display the date and time on html page (1 line of code)
        //code on line 55:
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
        //code line 55 in english:get("idname").display text(January 29th 2020, 3:08:57 pm
        //test if moment js is working
        console.log("current day is working!!");
    
    //////////////////// Step 2 ////////////////////////////////////////////
    //create time block, text area, and save button 
    //https://www.w3schools.com/jsref/jsref_gettime.asp
    //One day (24 hours) is 86 400 000 milliseconds 
    //24 hours is military time

    //https://www.w3schools.com/js/js_loop_for.asp
    //for - loops through a block of code a number of time
    //Ex: for(statement 1, statement 2, statement 3)
    //Statement 1 executed (one time) before the execution of code block.
        //set variable before the loop starts (hour = 9)
        //You can initiate many values in statement 1 (separated by comma)
        //Used to initialize the variable used in the loop (hour = 9).

    //Statement 2 defines condition for executing code block.
        //define condition for the loop to run (hour less than 6)
        //Often statement 2 used to evaluate condition of initial variable.
        //If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.

    //Statement 3 executed (every time) after code block has been executed.
        //increases the value each time the code block in loop is run
        //often used to increment and decrement 

    //bootstrap grid for the columns
    //https://getbootstrap.com/docs/4.4/layout/grid/#grid-options

    //array
    //https://stackoverflow.com/questions/5129544/javascript-arrays-braces-vs-brackets
    //Ex: myObject["some value"] or myObject.someValue or myobject.someValue = "hi";

    //array of objects
    //https://api.jquery.com/jquery.each/
    /////////////////////////////////////////////////////////////////////// 

    //create a for loop in order to have the code create all the necessary rows for hours 9 AM - 5 PM
    for (var hour = 9; hour < 18; hour++) {
        //variable hour = 9am; less than 6pm; hour increase each time) 

        //create row
        var row = $('<div class="row time-block" data-time=${hour} id="${hour}">');

        //create column 1 - time block
        var timeBlockColumn = $('<div class="col-2-sm timehour"> <p class="time" data-time=${hour} id="${hour}">' + formatAMPM(hour) + '</p>');
    
        //create column 2 - text area
        var textAreaColumn = $(
        '<div class="col-8-sm d-flex description"> <textarea placeholder="Enter tasks here..." id="text${hour}" class="textArea present"> </textarea>'
        );
        
        //create column 3 - save button
        var saveButtonsColumn = $('<div class="col-2-sm"> <button id="${hour}" type="btn" class="saveBtn" click="saveStorage"> <i class="material-icons" id="icon">save</i> </button>');
        
        //appending all columns to the row
        row.append(timeBlockColumn);
    
        row.append(textAreaColumn);
        
        row.append(saveButtonsColumn);

        //appending row to container
        $(".container").append(row);

        console.log({ hour });
        //for each time block update color
        
    };
    getStorage(hour);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//creata a function to format hours
function formatAMPM(hours) {
console.log("format AMPM is working!!");

    var ampm = hours >= 12 ? "pm" : "am";
    //variable ampm equals hours greater than or equal to 
    //variable ampm is storing greater than or equal to	12 ternary operator
    //>= : greater than or equal to
    // ?: ternary operator
                            
    hours = hours % 12;
    //hour equal hours 
    //% : 	Modulus (Division Remainder)
    
    hours = hours ? hours : 12;
    //hours equals hours ternary hours : 12 
    
    return hours + ampm;
};
formatAMPM();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//function to update colors/validation value?or key?or hour?
//maybe make a function for the the button color and save storage all together

//when someone intially opens the page the backgrounds need to be set maybe a window on load with function inside.
function colorVal() {
    
    var currentHour = new Date().getHours();
    
    for (var hour = 9; hour < 18; hour++) {
    //if hour equal to current hour show appropriate background 
        
        if ($("#{hour}").data("hour") == currentHour) {
            
            $("#text${hour}").addClass("present");
        
        } else if (currentHour < (hour).data$("#${hour}")) {
            //if hour is greater than currenthour
            $("#text${hour}").removeClass("present");
            $('#text${hour}').addClass("future");
        
        } else {
            $("#text${hour}").removeClass("future");
            $('#text${hour}').addClass("past");
        }
    };
};
colorVal();
$(".time-block").each(function () {
    var currentHour = new Date().getHours();
    
    for (var hour = 9; hour < 18; hour++) {
        //if hour equal to current hour show appropriate background 
        
        if ($("#{hour}").data("hour") == currentHour) {
    
            $(this).find(".texArea").addClassList("present");

        }
    }
});