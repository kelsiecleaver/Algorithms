var quickArray  = [23, 5, 18, 6, 9];


 function quickSort(array){
 var pivot = array[0];
 var leftList = [];
 var rightList = [];

 if(array.length <2){
  return array;
 }
 for(var i = 1; i < array.length; i++){
  if(array[i] < pivot){
    leftList.push(array[i]);
  }else{
    rightList.push(array[i]);
  }
 }
 return quickSort(leftList).concat(pivot, quickSort(rightList));
 }
console.log(quickSort(quickArray));
quickSort(quickArray);