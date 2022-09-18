//task1
if ("0") {
    alert( '(task1) Hello' );
  }

//task2
let question = prompt('(task2) What is the official name of JavaScript?');

if(question == 'ECMAScript'){
alert("Right!");
}
else{
alert("You dont know? ECMAScript!");
}

//task3
let number = prompt('(task3) write a number')
if(number > 0){
    alert("1");
}
    else if(number < 0){
        alert("-1");
    }
    else{
        alert("0");
    }

//task4
let a = prompt("(task4) write first number", 1);
let b = prompt("(task4) write second number", 2);

let result = (Number(a)+Number(b) < 4) ? 'Below' : 'Over';
alert(result);

//task5
let message;
let login = prompt("login Employee, Director" );

message = login =='Employee' ? alert('Hello') : login =='Director' ? alert('Greetings') : login =='' ? alert('No login') : '';