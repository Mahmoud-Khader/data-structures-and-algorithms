'use strict';
let array1 = [2, 4, 6, 8, 10];
let array2 = [42, 8, 15, 23, 42];

function insertShiftArray(arr, num) {
  let newArray = [];
  let centerIndex = Math.round(arr.length / 2);
  arr.forEach((ele, idx) => {
    if (idx !== centerIndex) {
      newArray.push(ele);
    } else {
      newArray.push(num);
      newArray.push(ele);
    }
  });
  return newArray;
}

console.log(insertShiftArray(array1, 7));
console.log(insertShiftArray(array2, 16));


//FOR TEST CODE

// You Can Check it with Console.log

describe('Testing challenge 2', () => {
  it('insertShiftArray', () => {
    insertShiftArray( [2, 4, 6, 8, 10], 5 );
    expect([2, 4, 6, 8, 10]).toBe([2, 4, 6, 7, 8, 10]);
  });
});
