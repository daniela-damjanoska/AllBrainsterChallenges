// -------------------- exercise 1 -------------------------

// -----> Solution with conditions:

let first = document.querySelector('#first'),
    p1 = document.createElement('p'),
    x = 30;

if (x % 2 === 0) {
    console.log(`The number ${x} is even`);
    p1.innerText = `The number ${x} is even`
} else {
    console.log(`The number ${x} is not even`);
    p1.innerText = `The number ${x} is not even`
}

p1.style.color = 'red';
first.after(p1);


// -----> Solution with function:

// let first = document.querySelector('#first'),
//     p1 = document.createElement('p');

// function checkEven(num) {
//     if (num % 2 === 0) {
//         console.log(`The number ${num} is even`);
//         p1.innerText = `The number ${num} is even`
//     } else {
//         console.log(`The number ${num} is not even`);
//         p1.innerText = `The number ${num} is not even`
//     } 
// }

// p1.style.color = 'red';
// first.after(p1);

// checkEven(30);


// -----> Solution with ternary operator:
// let x = 30;

// x % 2 === 0 ? console.log(`The number ${x} is even`) : console.log(`The number ${x} is not even`);


// ------------------- exercise 2 ------------------------

let second = document.querySelector('#second'),
    p2 =  document.createElement('p'),
    list = document.createElement('ul');
    
p2.innerText = 'Numbers from 10 to 100 that are even and divisible by 3 are:'

p2.style.cssText = `
    color: red;
    text-decoration: underline;
    font-style: italic;
    `
second.after(p2);
p2.after(list);

for (let i = 10; i<=100; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log(i);
        let li = document.createElement('li');
        li.innerText = i;
        list.appendChild(li).style.color = 'red';
    }
    
}

// ----------------------- exercise 3 --------------------------

// -----> Solution when numbers are store in variables:

let third = document.querySelector('#third'),
    pSmallest = document.createElement('p'),
    pLargest = document.createElement('p'),
    pFuncSmallest = document.createElement('p'),
    pFuncLargest = document.createElement('p'),
    num1 = 13,
    num2 = 15,
    num3 = 20;

if (num1 < num2 && num1 < num3) {
    console.log(`The smallest number is ${num1}`);
    pSmallest.innerText = `The smallest number is ${num1}`;
}
else if (num2 < num1 && num2 < num3) {
    console.log(`The smallest number is ${num2}`);
    pSmallest.innerText = `The smallest number is ${num2}`;
}
else {
    console.log(`The smallest number is ${num3}`);
    pSmallest.innerText = `The smallest number is ${num3}`;
}

third.after(pSmallest);
pSmallest.style.color = 'red';

if (num1 > num2 && num1 > num3) {
    console.log(`The largest number is ${num1}`);
    pLargest.innerText = `The largest number is ${num1}`;
}
else if (num2 > num1 && num2 > num3) {
    console.log(`The largest number is ${num2}`);
    pLargest.innerText = `The largest number is ${num2}`;
}
else {
    console.log(`The largest number is ${num3}`);
    pLargest.innerText = `The largest number is ${num3}`;
}

pSmallest.after(pLargest);
pLargest.style.color = 'red';

function checkPrime(num) {
    if (num <= 1) {
        return false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
            return false;
        }
    }
    return true;
    }
}

  let min = 13;

  if (checkPrime(min) === true) {
    console.log(`The smallest number ${min} is prime`); 
    pFuncSmallest.innerText = `The smallest number ${min} is prime`;   
  } else {
    console.log(`The smallest number ${min} is not prime`);
    pFuncSmallest.innerText = `The smallest number ${min} is not prime`;  
  }

  pLargest.after(pFuncSmallest);
  pFuncSmallest.style.color = 'red';   

  let max = 20;

  if (checkPrime(max) === true) {
    console.log(`The largest number ${max} is prime`);
    pFuncLargest.innerText = `The largest number ${max} is prime`;      
  } else {
    console.log(`The largest number ${max} is not prime`);
    pFuncLargest.innerText = `The largest number ${max} is not prime`;    
  }

  pFuncSmallest.after(pFuncLargest);
  pFuncLargest.style.color = 'red';


  // -----> Solution when numbers are store in array:

// let third = document.querySelector('#third'),
//     pSmallest = document.createElement('p'),
//     pLargest = document.createElement('p'),
//     pFuncSmallest = document.createElement('p'),
//     pFuncLargest = document.createElement('p'),
//     numbers = [13, 15, 20];

// function checkMin(numbers) {
//     let min = numbers[0];
//     for (i = 1; i < numbers.length; i++) {
//         if (numbers[i] < min) {
//             min = numbers[i];
//         }
//     }
//     console.log(`The smallest number is ${min}`);
//     pSmallest.innerText = `The smallest number is ${min}`;
// }

// third.after(pSmallest);
// pSmallest.style.color = 'red';

// checkMin(numbers);

// function checkMax(numbers) {
//     let max = numbers[0];
//     for (i = 1; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i];
//         }
//     }
//     console.log(`The largest number is ${max}`);
//     pLargest.innerText = `The largest number is ${max}`;
// }

// pSmallest.after(pLargest);
// pLargest.style.color = 'red';

// checkMax(numbers);

// function checkPrime(num) {
//     if (num <= 1) {
//         return false;
//     } else {
//         for (let i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 return false;
//             }
//         }
//     return true;
//     }
// }

// let min = 13;

// if (checkPrime(min) === true) {
//         console.log(`The smallest number ${min} is prime`); 
//         pFuncSmallest.innerText = `The smallest number ${min} is prime`;   
//     } else {
//         console.log(`The smallest number ${min} is not prime`);
//         pFuncSmallest.innerText = `The smallest number ${min} is not prime`;  
//     }  
    
// pLargest.after(pFuncSmallest);
// pFuncSmallest.style.color = 'red'; 

// let max = 20;

// if (checkPrime(max) === true) {
//     console.log(`The largest number ${max} is prime`);
//     pFuncLargest.innerText = `The largest number ${max} is prime`;      
// } else {
//     console.log(`The largest number ${max} is not prime`);
//     pFuncLargest.innerText = `The largest number ${max} is not prime`;    
// }

// pFuncSmallest.after(pFuncLargest);
// pFuncLargest.style.color = 'red';