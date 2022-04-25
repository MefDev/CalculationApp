const defaultNum = 0;
let currentResult = defaultNum;
let logItemsInArr = [];

function creatAndLogOutput(op, resultBeforeOutput, calNum) {
  const calcDiscription = `${resultBeforeOutput} ${op} ${calNum}`;
  return outputResult(currentResult, calcDiscription); // from vendor.js
}
function writeAndLog(op, previousResult, usernumber, newresult) {
  const logEntry = {
    operation: op,
    prevValue: previousResult,
    userNumber: usernumber,
    result: newresult,
  };
 logItemsInArr.push(logEntry);
  console.log(logItemsInArr);
}


// this is an operation to apply addition operation
function addOp() {
  const userNum = parseInt(userInput.value);
  const intialresult = currentResult;
  currentResult += userNum;

  creatAndLogOutput("+", intialresult, userNum);
  writeAndLog('Add', intialresult, userNum, currentResult)
  
}
// this is an operation to apply substraction operation
function substsOp() {
  const userNum = parseInt(userInput.value);
  const intialresult = currentResult;
  currentResult -= userNum;

  creatAndLogOutput("-", intialresult, userNum);
  writeAndLog('Substract', intialresult, userNum, currentResult)
}

// this is an operation to apply multiplication operation

function multipOp() {
  const userNum = parseInt(userInput.value);
  const intialresult = currentResult;
  currentResult *= userNum;
  creatAndLogOutput("x", intialresult, userNum);
  writeAndLog('Multiply', intialresult, userNum, currentResult)
}
// this is an operation to apply division operation

function devisionOp() {
  const userNum = parseInt(userInput.value);
  const intialresult = currentResult;
  currentResult /= userNum;

  creatAndLogOutput("/", intialresult, userNum);
  writeAndLog('Devide', intialresult, userNum, currentResult)
}

// adding an eventListner to all the operation so that they work properly
addBtn.addEventListener("click", addOp);
subtractBtn.addEventListener("click", substsOp);
divideBtn.addEventListener("click", devisionOp);
multiplyBtn.addEventListener("click", multipOp);

/* currentResult = (currentResult + 10) * 3 / 2-1;
let descriptiveCalc = '(' + defaultNum + ' + 10) * 3 / 2-1';
// let errMsg = "'error message'";
*/
