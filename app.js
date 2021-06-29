var pre = document.getElementById("pre");
pre.innerHTML = 0;

function plas() {
    pre.innerHTML++
}

function minus() {
    pre.innerHTML--
}

function reset() {
    document.getElementById("pre").innerHTML = 0;
}