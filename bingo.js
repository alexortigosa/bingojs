var nums = [];
var availables = [];
var selecteds = []


function initNums(){
	for (var i = 1; i <= 80; i++) {
		nums.push(i);
	}
	availables = nums.slice(0);
	return nums;
}

function getNums(){
	return nums;
}

function selectNum(){
	var indexSelecte = Math.floor((Math.random() * availables.length));
	selecteds.push(availables[indexSelecte]);
	document.getElementById("seleccion").innerHTML = availables[indexSelecte];
	availables: availables.splice(indexSelecte, 1);
	 
	refreshTable();
}


function createField(element, num){
	var node = document.createElement("td");                 // Create a <li> node
	var textnode = document.createTextNode(num);
	selecteds.map(item => {if (item === num) node.classList.add("selected")})
	addEvent(node,"click",toogleSelect)         // Create a text node
	node.appendChild(textnode);                              // Append the text to <li>
	element.appendChild(node);

}


function createRow(element, nums){
	var node = document.createElement("tr");
	for (var i = 0; i <nums.length; i++) {
		createField(node,nums[i]);
	}             
	element.appendChild(node);
}

function createBody(element,nums){
	var node = document.createElement("tbody");
	for (var i = 0; i <=nums.length; i=i+10) {
		createRow(node,nums.slice(i, i+10));
	}             
	element.appendChild(node);
}

function createTable(element,nums){
	var node= document.createElement("table");
	createHeader(node);
	createBody(node,nums);
	element.appendChild(node);
}

function createHeader(element){
	var node = document.createElement("thead");
	for (var i = 0; i < 10; i++) {
		const th = document.createElement("th");
		const textth = document.createTextNode("Col "+i);
		th.appendChild(textth);
		node.appendChild(th);
	}
	element.appendChild(node);
}

function refreshTable(){
	const bingoDiv = document.getElementById("bingo");
	bingoDiv.removeChild(bingoDiv.childNodes[0]);
	createTable(bingoDiv,getNums());
}

function initTable(){
	createTable(document.getElementById("bingo"),initNums())
}


function toogleSelect(mouseEvent){
	console.log({message: "toogle", mouseEvent});
	mouseEvent.target.classList.contains("selected") ? 
		mouseEvent.target.classList.remove("selected") : 
		mouseEvent.target.classList.add("selected");
}




function addEvent(element,event,callback){
	if (element.addEventListener) {  // all browsers except IE before version 9
  element.addEventListener(event, callback, false);
} else {
  if (element.attachEvent) {   // IE before version 9
    element.attachEvent(event, callback);
  }
}
}