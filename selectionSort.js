var selectionArray = [9, 12, 3, 45, 18];
function selectionSort(array){
 for(var i = 0; i < array.length; i++){
  var min = i;
  for(var j = i+1; j < array.length; j++){
    if(array[j] < array[min]){
      min = j;
    }
  }
  var temp = array[i];
  array[i] = array[min];
  array[min] = temp;
 }

  return array;
}
console.log(selectionSort(selectionArray));
