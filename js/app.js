'use strict';
let Name = prompt("Enter Your Name : ");
alert("Welcome " + Name);
alert("Questions about Emad \n Answer Yes/y  Or No/n  ");
document.write("Welcome " + Name);
document.write('<hr>')
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
    // اجابة صحيحة 
    // if (i === 3)
    // {
    //     alert('The Correct Answer is = ${correctAnswer}');
    // }

}

if(PickNumber !== correctAnswer)
{
    alert(`The Right Answer is Number = ${correctAnswer}` );
}

// الاجابة الصحيحة
// let favFruit = ['apple' ,'orange' , 'mango'];
// let Q7;
// for (let i=1; i<=6;i++)
// {
//     Q7 = prompt("Tell me What is my fav fruit");
//     for(let j=0 ; j< favFruit.length;j++)
//     {
//         if(Q7 === favFruit[j])
//         {
//             alert("Correct");
//             i = 7 ; 
//             //علشان اطلع من الاتنين لوب
//             // ال i هتبقي 8
//             break;

//         }
//     }
// }

document.write('<br>')

let myFavoritePlayer = ["Messi", "Ronaldo", "Salah", "Mbappe", "Lewandowski", "Kane", "Benzema"];
// let Answer = prompt("Who is My Best Actor \n 1.Robert De Niro \n 2.Tom Hanks \n 3.Anthony Hopkins \n 4.Denzel Washington \n 5.Robin Williams \n 6.Morgan Freeman \n 7.Russell Crowe.");

for(let x=0 ; x<6;x++ )
{
    // let z = 0; 
    let Answer = prompt("Who is My Best Player : ");
    let y;
    for (y = 0; y < myFavoritePlayer.length; y++) 
    {
        if(Answer ===myFavoritePlayer[y])
        {
            alert("Correct Answer");
            console.log("The Correct Answer "+ Answer) 
            document.write("Q7:Answer  is : " + Answer)
            // z+=1;
            // if(z == 2) {
            //     break;
            // }
             score+=1 ;
             
             break;
         } 
         
        //  else if (Answer === myFavoritePlayer[y])
        // {
        //     alert("Correct Answer")
        //     console.log("The Correct answer" + Answer)
        //     document.write("Q7:Answer  is : " + Answer) 
        // }  
        
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
document.write('<br>')


alert("The Correct Answers is : \n Messi \n Ronaldo \n Salah \n Mbappe \n Lewandowski \n Kane \n  Benzema ")

alert("Your Score is " + score +" out of 7");
console.log("Your Score is " + score +" out of 7");
document.write('<br>');
document.write("Your Score is " + score +" out of 7");




