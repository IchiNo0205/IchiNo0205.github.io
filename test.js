const output_csv = document.getElementById('parts01');
console.log(output_csv);
let insertElement = ''; //テーブルタグに表示する用の変数
function csv_data(dataPath) {
	const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
	request.addEventListener('load', (event) => { // ロードさせ実行
		const response = event.target.responseText; // 受け取ったテキストを返す
		csv_array(response); // csv_arrayの関数を実行
	});
	request.open('GET', dataPath, true); // csvのパスを指定
	request.send();
}

function csv_array(data) {
	const dataArray = []; //配列を用意
	const dataString = data.split('\n'); //改行で分割
	for (let i = 0; i < dataString.length; i++) { //あるだけループ
		dataArray[i] = dataString[i].split(',');
	}
	console.log(dataArray);
	dataArray.forEach((element) => { //配列の中身を表示
		insertElement += '<tr>';
		element.forEach((childElement) => {
			insertElement += `<td>${childElement}</td>`
		});
		insertElement += '</tr>';
	});
	output_csv.innerHTML = insertElement; // 表示
}
//
//function serch(){
  //let snum = document.getElementById("snumber").value;
  //let snumcount = snum.value.length;
  //let snum1 = snum.substr(0,1);
  //let snum2 = snum.substr(0,2);
  //let snum3 = snum.substr(0,3);
  
 // let snumrc = snumrc+1;//snumの行数カウント 
  
  //if(snumber1 != null){
    //for(i=0,i<=)
    //if(insertElement[i][0]=snumber1)
  //}



//}


csv_data('https://github.com/IchiNo0205/IchiNo0205.github.io/blob/main/parts01.csv'); // csvのパス