//1. Declare an empty array using JS literal notation to store student names in future.
let studentNames = [];

//2.Declare an empty array using JS object notation to store student names in future. 
let studentNames1 = new Array();

//3.Declare and initialize a strings array. 
let studentNames2 = ["John", "Alice", "Michael", "Sarah"];

//4.  Declare and initialize a numbers array.
let numbersArray = [1, 2, 3, 4, 5];

//5.  Declare and initialize a boolean array. 
let booleanArray = [true, false, true, false];

//6. Declare and initialize a mixed array. 
let mixedArray = ["John", 25, true, null, {name: "Alice", age: 30}];

//7.Declare and Initialize an array and store available education qualifications in Pakistan
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2>Qualifications</h2>");
document.write("<ol>");
for(let i=0 ; i<qualifications.length ; i++){
    document.write("<li>"+qualifications[i]+"</li>");
}
document.write("</ol>");

//8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students
let names = ["Ali","Amna","Afia"];
let score = [320,230,480];
let totalMarks = 500; 
for (let i = 0; i < names.length; i++) {
    let percentage = (score[i] / totalMarks) * 100;
    document.write("Score of "+names[i]+" is "+score[i]+" and percentage is "+percentage+"%<br>");
}

//9.
let colors = ["Red","Yellow","Green"];
document.write("<h3>Initial Colors Array:</h3>");
document.write(colors.join(", ") + "<br>");

// a. Ask user what color to add to the beginning & update the array
let colorAtBeginning = prompt("What color do you want to add to the beginning?");
colors.unshift(colorAtBeginning); // Add color at the beginning
document.write("<h3>After Adding Color to the Beginning:</h3>");
document.write(colors.join(", ") + "<br>");

// b. Ask user what color to add to the end & update the array
let colorAtEnd = prompt("What color do you want to add to the end?");
colors.push(colorAtEnd); // Add color at the end
document.write("<h3>After Adding Color to the End:</h3>");
document.write(colors.join(", ") + "<br>");

// c. Add two more colors to the beginning
colors.unshift("Pink", "Yellow"); // Adding two colors to the beginning
document.write("<h3>After Adding Two Colors to the Beginning:</h3>");
document.write(colors.join(", ") + "<br>");

// d. Delete the first color in the array
colors.shift(); // Remove the first color
document.write("<h3>After Deleting the First Color:</h3>");
document.write(colors.join(", ") + "<br>");

// e. Delete the last color in the array
colors.pop(); // Remove the last color
document.write("<h3>After Deleting the Last Color:</h3>");
document.write(colors.join(", ") + "<br>");

// f. Ask user at which index to add a color
let indexToAdd = prompt("At which index do you want to add a color?");
let colorToAdd = prompt("Enter the color name to add at index " + indexToAdd);
colors.splice(indexToAdd, 0, colorToAdd); // Add the color at the specified index
document.write("<h3>After Adding Color at Index " + indexToAdd + ":</h3>");
document.write(colors.join(", ") + "<br>");

// g. Ask user at which index to delete color(s) and how many colors to delete
let indexToDelete = prompt("At which index do you want to delete color(s)?");
let deleteCount = prompt("How many colors do you want to delete?");
colors.splice(indexToDelete, deleteCount); // Remove specified number of colors from the index
document.write("<h3>After Deleting " + deleteCount + " Color(s) from Index " + indexToDelete + ":</h3>");
document.write(colors.join(", ") + "<br><br>");

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
let studentScore = [53,78,45,99];
document.write("Scores of Students: " + studentScore + "<br>");
let orderedScore =studentScore.sort();
document.write("Ordered scores of Students: " + orderedScore + "<br><br>");

//11.Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
let cityNames = ["Karachi","Lahore","Islamabad","Peshawar","Quetta"];
document.write("Cities list: " + cityNames + "<br>");
let selectedCities = cityNames.slice(2,4);
document.write("Selected cities list: "+selectedCities + "<br><br>");

//12.Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
document.write("<h3>Array</h3>");
document.write(arr);
document.write("<h3>String</h3>");
document.write(singleString+"<br><br>");

//13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
let array = [];
array.push("keyboard");
array.push("Mouse");
array.push("printer");
array.push("Monitor");
document.write("Devices: "+array+"<br>");
while(array.length>0){
    let removedelement = array.shift();
    document.write(removedelement+"<br>");
}
document.write("<br>");

//14.Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out)
let array2 = [];
array2.push("keyboard");
array2.push("Mouse");
array2.push("printer");
array2.push("Monitor");
document.write("Devices: "+array2+"<br>");
while(array2.length>0){
    let removedelement = array2.pop();
    document.write(removedelement+"<br>");
}
document.write("<br>");

//15 Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>"); 
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");



