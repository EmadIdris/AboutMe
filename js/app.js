'use strict';
let Name = prompt("Enter Your Name : ");
alert("Welcome "+Name);
alert("Questions about Emad \n Answer Yes Or No");
document.write("Welcome "+Name);
document.write('<hr>')
console.log("Welcome "+Name);


let  eat = prompt("Emad Like To Eat Mansaf?").toLowerCase();
switch (eat) {
    case 'yes':
        alert("Correct Answer");
        document.write("Emad Like To Eat Mansaf : Yes ")
        console.log("Correct Answer");
        break;
    case 'no':
        alert("Incorrect Answer");
        document.write("Incorrect Answer")
        
        break;
    default:
        alert("None")
        document.write("None")
        
        break;    
}

document.write('<br>')

let wakeUp = prompt("Emad Like To Get Up Early?").toLowerCase();
switch (wakeUp) {
    case 'yes':
        alert("Incorrect Answer");
        document.write("Incorrect Answer")
        
        break;
    case 'no':
            alert("Correct Answer");
            document.write("Emad Like To Get Up Early : No")
            console.log("Correct Answer");
            break;
    default:
        alert("None")
        document.write("None")
        
        break;
}

document.write('<br>')

let Song= prompt("Emad Like To Listen To Songs?").toLowerCase();
switch (Song) {
    case 'yes':
        alert("Correct Answer");
        document.write("Emad Like To Listen To Songs : Yes ")
        console.log("Correct Answer");
        break;
    case 'no':
            alert("Incorrect Answer");
            document.write("Incorrect Answer")
            
            break;
    default:
        alert("None")
        document.write("None")
        
        break;
}

document.write('<br>')

let Sports= prompt("Emad Like To Play Sports?").toLowerCase();
switch (Sports) {
    case 'yes':
        alert("Correct Answer");
        document.write("Emad Like To Play Sports : Yes ")
        console.log("Correct Answer");
        break;
    case 'no':
            alert("Incorrect Answer");
            document.write("Incorrect Answer")
            
            break;
    default:
        alert("None")
        document.write("None")
        
        break;
}

document.write('<br>')

let Movies= prompt("Emad Like To Watch Movies?").toLowerCase();
switch (Movies) {
    case 'yes':
        alert("Correct Answer");
        document.write("Emad Like To Watch Movies : Yes ")
        console.log("Correct Answer");
        break;
    case 'no':
            alert("Incorrect Answer");
            document.write("Incorrect Answer")
            
            break;
    default:
        alert("None")
        document.write("None")
        
        break;
}