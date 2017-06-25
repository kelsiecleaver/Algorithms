var bubbleArray = [4, 34, 23, 98, 8, 54, 3];

function bubbleSort(array) {
  for(var i = 0; i<array.length; i++){
    for(var j = 0; j<array.length - i -1; j++){

      if(array[j] > array[j+1]) {

        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
return array;

}
bubbleSort(bubbleArray);

// function bubbleSort(array){
//   var sorted = false;
//   while(!sorted){
//     sorted = true;
//     array.forEach( (element, index, array) => {
//       if(element > array[index+1]){
//         array[index] = array[index +1];
//         array[index+1] = element;
//         sorted = false ;
//         console.log(array);
//       }
//     });
//   }
// }

// bubbleSort(bubbleArray);