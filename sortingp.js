function main() {
  var n = parseInt(readLine());
  a = readLine().split(" ");
  a = a.map(Number);
  // Write Your Code Here
  //returns number of swaps
  var bubbleSortAsc = function() {
    // Track number of elements swapped during a single array traversal
    var numberOfSwaps = 0;
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in asc order
        if (a[j] > a[j + 1]) {
          //swap(a[j], a[j + 1]);
          var temp1 = a[j];
          var temp2 = a[j + 1];
          a[j] = temp2;
          a[j + 1] = temp1;

          numberOfSwaps++;
        }
      }

      // If no elements were swapped during a traversal, array is sorted
      if (numberOfSwaps == 0) {
        break;
      }
    }

    return numberOfSwaps;
  };

  //call the function sort and get number of swaps
  var swapNum = bubbleSortAsc();
  console.log("Array is sorted in " + swapNum + " swaps.");
  console.log("First Element: " + a[0]);
  console.log("Last Element: " + a[a.length - 1]);
}

//
function main() {
  var n = parseInt(readLine());
  a = readLine().split(" ");
  a = a.map(Number);
  // Write Your Code Here
  var numberOfSwaps = 0;
  for (var i = n - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (a[j] > a[j + 1]) {
        var temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        numberOfSwaps++;
      }
    }
    if (numberOfSwaps == 0) {
      break;
    }
  }
  console.log("Array is sorted in " + numberOfSwaps + " swaps.");
  console.log("First Element: " + a[0]);
  console.log("Last Element: " + a[n - 1]);
}

//

function main() {
  var n = parseInt(readLine());
  a = readLine().split(" ");
  a = a.map(Number);
  // Write Your Code Here
  var n = a.length;
  var numberOfSwaps = 0;
  for (var i = 0; i < n; i++) {
    var temp = 0;
    for (var j = 0; j < n - 1; j++) {
      temp = a[j];
      if (a[j] > a[j + 1]) {
        a[j] = a[j + 1];
        a[j + 1] = temp;
        numberOfSwaps++;
      }
    }
    if (numberOfSwaps == 0) {
      break;
    }
  }
  console.log("Array is sorted in " + numberOfSwaps + " swaps.");
  console.log("First Element: " + a[0]);
  console.log("Last Element: " + a[n - 1]);
}

//

function main() {
  var n = parseInt(readLine());
  a = readLine().split(" ");
  a = a.map(Number);

  var numSwapsTotal = 0;

  for (var i = 0; i < n; i++) {
    var numSwapsLocal = 0;
    for (var j = 0; j < n - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        numSwapsLocal++;
      }
    }

    if (numSwapsLocal == 0) {
      break;
    } else {
      numSwapsTotal += numSwapsLocal;
    }
  }

  console.log("Array is sorted in %d swaps.", numSwapsTotal);
  console.log("First Element:", a[0]);
  console.log("Last Element:", a[n - 1]);
}
