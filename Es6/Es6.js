"use strict"
document.getElementById('name').style.backgroundColor='red';
document.getElementById('name').style.color='green';
document.getElementById('text').style.color='pink';

var nums=[1,2,3,4,5,6]
console.log(nums);


let new_nums=[]
for(let i=0; i< nums.length; i++){
    new_nums[i] = nums[i]*2
}
console.log(new_nums);

