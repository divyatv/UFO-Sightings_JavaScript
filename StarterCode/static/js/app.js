// from data.js
var tableData = data;

// Getting tbody tag
var tbody_tag = document.getElementsByTagName("tbody")[0];

// Get the columns of the data table
var columns=[]
columns=Object.keys(tableData[0]);

//Define the tr tag
var tr_tag;

//Set button for later user to click
var button = d3.select("#filter-btn");

//Code to just render all the table content.


//Code for button click and to filter the data based on user preference.
button.on("click", function() {
  //Clear previous search results.
tbody_tag.innerHTML=" ";
  //Get input element
var inputElement_datetime = d3.select("#datetime");
  // Get the value property of the input element
var inputValue_datetime = inputElement_datetime.property("value");

var inputElement_city = d3.select("#city");
  // Get the value property of the input element
var inputValue_city = inputElement_city.property("value");

var inputElement_shape = d3.select("#shape");
  // Get the value property of the input element
var inputValue_shape = inputElement_shape.property("value");

tableData.forEach(function(name){
  tr_tag=document.createElement('tr');
  
  columns.forEach(function(column){    
    
    var denter= new Date(inputValue_datetime);
    var dtable= new Date(name['datetime']);

    //Convert city and shape to all lower case so that it will match the dataset
    var city_lowercase= inputValue_city.toLowerCase();
    var shape_tolowercase=inputValue_shape.toLowerCase();

        
    //if statement to compare the dates and city and shape
    if((inputValue_datetime == "" || denter.getTime()===dtable.getTime()) && 
        (city_lowercase == "" || city_lowercase == name['city']) && 
        (shape_tolowercase == "" || shape_tolowercase == name['shape']))
{
    //console.log(column)
     var td_tag=document.createElement('td');
     var td_text=document.createTextNode(name[column]);
    //console.log(td_text);
     td_tag.appendChild(td_text);
     //console.log(td_tag);
    tr_tag.appendChild(td_tag);
    
}

    
  });
 
  //console.log(tr_tag);
  tbody_tag.appendChild(tr_tag);

  //fill the td
  //tr_tag.appendChild(td_tag);
  //var textnode= document.createTextNode(name);
 
});
});
