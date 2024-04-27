// function addtwoNumbers(name) {
//     let number1 = 2;
//     let number2 = 6;
//     console.log(number1+number2);
// }
// addtwoNumbers("Sum of two numbers");

// function sumNumbers(a,b) {
//     sum = a + b;
//     return sum;
// }
// let value = sumNumbers(22,22);
// console.log(value)

// function fabonaciSeries() {
//     let number = prompt("Enter number of term:");
//     let n1=0,n2=1,nextterm;
//     for(let i=1;i<=number;i++) {
//         console.log(n1);
//         nextterm = n1 + n2;
//         n1 = n2;
//         n2 = nextterm;
//     }
// }
// fabonaciSeries();
// function harshkaFunction(msg,n) { // parameter -> input
//     console.log(msg);
// }
// harshkaFunction("i love java script "); // arguments

// functiom for sum of two numbers>>>>>>

// function sumofNumbers(a,b) {
//     sum = a + b;
//     return sum;
// }
// let val = sumofNumbers(1,2);
// console.log(val);

// let sum = (a , b) => {
//     return a + b;
// }
// multipilaction function

// function vowel (str) {
//     let count = 0;
//     for(let chr of str) {
//         if(chr ==="a"||chr ==="e"||chr ==="i"||chr ==="o"||chr ==="u") {
//         count++;
//     }
// }
//     console.log(count);
// }
// let cars = ["creta","venue","punch","fortuner","thar"];

// cars.forEach(function carVal(cars,idx,arry) {
//     console.log(cars.toUpperCase(),idx,arry);
// });

// let numbers = [2,3,6,,8,10];

// numbers.forEach((num) => {
//         console.log(num*num)
//     if(num % 2==0) {
//         console.log("Even squre");
//     } else {
//         console.log("odd squre");
//     }
// })

// let arry = [1,2,3,4,5];

// let newArry = arry.map((val) => {
//     return val*2;
// });
// console.log(arry);
// console.log(newArry);

// let names = [1,3,9,3,4,6];

// let newNames = names.filter((val) => {
   
// console.log(newNames)

// let num = [20,66,75,32];

// let sumNumbers = num.reduce((res,curr) => {
//     return res > curr ? res : curr;
// })
// console.log("Largest number of arry is:",sumNumbers)

// let marks = [92,77,88,97,95];

// let nTabove = marks.filter((val) => {
//     return val > 90;
// })
// console.log(nTabove);

// let numbers = prompt("Enter any number");
// let arr=[];

// for(let i=1;i<=numbers;i++) {
//     arr[i-1] = i;
// }
 // console.log(arr);

// let sumNUM = arr.reduce((res,curr) => {
//     return res + curr;
// })
// console.log("Sum :",sumNUM);

// let factorial = arr.reduce((res,curr) => {
//     return res * curr;
// })
// console.log("Factorial :",factorial);''
// function letterCount(str,c) {
//     let count = 0;
//     str = str.toLowerCase();
//     for(let i=1;i<str.length;i++) {
//         if(str.charAt(i)==c) {
//             count++
//         }
//     }
//     return count;
// }
// console.log(letterCount);


//  function isLeapyear(year) {
//      // condition statments
//     if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//          console.log(year+ " is leap year");
//     } else {
//        console.log(year+ " is not a leap year");
//    }
// }
// // Take input 
//  const year = prompt("Enter any year");

//  isLeapyear(year);

// function guessNumber() {

//     let guessNumber = 6;
//     let num = prompt("Enter any number from 1 to 10");
//     while(num!=guessNumber) {
//         num = " Ohh shit you guess wrong number guess number again";
//     }
//     if(guessNumber==num) {
//         console.log("Congratulations!! you guess correct number");
//     }
// }
// guessNumber();

// let char = prompt("Enter any Character:");

// let result = char.charCodeAt(0);
// console.log(result);

// let chr = prompt("Enter any charector");

// let result = chr.charCodeAt(0'

// let div = document.querySelector('div');
// console.log(div);

// let value = div.getAttribute("id");
// console.log(value);





// let name = div.getAttribute("name");
// console.log(name);

// let div = document.querySelectorAll('.js');
// console.log(div);

// let btn = document.createElement("button");
// btn.innerText="click me!!";
// console.log(btn);

// let div = document.querySelector('.js'); 
// div.after(btn);
// btn.style.marginLeft="80px";

// let ha = document.createElement('h1')
// ha.innerHTML="JAVA";
// console.log(ha);

// div.append(ha);

// document.querySelector('body').append(ha);
// ha.style.color="aqua";

// div.remove();

// let but = document.createElement("button");
// but.innerHTML="Click me!!!";
// but.style.backgroundColor="red";
// but.style.color="white";

// let bdy = document.querySelector("body");
// bdy.prepend(but);


// let pa = document.querySelector("p");
// pa.classList.add("newclass");
// pa.style.textAlign="center";

// let but = document.createElement("button");
// but.innerText = "Click me";
// but.style.height ="40px";
// but.style.width ="80px";
// but.style.backgroundColor ="yellow";
// but.style.color ="red";
// but.style.border="none"

// let div = document.querySelector(".js");
// div.prepend(but);
// div.style.display ="flex";
// div.style.justifyContent ="center";
// div.style.alignItems ="center";

// function myFunction() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
//     let but = document.querySelector("button")
//     but.innerText ="Light mode"
// }

// function updateStatus () {
//     let currrenStatus = document.getElementById("o");
//     if(navigator.onLine) {
//         currrenStatus.textContent="User is Online";
//     } else {
//         currrenStatus.textContent="User is offline";
//     }
// }
// updateStatus();
// window.addEventListener("User is Online",updateStatus);
// window.addEventListener("User is offline",updateStatus);

// let colors = ["green","red","purpal","rgba(133,122,200)","#f15025"];
// let butt = document.querySelector("button");

// butt.addEventListener("click",function() {
//    let randomNumber = getRandomNumber ();
//    document.body.style.backgroundColor = colors[randomNumber];
// });
// function getRandomNumber() {
//    return Math.floor(Math.random() * colors.length);
// }


// let count = 0;
// let value = document.querySelector("#value");
// let btns = document.querySelectorAll(".btn")

// btns.forEach(function(btn) {
//    btn.addEventListner("click",function(e) {
//       let styles = e.currentTarget.classList;
//       if(styles.contains("decrease")) {
//          count--;
//       } else if(styles.contains("increase")) {
//          count++
//       } else {
//          count=0;
//       }
//    })
// })
    // Generate a Random Number
    let y = Math.floor(Math.random() * 10 + 1);
 
    // Counting the number of guesses
    // made for correct Guess
    let guess = 1;

    document.getElementById("submitguess").onclick = function () {

        // Number guessed by user    
        let x = document.getElementById("guessField").value;

        if (x == y) {
            x.alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
        }
        /* If guessed number is greater than actual number*/
        else (y!=x)
        window.alert("OOPS SORRY!!! YOU GUESSED WRONG NUMBER "
        + guess + " GUESS ");
            guess++;
    }