// var who = 'world';
//
// function sayhello() {
//   alert('Hello, ' + who + '!');
// }
//
// function taro() {
//   who = '太郎';
// }
//
// function hanako() {
//   who = '花子';
// }

function sayhello() {
  var who = 'world';
  alert('Hello, ' + who + '!');
}

function come(){
  alert( who + "が来た");
}

function taro() {
  who = '太郎';
  come();
}

function hanako() {
  who = '花子';
  come();
}
