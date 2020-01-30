//verify html and javascript file are properly linked
console.log("Java && HTML are linked!!");

//set up local storage

//////////////////// Step 1 ////////////////////////////////////////////////////////
//create a function to display date and time
//on HTML Page:<p id="currentDay"></p>
//Ex: January 29th 2020, 3:08:57 pm
//Hint: https://momentjs.com/
///////////////////////////////////////////////////////////////////////////////////

//code on line 14:
$(document).ready(function () {
//code line 14 in english:get(html document).start(do the following/this/something ()
//$ = get
//(document) = html document
//.ready = start as soon as document is loaded
//(function () { = do the following/this/something 

//verify function is working
console.log("function is working!!");

    ///////////////////////// Option 1 display date ////////////////////////////    
    
    // step 1 for option 1: create a variable to store date and time in (2 lines of code)
    
        //code on line 29:
        //var date = moment().format('MMMM Do YYYY, h:mm:ss a'); 
    
        //code line 29 in english: variable date = January 29th 2020, 3:08:57 pm
        //var = variable 
        //date = the name I chose for my variable that will use to store data in this case the date & time. 
        //moment().format('MMMM Do YYYY, h:mm:ss a'); = January 29th 2020, 3:08:57 pm
    
    // step 2 for option 1: display current date and time on html
    
        //code on line 39:
        //$("#currentDay").html(date)
    
        //code line 39 in english: get("idname").in/on html document(display this = date)
        //$ = get
        //# = id
        //currentDay = the name in id
        //in this case paragraph in html document has id name of currentDay 
        //.html = in html document or on html document
        //(date) = display the data stored in date variable
        //in this case it would be: moment().format('MMMM Do YYYY, h:mm:ss a'); = January 29th 2020, 3:08:57 pm

    ///////////////////////// Option 2 display date ////////////////////////////    
    
    // step 1: display the date and time on html page (1 line of code)

        //code on line 55:
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

        //code line 55 in english:get("idname").display text(January 29th 2020, 3:08:57 pm
        
        //test if moment js is working
        //console.log("current day is working!!");

    //////////////////// Step 2 //////////////////////////////////////////////////////
    //create time block, text area, and save button 
    //https://www.w3schools.com/jsref/jsref_gettime.asp
    //One day (24 hours) is 86 400 000 milliseconds 
    //24 hours is military time

    //https://www.w3schools.com/js/js_loop_for.asp

    //for - loops through a block of code a number of times

    //Ex: for(statement 1, statement 2, statement 3)

    //Statement 1 is executed (one time) before the execution of the code block.
        //set variable before the loop starts (hour = 9)
        //You can initiate many values in statement 1 (separated by comma)
        //Used to initialize the variable used in the loop (hour = 9).

    //Statement 2 defines the condition for executing the code block.
        //define condition for the loop to run (hour less than 6)
        //Often statement 2 is used to evaluate the condition of the initial variable.
        //If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.

    //Statement 3 is executed (every time) after the code block has been executed.
        //increases the value each time the code block in loop is run
        //often used to increment and decrement 

    //bootstrap grid for the columns
    //https://getbootstrap.com/docs/4.4/layout/grid/#grid-options

    ///////////////////////////////////////////////////////////////////////////////// 

    // work on time block

    //establish hours 9 AM - 5 PM
    
    //create a for loop 
    //establish hours 9 AM - 5 PM
    
    for (var hour = 9; hour < 18; hour++){
    //variable hour = 9; less than 6; hour increase each time)
    
    //create row
    var row = $('<div class="row">');

    //create column 1 - time block
    var time = $('<div class="col-2-sm"><p class="hour"></p>');
    
    //create column 2 - text area
    var description = $('<div class="col-8-sm"><textarea class="task"></textarea>');
    
    //create column 3 - save button
    var save = $('<div class="col-2-sm"><button class="saveButton"></button>');

    //append columns 1-3 to row
    
    row.append(time)
    
    row.append(description)
    
    row.append(save)

    //add row to container
    $(".container").append(row)
    
    }

    //function to update colors

//event listener for save button to trigger function to save in local storage

});
