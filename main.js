console.log('Task 1');
// Task 1
function printWindowValues() {
  for (var i in window) {
    console.log(i, window[i]);
  }
}
printWindowValues();

console.log('Task 2');
// Task 2
function expTen(a) {
  var expRes = 1;
  for (var i = 0; i < 10; i++) {
    expRes = expRes * a;
  }
  return expRes;
}
console.log(expTen(6));

console.log('Task 3');
// Task 3
function getFuncRes(func, arg){
  func(arg);
}
getFuncRes(console.log, "Hello, World!");
