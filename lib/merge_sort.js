function merge(array1, array2) {
  // var result as array
  // while ( a and b have elements )
  //   if ( a[0] > b[0] )
  //     add b[0] to the end of result
  //     remove b[0] from b
  //   else
  //     add a[0] to the end of result
  //     remove a[0] from a
  //   end if
  // end while

  // while ( a has elements )
  //   add a[0] to the end of result
  //   remove a[0] from a
  // end while

  // while ( b has elements )
  //   add b[0] to the end of result
  //   remove b[0] from b
  // end while

  // return result

  let result = [];
  while(array1.length !== 0 && array2.length !== 0) {
    if(array1[0] > array2[0]) {
      result.push(array2[0]);
      array2.shift();
    } else {
      result.push(array1[0]);
      array1.shift();
    }
  }

  while(array1.length !== 0) {
    result.push(array1[0]);
    array1.shift();
  }

  while(array2.length !== 0) {
    result.push(array2[0]);
    array2.shift();
  }

  return result;
}

function mergeSort(array) {
  // if ( n == 1 ) return a

  // /* Split the array into two */
  // var l1 as array = a[0] ... a[n/2]
  // var l2 as array = a[n/2+1] ... a[n]

  // l1 = mergesort( l1 )
  // l2 = mergesort( l2 )

  // return merge( l1, l2 )
  if(array.length === 1) {
    return array;
  }

  let leftArr = array.slice(0, array.length/2);
  let rightArr = array.slice((array.length/2));

  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);


  return merge(leftArr, rightArr);
}

// const arr1 = [43, 22, 108, 6, 17, 76, 21];
// console.log(mergeSort([2, -1, 4, 3, 7, 3]));
// console.log(mergeSort(arr1));

module.exports = {
  merge,
  mergeSort
};
