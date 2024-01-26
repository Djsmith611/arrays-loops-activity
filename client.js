/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
let hobbies=['hockey', 'basketball', 'coding'];
console.log(hobbies);
console.log('for of loop');


for (let i of hobbies){
     console.log(i);
}

for (let i=0; i<hobbies.length; i++){
     console.log(hobbies[i]);
}

console.log(hobbies.length);


// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */

let colors =['teal', 'black', 'teal', 'blue', 'red']
let tealCount =0 ;
let index=colors.length -1;

while(index>=0){
     if(colors[index]==='teal'){
          console.log('This is teal.');
          tealCount += 1; 
          index -= 1;
          console.log('Teal count ', tealCount);
     } else {
          console.log('This is not teal.');
          index -=1;
          console.log('Teal count ', tealCount);
     }
}






// Example output
// green, red, teal, orange, teal
// Teal was found 2 times


/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */

let numbers=[1,2,3,4,5,6,7,8,9,10]

let oddNumbers =[];
let evenNumbers =[];

for (let teal of numbers){
     if(teal % 2 === 0){
          evenNumbers.push(teal);
     } else {
          oddNumbers.push(teal);
     }
}
console.log('original array: ', numbers);
console.log('Even Numbers: ', evenNumbers);
console.log('Odd Numbers: ', oddNumbers);


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */
let switchBoard = [true,false,true,true,false,false,false,false,true,true,true];

let toggled = [];

for (let i of switchBoard){
     if(i === true){
          toggled.push(false);
     } else{
          toggled.push(true);
     }
}

console.log(switchBoard);
console.log(toggled);


// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */

let f=[641,61,0,45654,46,46,484,565,4365,0,4654,64,846,0,465,4635,4654,64,65198,461265,1984,97,74,6158,7,4,91,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

while (f.length > 0 && f[f.length - 1] === 0){
     f.pop();
}
 
console.log(f);

// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8


/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */

let largishArray = [5,4,7,8,1,4,5,3,2,5,4,85,5,52,12,1,5,5,5,6,6,9,1,454,5,1,5,5,4,558,5,5,51,5,85,4,4,5,85,4,5,85,51,5,,56,56,58,9,5,5,9,5,54,5,69,88,5,55,9,89,85,5,69,98,5,5,69,9,8,56,9,9,5,5,69,9,85,5,6,9,9,5,566,9,89,89,8,898,56,5,5985,985,95,985,9859]

let high = 0;

let low = Number.MAX_SAFE_INTEGER;
console.log('for .. of loop');
for (let i of largishArray){
     if (i>high){
          high = i;
     } else if(i<low){
          low = i;
     } 
}

console.log(high);
console.log(low);
//
//
//
//console.log('3 part for loop');
//for (let i=0; i<=largishArray.length -1; i++){
 //    if (i>high){
   //       high = largishArray[i];
     //} else if(i<low){
       //   low = largishArray[i];
     //}
//}
//console.log(high);
//console.log(low);



// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3
