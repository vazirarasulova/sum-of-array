function arraySum(arr){
var number = 0;
for(var i = 0; i < arr.length; i++){
  number = number + arr[i];
}
return number;
}
console.log(arraySum([1, 3, 5, 9]));