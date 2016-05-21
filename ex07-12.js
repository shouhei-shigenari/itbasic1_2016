function isLeapyear() {
    var year = document.getElementById('year').value;
    if (year % 400 == 0) {
        alert(year + '年は閏年です。');
    } else if (year % 100 == 0) {
        alert(year + '年は閏年ではありません。');
    } else if (year % 4 == 0) {
        alert(year + '年は閏年です。');
    } else {
        alert(year + '年は閏年ではありません。');
    }

}

/*以下は応用できる人向けの応用案。これでより親切になります。
こちらを適用したい場合は判定ボタンでこちらの関数を呼び出すこと*/
function isLeapyear2() {
    var year = document.getElementById('year').value;
    if (year == '') { //入力欄に何も入れられていない場合
        alert('何も入力されていません。');
    } else if (isNaN(year)) { //入力欄に入れられたものが半角数字かどうか
        alert('半角の数字のみを入力してください。');
    } else {
        //閏年を判定するのはここから
        if (year % 400 == 0) {
            alert(year + '年は閏年です。');
        } else if (year % 100 == 0) {
            alert(year + '年は閏年ではありません。');
        } else if (year % 4 == 0) {
            alert(year + '年は閏年です。');
        } else {
            alert(year + '年は閏年ではありません。');
        }
    }
}
