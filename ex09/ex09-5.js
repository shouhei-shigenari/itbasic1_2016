var b = 1;
function knock() {
    var x = document.getElementById('biscuit').innerHTML;
    var y = document.getElementById('add').value;
    while(b < y){
    b += 1;
    x = x + '<li>ポケットを叩くとビスケットが' + b + 'つ</li>';
    document.getElementById('biscuit').innerHTML = x;
  }
}
