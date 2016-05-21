function add() {
    var x = document.getElementById('input1').value;
    var y = document.getElementById('input2').value;
    alert(Number(x) + Number(y));
}

function bmi() {
    var height = document.getElementById('m').value;
    var weight = document.getElementById('kg').value;
    var bmi = Math.round(Number(weight) / Number(height) / Number(height) * 10) / 10; //少数第１位で四捨五入
    alert(bmi);
    if (bmi < 18.5) {
        alert('低体重');
    } else if (bmi < 25) {
        alert('普通');
    } else {
        alert('肥満');
    }
}
