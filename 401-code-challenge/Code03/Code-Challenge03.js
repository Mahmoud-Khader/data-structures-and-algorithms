/* eslint-disable new-cap */
'use strict';


let array=[1,2,5,4,8];


function BinarySearch(arr,num){
  let j;
  for(let i = 0 ;i<arr.length;i++){
    if(arr[i]===num){
      j=i;
      break;
    }else{
      j=-1;
    }}
  return j;
}
console.log('Original array is : ' + array);
console.log( 'After BinarySearch Function : '+ BinarySearch(array,5)); //output 2

//Test Function But its not sure if test here working So test it with console plz

it('BinarySearch',()=>{
  BinarySearch([1,2,5,4,8],5);
  expect([1,2,5,4,8],5).toBe(2);
});
