function clearText(){
document.getElementById("screen").value = "";
}

function display(val){
    document.getElementById("screen").value += val;
}

function del(){
    document.getElementById("screen").value =
document.getElementById("screen").value.substring(0,document.getElementById("screen").value.length*1 -1);
}

function solve(){
    let v = document.getElementById("screen").value;
    let res = eval(v);
    document.getElementById("screen").value = res;
}