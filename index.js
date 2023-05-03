const slideshowElements = document.querySelectorAll(".slideshow-element");
let countElements = 1;
console.log(slideshowElements)
setInterval(()=>{
    countElements ++;
let currentElement = document.querySelector(".current");
currentElement.classList.remove("current");

if(countElements >slideshowElements.length){
slideshowElements[0].classList.add("current");
countElements = 1;

}else{
    currentElement.nextElementSibling.classList.add("current");
}



}, 1000)


























// const promise1 = new Promise((resolve, reject) =>{

// let promiseCom = true;

// if (promiseCom){
//     resolve(`completed`);

// }else{
//     reject(new Error("error"));
// }
// });



// promise1.then((res)=>{
//     console.log(res.message);
// })
// .catch((err)=>{
// console.log(err.message);
// });

// const myButton = document.querySelector("button");
// myButton.addEventListener("click", ()=>{
//     console.log("clicked")
// })
// const taskOne = ()=>{
// console.log("talsk-1")
// }

// const taskTwo = ()=>{
//     setTimeout(()=>{
//         console.log("talsk-2") 
//     },3000)
   
// }
// const taskThree = ()=>{
//     console.log("talsk-3")
// }


// const taskFour = ()=>{
//     console.log("talsk-4")
// }

// const taskFive= ()=>{
//     console.log("talsk-5")
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();




// var Style = document.querySelector("#e1");

//  function add(){

//     Style.classList.add("r");

//  }

//  function remove(){
//     Style.classList.remove("r");

//  }











// const  name1= ["rahim", "karim", "monu", "tiny"]
// const name2 = ["paul", " walker", "jhon"]

// const name = name1.concat(name2);


// document.write(name + "</br>");
// document.write(name.length);
// name.push("jay");
// document.write(name.length);
// document.write(name + "</br>");











// function displayMessage(message){

//     document.write(message);}



// displayMessage("hi");







// function square(num){

//     var result = num*num;
    
//    return result;
// }

// document.write(square(6));
















// var i = 1;
// var sum = 0;

// while(i<=100){
// if (i%3==0 && i%5==0){

// document.write (i + "</br>");
//     sum = sum+i;
// }
   
//     i++;
    
// }
// document.write(sum +"</br>");

// document.write ("end")


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ternary operator
// var number = Number(prompt("enter a number"));

//  result = number>0 ? "positive":number<0? "negative":"zero";

// document.write(result);