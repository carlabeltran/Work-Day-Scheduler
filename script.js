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

        //code on line 54:
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

        //code line 54 in english:get("idname").display text(January 29th 2020, 3:08:57 pm
        
        //test if moment js is working
        console.log("current day is working!!");

//////////////////// Step 2 ////////////////////////////////////////////////////////
//create a function to display date and time
///////////////////////////////////////////////////////////////////////////////////  
    
    //create row

    //append to container

    //apend columns 1-3 to row

    //create column 1 - time block

    //create column 2 - text area

    //create column 3 - save button



    //repeat 


});