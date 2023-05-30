let hobbylist  = document.getElementById('hobbylist');
//let hobbylist  = document.getElementsByClassName('hobbylist');
let hobbyinput = document.getElementById('hobbyinput');
let hobbyBTN   = document.getElementById('hobbyinputBTN');
let hobbydelete = document.getElementById('hobbyDelete');
let from       = document.getElementById('from');
let to         = document.getElementById('to');
let arrayhobby = [];

function inputdata() {
    let arrayinput = hobbyinput.value;
    arrayhobby.push(arrayinput);
    hobbylist.textContent = arrayhobby;
}

function del() {
    let low = hobbydelete.value - 1;

    arrayhobby.splice(low, 1);
    hobbylist.textContent = arrayhobby;
}

function Switch() {
    let fromval = from.value;
    let toval = to.value;
    fromval = fromval - 1;
    toval = toval - 1
    let temp = "";

    if( arrayhobby.length < 1 || toval > arrayhobby.length){
        alert("error");
    }else{
        temp = arrayhobby[fromval];
        arrayhobby[fromval] = arrayhobby[toval];
        arrayhobby[toval] = temp;
        hobbylist.textContent = arrayhobby;
    }
}
