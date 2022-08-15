function checkCreds(){
    console.log("checkCreds() started");
//create needed variables
var firstName;
var lastName;
var badgeNumb;
var fullName;
var fullNameLength;

//move form data into variables
firstName = document.getElementById("fName").value;
console.log(firstName);
lastName = document.getElementById("lName").value;
console.log(lastName);
fullName = firstName + " " + lastName;
console.log(fullName);
fullNameLength = fullName.length;
console.log("The full name is " + fullNameLength + " characters long.");
badgeNumb = document.getElementById("badgeID").value;
console.log(badgeNumb);

//input validation
if(fullNameLength > 20){
    document.getElementById("loginStatus").innerHTML = "full name is invalid";
} else if (badgeNumb > 999 || badgeNumb < 1){
    document.getElementById("loginStatus").innerHTML = "Badge Number is invalid";
} else {
    alert("Login correct! Welcome, " + fullName);
    location.replace("./UATSpace.html");
}
}
//if incorrect, present error in "loginStatus" div, else go to uatspacepage.html
