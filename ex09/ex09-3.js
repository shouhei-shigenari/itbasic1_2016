var w = 100;
function change() {
    var x = Number(document.getElementById('change').value);
    w += x;
    document.getElementById('picture').setAttribute('width', w);
}
