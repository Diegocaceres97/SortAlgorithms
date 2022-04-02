function quickSort(array){
  if(array.length == 1){
    return array;
  }

  const pivot = array[array.length-1];
  const leftArr = [];
  const rightArr = [];

  for(let i = 0; i < array.length-1; i++){
    if(array[i] < pivot){
      leftArr.push(array[i]);
    }else{
      rightArr.push(array[i]);
    }
  }

  if(leftArr.length > 0 && rightArr.length > 0){
    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
  }else if(leftArr.length >0){
    return [...quickSort(leftArr), pivot]
  }else{
    return[pivot, ...quickSort(rightArr)]
  }
}

const array = [3, 94, 86, 82, 90, 10, 87, 36, 61, 8, 17, 15, 22, 10, 23, 78, 25, 2, 30, 45, 98, 43, 98, 59, 53, 57, 2, 64, 1, 41,
  32, 58, 19, 99, 60, 74, 48, 80, 44, 25, 68, 1, 89, 77, 60, 25, 99, 30, 76, 32, 57, 82, 52, 44, 72, 87, 34, 87, 65, 30, 54, 6, 31,
  33, 44, 44, 42, 82, 90, 17, 9, 98, 28, 86, 69, 3, 17, 8, 45, 98, 12, 47, 95, 43, 72, 39, 41, 82, 74, 56, 65, 79, 50, 26, 67,
  100, 24, 67, 38, 57];

  console.log(quickSort(array));