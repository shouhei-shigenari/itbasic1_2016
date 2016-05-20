function change1() {
  document.getElementById('photo').innerHTML = "<img src='写真名' width='220px' height='300px'>" ;
}
function change2() {
  document.getElementById('photo').innerHTML = "<img src='kei.jpg' width='220px' height='300px'>" ;
}
function change3() {
  document.getElementById('photo').innerHTML ="<img src='写真名' width='220px' height='300px'>" ;
  setTimeout('change2();', 3000);
}
