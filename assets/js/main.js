let datas = `
1.|IP 位址可以區分為5個等級:|A、B、C、D、E|
2.|IP 位址。這個位址是獨一無二的|True|
3.|IP Address 的意思 |網際網路通訊協定位址|
4.| 子網路遮罩的演算方式 |藉由子網路遮罩對網路上的IP 位址進行辨識，並判斷是否屬於同一個網路環境|
5.|何者為國際化網域名稱 |.com、.net、.org|
6.|www為何種網域名稱 |主機名稱|
7.|以下何者為機構類別 |.edu|
8.|以下何者為地區名稱 |.uk|
9.|以下何者為URL address |www.google.com.tw|
10.|IPv4的表示方式為 |192.168.11.22|
11.|IPv6主要採用幾位元來進行定址 |128位元|
12.|何謂DHCP |幫區域網路內的每一台電腦分配一個IP位址|
13.|A級網路的左邊1個位元為 |0|
14.|B級網路的左邊2個位元為 |10|
15.|C級網路的左邊3個位元為 |110|
16.|C級網路的左邊4個位元為 |1110|
17.|D級網路的左邊5個位元為 |1111|
18.|如何找出廣播位址 |將子網路遮罩的16 個0變成1|
19.|基本上IPv6的子網路遮罩固定為多少位元 |64位元|
20.|NAT的功能為何 |主要是可以用1個真實的IP位址對外，讓很多使用假IP位址的內部電腦可以上網|
21.|DHCP的功能為何 |主要是可以讓網管人員或使用者「自動取得IP位址」，省掉為每一台電腦設定一堆數字的工作|
1.|如果想要擁有自己的網域名稱要去哪裡申請呢？|台灣網路資訊中心TWNIC|
2.|如果是國際化網域名稱|InterNIC|
3.|網路服務提供者（ISP）負責管理的名稱可以是中文網域名稱嗎?|可以|
4.|網域名稱分為4個部分|主機名稱、機構名稱、機構類別、地區名稱|
5.|網域名稱分為4個部分，主機名稱以__表示|依主機所提供的服務來表示。ex: google網頁主機www.、新聞主機news.|
6.|網域名稱分為4個部分，機構名稱一般是?|公司名稱或機關名稱。|
7.|網域名稱分為4個部分，機構類別以__區分?|以工作性質來區分。ex: 教育單位以.edu 來表示|
8.|網域名稱分為4個部分，地區名稱以__表示| 名。ex: 台灣以.tw 來表示|
9.|.com|商業用|
10.|.edu|教育單位|
11.|.gov|政府單位|
12.|a.org|非營利組織|
13.|.net|網路服務供應商|
14.|.mil|美國軍事單位|
16.|.tw|台灣|
17.|.cn|中國大陸|
18.|.hk|香港|
19.|.jp|日本|
20.|.fr|法國|
21.|.uk|英國|
22.|.de|德國|
23.|.kr|南韓|
24.|在 DNS 伺服器裡,每一個網域名稱都會有自己的檔案|稱為區域檔案|
25.|檔案內容清楚地記載著關於自己及其他伺服器在網路上的詳細資訊|這個詳細的資訊叫做資源記錄|
26.|nslookup|取得DNS伺服器的一些資訊|
27.|IPv4 目前最大的問題|是使用32位元來定址，導致IP位址嚴重不足|
28.|IPv6|主要採用128位元來進行定址|
29.|IPv6總數量| 228 個位址|
30.|IPv6有它自己對O表示的規則(大致上有2個)|1.數字前的0可以省略,若省略後還是0,可以繼續省略。2.用雙冒號「::」來表示1組0或多組連續0,但只限出現1次。|
31.|假如有一個IPv4的位址想轉成IPv6 的格式可以嗎?|可以|
32.|IPv6有保留將IPv4完整對應過來的IP位址。方法有2種|1. 直接將 IPv4 位址抄過去,一樣用小數點「.」來表示,前面一位數加上ffff,其餘 左邊5位數全部補0 。2. 將IPv4 位址的4個10進位數字轉成2個16進位的數字,2個數字是用 冒號「:」隔開,前面一位數加上ffff,其餘 左邊5位數全部補0。|
33.|看到這麼長的數字要怎麼去記住它呢?|IPv6 具有隨插即用的功能,它有自動組態設定的機制,能自動設定 IP 位址,所以我們不用太過操心。|
34.|網路位址轉換技術(NAT)|NAT可以讓很多個虛擬私有IP位址，也就是沒有分配到合法公有IP 位址的電腦,在與網際網路溝通時,將私有IP轉換成所分配到的一個合法公有IP位址,讓沒有分配到合法公有IP位址的電腦們,也能夠隨心所欲地遨遊網際網路。|
35.|IPv6需不需用到NAT?|不需要，因為提供了大量IP位置。|
36.|動態主機設定協定|它的功用在幫區域網路內的每一台電腦分配一個IP位址|
37.|若沒有DHCP的幫忙|網路 管理者或使用者就得自己去設定IP位址、子網路遮罩、預設 閘道及DNS 伺服器等動作|
38.|NAT功能|主要是可以用1個真實的IP位址對外,讓很多 使用假IP位址的內部電腦可以上網。|
39.|DHCP功能|主要是可以讓網管人員或使用者「自動取得 IP位址」,省掉為每一台電腦設定一堆數字的工作。|
40.|IPv6位址的分類有?|單點廣播、多重廣播、任意點廣播位址。|
41.|IPv4網路的3種傳播方式|單點傳播(unicast)、多重傳播(群播)(multicast)、廣播(broadcast)。|
42.|單點廣播(Unicast)又分成3種型態|Global Address (全域位址)、 Unique-Local Address(唯一本機位址)、Link-Local Address (本機連結位址)|
43.|Global Address(全域位址)|類似公開的IPv4位址,可於網際網路中傳送封包;通常IP位址第1個數字是2開頭的 2001::就代表是全域位址|
44.|Unique-Local Address(唯一本機位址)|區域網路內,只能於不同的子網路間傳送封包,且不會透過網際網路傳送;通常IP位址前面開始的數字為 fc00::/7,換算成二進位碼表示法為1111110(占用7個位元)。|
45.|Link-Local Address(本機連結位址)|區域網路內,只能於相同的子網路 內傳送封包,一樣不會透過網際網路傳送。通常 IP 位址前面開始的數字為 fe80::10,換算成二進位碼表示法為 1111 111010(占用 10 個位元)。|
1.|IPv6網路遮罩的功能固定為多少位元:|64位元|
2.|對全域位址(Global Address)來說網路位址範圍(Network address)為:|前3位數字(48 個位元)|
3.|對子網路範圍來說網路位址範圍(Network address)為:|第4個數字(49到64位元)|
4.|對主機位址(interface ID 或 Host ID)來說網路位址範圍(Network address)為:|最後4位數字(64位元)|
5.|對子網路遮罩來說網路位址範圍(Network address)為:|前面4位數字 /64|
6.|通常ISP會配發一個家用網路使用的IPv6 address:|/64|
7.|通常ISP會配發給小型辦公室網路的位址IPv6 address:|/56|
8.|通常ISP會配發給中大型辦公室網路的位址IPv6 address:|/48|
9.|/56的IPv6 address可再分成多少個/64網段提供子網路使用:|256|
10.|/48的IPv6 address可再分成多少個/64網段提供子網路使用:|65536|
11.|主要的IPv4/IPv6移轉技術不包括:|大通道(Big ace)|(雙協定(Dual Stack)、隧道 (Tunneling)及協定轉譯(Translation)技術)
12.|主要的IPv4/IPv6移轉技術以??為主:|雙協定(Dual Stack)|
13.|雙協定(Dual Stack)定義:|是將原本只支援IPv4的網路元件強化為同時也支援IPv6協定。|
14.|隧道技術(Tunneling)定義:|為兩端IPv6網路設備藉由在IPv4網路中建立一條通道互通。|
13.|協定轉譯技術(Translation)定義:|為IPv6網路設備與IPv4網路設備透過轉譯器互通。|
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