function insertSort (arr) {
  var len = arr.length;

  if (len <= 1) {
    return arr;
  }

  for (var i = 1; i < len; i++) {
    let tmp = arr[i];
    for (var j = i; j > 0 && arr[j - 1] > tmp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = tmp;
  }

  return arr;
}

var arr = result();
console.log(insertSort(arr));

