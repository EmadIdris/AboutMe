'use strict';
let Name = prompt("Enter Your Name : ");
alert("Welcome " + Name);
alert("Questions about Emad \n Answer Yes/y  Or No/n  ");
document.write("Welcome " + Name);
document.write('<br>')
console.log("Welcome " + Name);

let score = 0;

//q1
function q1(){
let eat = prompt("Emad Like To Eat Mansaf?").toLowerCase();
switch (eat) {
    case 'yes':
    case 'y':
        alert("Correct Answer");
        document.write("Q1:Emad Like To Eat Mansaf : Yes ")
        console.log("Correct Answer");
        score+=1 ;
        break;
    case 'no':
    case 'n':
        alert("Incorrect Answer");
        document.write("Q1:Incorrect Answer")
        break;
    default:
        alert("None")
        document.write("None")

        break;
}
}
q1();

document.write('<br>')

//q2
function q2(){
let wakeUp = prompt("Emad Like To Get Up Early?").toLowerCase();
switch (wakeUp) {
    case 'yes':
    case 'y':
        alert("Incorrect Answer");
        document.write("Q2:Incorrect Answer")

        break;
    case 'no':
    case 'n':
        alert("Correct Answer");
        document.write("Q2:Emad Like To Get Up Early : No")
        console.log("Correct Answer");
        score+=1 ;
        break;
    default:
        alert("None")
        document.write("None")

        break;
}
}
q2();

document.write('<br>')

//q3
function q3(){
let Song = prompt("Emad Like To Listen To Songs?").toLowerCase();
switch (Song) {
    case 'yes':
    case 'y':
        alert("Correct Answer");
        document.write("Q3:Emad Like To Listen To Songs : Yes ")
        console.log("Correct Answer");
        score+=1 ;
        break;
    case 'no':
    case 'n':
        alert("Incorrect Answer");
        document.write("Q3:Incorrect Answer")

        break;
    default:
        alert("None")
        document.write("None")

        break;
}
}
q3();

document.write('<br>')

//q4
function q4(){
let Sports = prompt("Emad Like To Play Sports?").toLowerCase();
switch (Sports) {
    case 'yes':
    case 'y':
        alert("Correct Answer");
        document.write("Q4:Emad Like To Play Sports : Yes ")
        console.log("Correct Answer");
        score+=1 ;
        break;
    case 'no':
    case 'n':
        alert("Incorrect Answer");
        document.write("Q4:Incorrect Answer")

        break;
    default:
        alert("None")
        document.write("None")

        break;
}
}
q4();

document.write('<br>')

//q5
function q5(){
let Movies = prompt("Emad Like To Watch Movies?").toLowerCase();
switch (Movies) {
    case 'yes':
    case 'y':
        alert("Correct Answer");
        document.write("Q5:Emad Like To Watch Movies : Yes ")
        console.log("Correct Answer");
        score+=1 ;
        break;
    case 'no':
    case 'n':
        alert("Incorrect Answer");
        document.write("Q5:Incorrect Answer")

        break;
    default:
        alert("None")
        document.write("None")

        break;
}
}
q5();

document.write('<br>')

//q6
function q6(){
alert("Lets Play A Guessing game:");

let PickNumber;
 let correctAnswer = 7;
for (let i = 0; i < 4; i++) 
{
    PickNumber = Number(prompt("guessing game:  "));

    if (PickNumber === correctAnswer) {
        alert("Thats Right");
        console.log("Correct Answer " + PickNumber);
        document.write("Q6:correct Answer")
        score+=1 ;
        break;
    }
    else if (PickNumber > correctAnswer) {
        alert("Too High")
        document.write("Q6:Too High")
    }
    else if (PickNumber < correctAnswer) {
        alert("Too Low")
        document.write("Q6:Too Low")
    }
    else {
        document.write("Q6:Incorrect Answer")
    }
    

}

if(PickNumber !== correctAnswer)
{
    alert(`The Right Answer is Number = ${correctAnswer}` );
}

/
}
q6();

document.write('<br>')

//q7
function q7(){
let myFavoritePlayer = ["Messi", "Ronaldo", "Salah", "Mbappe", "Lewandowski", "Kane", "Benzema"];

for(let x=0 ; x<6;x++ )
{
    let Answer = prompt("Who is My Best Player : ");
    let y;
    for (y = 0; y < myFavoritePlayer.length; y++) 
    {
        if(Answer ===myFavoritePlayer[y])
        {
            alert("Correct Answer");
            console.log("The Correct Answer "+ Answer) 
            document.write("Q7:Answer  is : " + Answer)
            
             score+=1 ;
             
             break;
         } 
         
       
        
    }
    if (Answer === myFavoritePlayer[y])
    {
        break;
    }
    else
    {
        alert("Incorrect");
    }
}
}
q7();

document.write('<br>')


alert("The Correct Answers is : \n Messi \n Ronaldo \n Salah \n Mbappe \n Lewandowski \n Kane \n  Benzema ")

alert("Your Score is " + score +" out of 7");
console.log("Your Score is " + score +" out of 7");
document.write("Your Score is " + score +" out of 7");




