/*Pseudocode
insertion(arr)
loop thru arr
create temp var for current element
create a var & set it = to previous element index
loop backwards while index >= 0 and current element > temp var
set next element - temp
return arr

*/
var insertionArray = [7, 23, 4, 12, 2];
function insertionSort(array){
for(var i = 1; i < array.length; i++){
  var temp = array[i];
  for(var j = i -1; j >= 0 && array[j] > temp; j--){
    array[j+1] = array[j];
    }
  array[j+1] = temp;
  }
return array;
}
insertionSort(insertionArray);


