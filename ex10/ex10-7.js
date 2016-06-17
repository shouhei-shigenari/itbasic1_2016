function addCount(){
  for(var count = 1;count <=30;count++){
    var x = document.getElementById('count').innerHTML;
    if(count % 3 == 0 && count % 5 == 0){
      x += '<li>Fizz Buzz</li>';
    }
    else if (count % 5 == 0) {
      x += '<li>Buzz</li>';
    }
    else if (count % 3 == 0) {
      x += '<li>Fizz</li>';
    }
    else{
      x += '<li>' + count + '</li>';
  }
  document.getElementById('count').innerHTML = x;
  }
}
