// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 1: Add the 5 variables here


let spacecraftName:string=	'Determination';
let speedMph:	number	=17500;
let kilometersToMars:	number	=225000000;
let kilometersToTheMoon:	number	=384400;
let milesPerKilometer:	number=	0.621;


// Code part 2 here:
// milesToMars is a number with the value of kilometersToMars * milesPerKilometer.
// hoursToMars is a number with the value of milesToMars / speedMph.
// daysToMars is a number with the value of hoursToMars / 24.

let milesToMars = function(kilometersToMars: number,milesPerKilometer:number): number { 
    return kilometersToMars*milesPerKilometer; 
};
let hoursToMars = function(milesToMars: number,speedMph:number): number { 
    return milesToMars/speedMph; 
};
let daysToMars = function(hoursToMars: number): number { 
    return hoursToMars/24; 
};



console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`)

// Code the output statement here (use a template literal):

