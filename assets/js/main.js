let datas = `
1.|IP 位址可以區分為5個等級:|A、B、C、D、E|
2.|IP 位址。這個位址是獨一無二的|True|
`


// 先觀察資料分隔的方式 接著用array methods來處理
var d_rows = datas.split('\n');  // 切 每一行
var d_rows2 = d_rows.filter(text => text.indexOf(".") != -1);  // 單字有詞性都有點 所以只留下有.的 
var d_rows3 = d_rows2.map(row => row.split("|"));  // 每一個元素裡再用空格切開 (整個會變成二維陣列 元素裡裝陣列 裝單字詞性翻譯)
var d_rows4 = d_rows3.map( row => ({
	answer : row[2],
	// cata : row[2],
	question: row[1]
}));  // 終於可以轉成物件拿來用了 大括號前的小括號不能忘 不然map會以為是函式

  
var words = d_rows4;
var question = null;
var options = [];
var grade = 0;
var status = "";
// var currentOption;


var quiz = document.getElementById('quiz');
var optionsList = document.getElementById('optionsList');
var nowStatus = document.getElementById('nowStatus');
var score = document.getElementById('score');


function getOptions(question) {
	let result = words.filter(
		word => (word.answer[1] != question.answer[1])
		).slice().sort((a,b) => Math.random() - 0.5).filter(
			word => word.answer != question.answer).slice(0,4);
	
	// 之後用來判斷答案是否正確
	let questionClone = JSON.parse(JSON.stringify(question))
	questionClone.correct = true
	// 等下要判斷時 就看玩家點的選項裡有沒有correct這個屬性

	let result2 = result.concat(questionClone);
	let result3 = result2.slice().sort((a,b) => Math.random() - 0.5);
	return result3;
}

function pick(){
	question = words[parseInt(Math.random()*words.length)];
	options = getOptions(question);
	console.log(question,options);

	//放到html裡
	score.style.color = 'black';
	score.innerHTML = "Score: " + grade;
	nowStatus.style.color = 'black';
	nowStatus.innerHTML = "請選擇";
	quiz.innerHTML = question.question
	optionsList.innerHTML = ""
	for (var i = options.length - 1; i >= 0; i--) {
		optionsList.innerHTML += `<li onclick="check(options[${i}])">${options[i].answer}</li>`
	}
	
}


// 為了避免連點很多下一直加分
var clicked = 1;
// 有沒有其他更好的方法阿...

function check(option){
	if (option.correct){
		status = "correct";
		if (clicked == 1) {
			grade++;
			clicked++;};
		nowStatus.innerHTML = status;
		nowStatus.style.color = 'green';
		score.innerHTML = "Score: " + (grade-1) + " +1";
		score.style.color = 'orange';
		// console.log(status, grade);
		setTimeout(()=>{
			pick();
			clicked = 1;
		},900)
	} else {
		status = "wrong"
		nowStatus.style.color = 'red';
		nowStatus.innerHTML = status;
		// console.log(status, grade)
	}
}

window.onload = () => {
	// console.log("載入完畢")
	pick();
}