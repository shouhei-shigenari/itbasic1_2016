function bloodType() {
  var ans1 = document.getElementById('a').value;
  var ans2 = document.getElementById('b').value;
  if (ans1 == 'yes' && ans2 == 'yes') {
    alert('あなたはAB型です。');
  }else if (ans1 == 'yes' && ans2 == 'no') {
    alert('あなたはA型です。');
  }else if (ans1 == 'no' && ans2 == 'yes') {
    alert('あなたはB型です。');
  }else if(ans1 == 'no' && ans2 == 'no'){
    alert('あなたはO型です。');
  }else {
    alert('yesかnoを入力してください。');
  }
}
