// //task1
// let i = 3;

// while (i) {
//   alert( i-- );
// }
// //3,2,1


// //task2
// let j = 0;
// while (++j < 5) alert( j );
// //1, 2, 3, 4

// let k = 0;
// while (k++ < 5) alert( k );
// //1, 2, 3, 4


// //task3
// for (let i = 0; i < 5; i++) alert( i );
// //0,1,2,3,4

// for (let i = 0; i < 5; ++i) alert( i );
// //0,1,2,3,4


// // task4
// for(let i=2; i<=10; i++){
//     if(!(i%2)) alert(i);
// }


// //task5
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

//   let j = 0;
//   while (j < 3){
//     alert( `number ${j}!` );
//     j++;
//   }


// //task6
// let number = prompt("Number greater than 100", '');

// while (number <= 100) {

//     if (number === null || number === '') {
//         break;
//     }

//     number = prompt("Number greater than 100", '');
// }

//task7
let number = prompt("take a number", '')

for(let i = number; i>2; i--){
    if((i%2 && i%3 && i%5 && i%7)){
        alert(i);
    }
}
alert (7);
alert (5);
alert (3);
alert (2);