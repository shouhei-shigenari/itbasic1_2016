function add() {
  var x = document.getElementById('input1').value;
  var y = document.getElementById('input2').value;
  alert(Number(x) + Number(y));
}

function bmi() {
  var x = document.getElementById('m').value;
  var y = document.getElementById('kg').value;
  alert(Number(y) / Number(x) / Number(x));
  var z = Number(y) / Number(x) / Number(x);
  if(z < 18.5 ){
    alert('低体重');
  }else if (18.5 <= z && z < 25 ) {
    alert('普通');
  }else {
    alert('肥満');
  }
}
