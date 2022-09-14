//task 1
alert( null || 2 || undefined );
//show "2"

//task 2
alert( alert(1) || 2 || alert(3) );
// show 1 then 2 

//task 3
alert( 1 && null && 2 );
//show null

//task 4
alert( alert(1) && alert(2) );
//show 1 then undefined

//task5
alert( null || 2 && 3 || 4 );
//show 3

//task 6
let age;
if(age>=14 && age<=90){

}

//task 7
if(!(age>=14 && age<=90)){

}
if(age<=14 || age>=90){

}

//task 8
if (-1 || 0) alert( 'first' ); //run
if (-1 && 0) alert( 'second' ); //not run
if (null || -1 && 1) alert( 'third' ); //run