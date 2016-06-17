function aho(){
for(var x = 1; x<=99;x++){
  var y = document.getElementById('count').innerHTML;
  if(x % 3 == 0 || x % 10 == 3 || (30 <= x && x <= 39)){
    y += '<li>' + x + ':アホ</li>';
  }else {
    y += '<li>' + x + '</li>';
  }
  document.getElementById('count').innerHTML = y;
}
}
