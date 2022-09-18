//task1
let a = prompt("Edge or Chrome Firefox Safari Opera", '');

if(a==="Edge"){
    alert( "You've got the Edge!");
}else{
    if(a==="Chrome" || a==="Firefox" || a==="Safari" || a==="Opera"){
        alert('Okay we support these browsers too');
    }else{
        alert('We hope that this page looks ok!');
    }
}


//task2
let b = prompt("0, 1, 2 or 3", '');

switch(b){
    case "0":
        alert(0);
        break;

    case "1":
        alert(1);
        break;

    case "2":
    case "3":
        alert("2,3");
        break;
}