var today = new Date();
var myhour = today.getHours();
var greeting;
if (myhour > 18){
    greeting = "Good Evening";
}
    else if (myhour > 12){
    greeting = "Good Afternoon";
}

else if ( myhour > 0){
    greeting = "Good morning";
}
else {
    greeting = "welcome";
}

document.write('<h3>' + greeting + '</h3>');