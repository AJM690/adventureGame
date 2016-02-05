//Adventure Game
//Created By: AJM690
//Date: January 30, 2016

// Check if the user is ready to play
confirm("I am ready to play!")

var age = prompt("What is your age?")

if (age < 13)
{
    console.log("You can play, but be careful...")
}
else
{
    console.log("Onward! To Victory!")
}

console.log("You are standing at the entrance of a dark cave.  There is a noise from within...")

console.log("You listen carefully, but do not hear the noise again.")

var userAnswer = prompt("Do you want to enter the cave?")

if (userAnswer === "yes")
{
    console.log("You carefully and slowly enter the cave...")
}
else
{
    console.log("You continue to listen outside the cave for the noise again.")
}

var feedback = prompt("On a scale from 0 to 10, how would you rate this game>")

if (feedback > 8)
{
    console.log("Thank You! Keep an eye out for the next game update!")
}
else
{
    console.log("Crawl back under that rock you live under!")
}