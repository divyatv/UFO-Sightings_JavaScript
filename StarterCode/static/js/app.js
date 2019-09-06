// from data.js
var tabledata = data;

// YOUR CODE HERE!
// Select the button
var columns=[]
columns=Object.keys(tabledata[0]);
console.log(columns)

var body=d3.select('tbody');
var button = d3.select("#filter-btn");

button.on("click", function() {

//filter-btn
// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");
 // Get the value property of the input element
var inputValue = inputElement.property("value");

//function filter(date){
for(i=0; i< tabledata.length; i++){
  //create a tr tag
  body.append("tr");
  for (j=0; j< columns.length ;j++){
   //fill the td tags
  //if (tabledata[i][columns['city']] == inputValue){
 // d3.select("tbody").append("td").html(tabledata[i][columns[j]]);
  //}
    // print each item -console.log(tabledata[i][columns[j]]);
  } 
  console.log(tabledata[i][columns['city']])

}
}

//console.log(filter);




  
