let amountNumbers = 80;
const nums = Array();

function showNumbers() {
  const $resultList = document.querySelector("#result-list");

  $resultList.textContent = nums.reverse().join(" - ");
}

function generateNewNumber() {
  const newNumber = Math.floor(Math.random() * amountNumbers + 1).toString();

  if (!nums.includes(newNumber)) {
    bingoCellToggle(document.querySelector("#bingo-number-" + newNumber));
  } else if (nums.length < amountNumbers) {
    generateNewNumber();
  } else {
    alert("Todos os números já foram sorteados!");
  }
}

function bingoCellToggle(element) {
  const num = element.textContent;

  element.classList.toggle("bg-amber-100");
  element.classList.toggle("bg-amber-200");

  if (nums.includes(num)) {
    nums.splice(nums.indexOf(num), 1);
  } else {
    nums.push(element.textContent);
  }

  showNumbers();
}

function createTable(element, qt) {
  const table_nums = Array();

  for (let i = 1; i <= qt; i++) {
    const num = document.createElement("div");
    num.textContent = i;
    num.className = "text-center py-2 rounded bg-amber-100 hover:bg-amber-200";
    num.id = "bingo-number-" + i;

    num.addEventListener("click", () => {
      bingoCellToggle(num);
    });

    element.appendChild(num);
    table_nums.push(num);
  }

  amountNumbers = qt;
  showNumbers();
}

function generateBingoTable() {
  const $tableBingo = document.querySelector("#bingo");
  const $inputNums = document.querySelector("input[name=npt-qt-numbers]");

  nums.splice(0, nums.length);
  $tableBingo.innerHTML = "";
  createTable($tableBingo, $inputNums?.value || 80);
}
