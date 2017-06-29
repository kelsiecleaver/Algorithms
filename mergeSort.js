var mergeArray = [23, 5, 13, 6, 87];

function mergeSort(array){
   if(array.length < 2){
    return array;
  }
  var mid = Math.floor(array.length / 2);
  var subLeft = mergeSort(array.slice(0, mid));
  var subRight = mergeSort(array.slice(mid));

  return merge(subLeft, subRight);
}

function merge(node1, node2){
  var result = [];
  while(node1.length > 0 && node2.length > 0)
    result.push(node1[0] < node2[0]? node1.shift(): node2.shift());
  return result.concat(node1.length? node1: node2);
}
console.log(mergeSort(mergeArray));