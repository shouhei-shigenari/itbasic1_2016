function addCount() {
    for (var count = 0;count <= 5;count++) {
        alert('count: ' + count);
    }
}

function knock() {
    var x = document.getElementById('biscuit').innerHTML;
    for (var b = 2;b <= 100;b++){
    x = x + '<li>ポケットを叩くとビスケットが' + b + 'つ</li>';
    document.getElementById('biscuit').innerHTML = x;
  }
}
