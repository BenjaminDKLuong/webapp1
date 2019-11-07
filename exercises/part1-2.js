// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Add the 5 variables here
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code part 2 here:
// milesToMars is a number with the value of kilometersToMars * milesPerKilometer.
// hoursToMars is a number with the value of milesToMars / speedMph.
// daysToMars is a number with the value of hoursToMars / 24.
var milesToMars = function (kilometersToMars, milesPerKilometer) {
    return kilometersToMars * milesPerKilometer;
};
var hoursToMars = function (milesToMars, speedMph) {
    return milesToMars / speedMph;
};
var daysToMars = function (hoursToMars) {
    return hoursToMars / 24;
};

console.log(spacecraftName + " would take " + daysToMars + " days to get to Mars.");
// Code the output statement here (use a template literal):
