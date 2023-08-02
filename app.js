
// loops with array

const word = 'stressed';
// for (i = word.length - 1; i >= 0; i--) {
//     console.log(i + ' ' + word[i]);
// }

let words = 'stressed';
let reversedwords = '';
// for (i = 0; i < words.length; i++) {
//     reversedwords += words[i];
//     console.log(reversedwords);
// }

// neste loop
// for (var i = 1; i <= 10; i++) {
//     console.log("outerloop:" + i);
//     for (var j = 10; j >= 0; j -= 4) {
//         console.log('innerloop:' + j);
//     }
//     console.log("outer loop ends here");
// }

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
        console.log('i :', i, "j: ", j);
    }
}


function isvalidPassword(password, username) {
    let special_char = ['!', '@', '#', '$', '%', '^', '&'];

    if ((password.length < 8) ||
        (password.indexOf(username)) !== -1 ||
        (password.indexOf(" ")) !== -1) {
        return false;
    }
    // if  {
    //     return false;
    // }
    // if (password.indexOf(username) !== -1) {
    //     return false;
    // }
    // for (let i = 0; i < special_char.length; i++) {
    //     console.log(special_char[i], password.indexOf(special_char[i]));
    //     if (password.indexOf(special_char[i]) !== -1) {
    //         return true;
    //     }
    //     // return false;
    // }
    return true;
}

function variable_method(pass, u_name) {
    const tooshort = pass.length < 8;
    const hasSpace = pass.indexOf(" ") !== -1;
    const toosimilar = pass.indexOf(u_name) !== -1;

    if (tooshort || hasSpace || toosimilar) return false;
    return true;
}


console.log(variable_method('rahul123', 'rahul321'));

console.log(isvalidPassword("rahulkumar", "rahulkumar"));

let arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    console.log(num);
}

let total = 0;
for (let num of arr) {
    // console.log( "num",num);
    total += num;
}
console.log(total);
let result = total / arr.length;
console.log(result);


function isPangram(sentence) {
    for (let char of "abcdefghijklmnopqrstuvwxyz") {
        console.log(char, sentence.indexOf(char));

        if (sentence.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}
// console.log(isPangram("a quick brown fox jumps over the lazy dog"));



// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// function pangram(sentence) {
//     for (let i = 0; i < alphabet.length; i++) {
//         // console.log(i, alphabet[i]); 
//         let char = alphabet[i];


//         console.log('char ', char, "alphabet [i] ", alphabet[i]);
//         if (sentence.indexOf(alphabet[i]) === -1) {
//             return false;
//         }
//     } return true;
// }
// console.log(pangram("a quick brown fox jumps over the laz dog"));





// let obj = {
//     name: "rahul",
//     class: "12th"
// };
// console.log(Object.values(obj));
// console.log(obj.name);

function placeOfAlpha(element) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";

    return alpha.indexOf(element) + 1;

}
console.log('h', placeOfAlpha('h'));
console.log('a', placeOfAlpha('a')); // should return 1
console.log(placeOfAlpha('d')); // should return 4
console.log(placeOfAlpha('k')); // should return 11 

let print_number = {
    a: "1", b: 2, c: "3", d: "4", e: "5", f: "6", g: "7", h: "8",
    i: "9", j: "10"
}
console.log(print_number.c);

// function scope

let ram = "romio";
function func() {
    let ram = "anar"
    console.log(ram);
};
console.log(ram);
console.log(func());


// block scope
// let animal=["tiger","elephant","lion","dog"];
// for (var i=0;i<animal.length;i++){
//     console.log(i , animal[i]);
// };
// console.log(i); // i is excute here because we declare variable using var in loop

// expected output

// VM689:3 0 'tiger'
// VM689:3 1 'elephant'
// VM689:3 2 'lion'
// VM689:3 3 'dog'
// VM689:5 4

let animal = ["tiger", "elephant", "lion", "dog"];
for (let i = 0; i < animal.length; i++) {
    console.log(i, animal[i]);
};
// console.log(i); // i is not defined  because its out of block scope;

// expected output

// VM677:3 0 'tiger'
// VM677:3 1 'elephant'
// VM677:3 2 'lion'
// VM677:3 3 'dog'

let animal1 = ["tiger", "elephant", "lion", "dog"];
// let a=10;
// for (let i=0;i<animal1.length;i++){
//     console.log(i , animal1[i]);
// };
// console.log(i);

function double_arr(arr) {
    const result = [];
    for (let num of arr) {
        let double = num * 2;
        result.push(double);
    }
    return result;
}
console.log(double_arr([3, 4, 5]));

// lexical scope

function outer() {
    let movie = "project_k";
    function inner() {
        let movie = "pushpa";
        console.log(movie.toUpperCase())// when we call any variable in function then its find nearest variable and execute it.
    }
    console.log(inner());
}
console.log(outer());


// function epression

let sum = function (x, y) {
    return x + y;
}
console.log(sum(4, 7));

// high order function

function add(x, y) {
    return x + y;
}
const subtract = function (x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
const devide = function (x, y) {
    return x / y;
}

const operation = [add, subtract, multiply, devide]
for (num of operation) {
    let result = num(30, 5);
    console.log(result);
}

const thing = {
    dosomething: multiply,
    learn: devide
}
console.log("multiply", thing.dosomething(10, 5));
console.log("devide ", thing.learn(100, 5));


// function as arguments

function callthreetimes(f) {
    f();
    f();
    f();
};

function cry() {
    console.log("hmmm i m so sad");
};
// callthreetimes(cry);

console.log('we should happy whatever we have');

function myname() {
    console.log("my name is rahul")
}

function repeatedtimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}

// console.log("heeeel", repeatedtimes(myname, 3));


// function as return value

function multiplyby(num) {
    return function (x) {
        return x * num;
    }
}
const triple = multiplyby(5);
const double = multiplyby(10);

// console.log(triple(4));
// console.log(double(5));

function makebetweenfunc(x, y) {
    return function (num) {
        return num >= x && num <= y
    }
}
const ischild = makebetweenfunc(45, 67);
// console.log(ischild(74));
// console.log(ischild(65));
const isInnineties = makebetweenfunc(1990, 1999);
// console.log(isInnineties(1996));

const isniceweather = makebetweenfunc(20, 32);
isniceweather(34);
// console.log("good weather", isniceweather(26));

// callbacks function

function grumps() {
    console.log("where are you going?")
}
// setTimeout(grumps,2000);

// setTimeout(myname,5000);
// setTimeout(function add(){
//     console.log("alert");
// } , 2000);


// hoisting

// console.log(ani);
// var ani ="ram";
let ani = "ram";

// forEach function

let numbers = [34, 65, 32, 44, 55, 23, 54];

numbers.forEach(function (ele, i) {
    //     n give us an element
    //     i give us index of array
    // console.log(  'for each',ele + 10, i);
});


//map function

const numb = [23, 34, 23, 43, 22, 21];
const doubles = numb.map(function (ele) {
    return ele * 2;
});
// console.log(doubles);

const numdetails = numb.map(function (n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
});
// console.log(numdetails);


// arrow function 

const arrow = (x) => {
    return x + 20;
}
// we can write t oanother syntax like that
const arrow1 = x => {      // x we not given the () because if we pass only one parameter then we can write like that
    return x - 1;
}

const arrow2 = (x, y) => {
    return x * y;
}
const arrow3 = num => {
    return num % 2 === 0;
}
// console.log(arrow3(34));

// arrow function : implict returns

const returns = num => (
    num * num                 // it will work.  we did not given return keyword and change the bricate {} to ().
);

// console.log(returns(4));

const number = num => num + num;   // we can also write in one line.
// console.log(number(50));

// different types and different place are using arrow function.

const nums = [2, 3, 2, 32, 23, 45, 55];
let multiply_arr = nums.map(function (n) {
    return n * 2;
});

// we can write also like that

let multiply_arr2 = nums.map((n) => { n * n });

// one another is 

let multiply_arr3 = nums.map(n => n * 2);

let aar = nums.map(n => {
    if (n % 2 === 0) return 'even';
    return 'odd';

});
// console.log(aar);

let aar2 = nums.map(n => n % 2 === 0 ? 'even' : 'odd');
// console.log(aar2);


// find method

const romio = [44, 33, 46, 55, 32];

let c = romio.find((b) => (
    b >= 45
)
);

// we can write like this (just for understanding)

//  let c=romio.find ((b)=> {
//     return b >= 45
//   }
//   );
// console.log(c);

// filter
// it returns a new array after execute

const num3 = [45, 34, 23, 54, 23, 21, 44];
let romio2 = num3.filter(n => n > 30);

// console.log(romio2);

const books = [
    {
        Titles: 'good omens',
        authors: ['Neil Gamen'],
        rating: '4.25',
        genres: ['fiction', 'fantasy']
    },
    {
        Titles: 'changing my mind',
        authors: ['Zadie smith'],
        rating: '3.83',
        genres: ['nonfictions', 'Essays']

    },
    {
        Titles: 'Bone: The complete Edition',
        authors: ['jeff smith'],
        rating: '4.2',
        genres: ['friction', 'graphics novels', 'fantasy']
    },
    {
        Titles: 'the name of the wind',
        authors: ['pathric Ruthfuss'],
        rating: '4.54',
        genres: ['friction', 'fantasy']
    },
    {
        Titles: 'the overstory',
        authors: ['Richards power'],
        rating: '4.65',
        genres: ['friction', 'epic']
    }
];

let goodratings = books.filter(n => (n.rating >= 4.1));
//  console.log(goodratings);

let goodbooks = books.filter(book => book.genres.includes('fantasy'));
// console.log(goodbooks);

// let ascending = [400.50, 3000, 99.99, 35.99, 12.00, 9500]
// let i =1;
// let acsort = ascending.sort((a, b) => {
//     console.log('here ', i++, a, b, a-b);
//     return a - b;
// });
// console.log(acsort);
// let descort = ascending.sort((a, b) => {
//     return b - a;
// });
// console.log(descort);
//
// how to excute sorting

// function bubbleSort(array) {
//     let done = false;
//     while (!done) {
//       done = true;
//       for (var i = 1; i < array.length; i += 1) {
//         if (array[i - 1] > array[i]) {
//           done = false;
//           let tmp = array[i - 1];
//           array[i - 1] = array[i];
//           array[i] = tmp;
//         }
//       }
//     }

//     return array;
//   }

//   let numsArr = [12, 10, 15, 11, 14, 13, 16];
//   bubbleSort(numsArr);
//   console.log(numsArr);


// reduse method

let nums2 = [2, 3, 4, 5, 4];
let product = nums2.reduce((total, currentval) => {
    return total * currentval
});
// console.log(product);

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
let maxgrade = grades.reduce((max, currentval) => {
    if (currentval > max) {
        return currentval;
    } return max;
});
// console.log(maxgrade);

// default parametres

function multiply(a, b) {
    // if (typeof b === 'undefined') {
    //     b = 1;
    // }
    b = typeof b === 'undefined' ? 1 : b;   // ternary operator
    return a * b;
}
// console.log(multiply(3, 7));

function multiply1(a, b = 1) {
    return a * b;
}
// console.log(multiply1(4));

const greet = function (person, greeting = 'hi') {
    console.log(`${greeting},${person}!`);
}
// console.log(greet('rahul'));

const blah = (x, y = [1, 2, 3]) => {
    console.log(x, y);
}
// console.log(blah(5));

// spread for function call

function givemefour(a, b, c, d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}
// console.log(givemefour(1,2,3,4));

const color = ['red', 'orange', 'yellow', 'pink'];

// console.log(givemefour(color));
// console.log(givemefour(...color)); // used spread function

const str = 'goat';
// console.log(givemefour(...str));

//spread in array literals (we use (...)three dots in spread method )

const nus1 = [1, 2, 3, 4];
const nus2 = [4, 5, 6, 7];
// console.log(nus1,nus2);
// console.log(  'spread function', ...nus1,...nus2);

// spread in object literals

const feline = {
    legs: 4,
    family: 'felidae'
};
const canine = {
    family: 'caniane',
    furry: true
};
const dog = {
    ...canine,
    ispet: true,
    adorable: true
};
console.log(dog);
const housecat = {
    ...feline,
    isgrumpy: true,
    personality: 'unpredictable'
};
console.log(housecat);
const catdog = {
    ...canine,
    ...feline
};
console.log('hello', catdog);

// destructuring arrays

const colors = ["red", "green", "blue"];

// Array destructuring
const [firstColor, secondColor, thirdColor] = colors;

// console.log(firstColor);   // Output: red
// console.log(secondColor);  // Output: green
// console.log(thirdColor);   // Output: blue

const fruits = ["apple", "banana", "orange", "grape", "mango"];

// Array destructuring with rest syntax
const [firstFruit, secondFruit, ...otherFruits] = fruits;
// ( ...otherfruits (spread method ...))
// console.log(firstFruit);     // Output: apple
// console.log(secondFruit);    // Output: banana
// console.log(otherFruits);    // Output: ["orange", "grape", "mango"]

// object destructuring

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

// Object destructuring
const { firstName, lastName, age } = person;

//   console.log(firstName);  // Output: John
//   console.log(lastName);   // Output: Doe
//   console.log(age);        // Output: 30

const user = {
    username: "johndoe",
    email: "john.doe@example.com",
};

// Object destructuring with variable renaming
const { username: usernameAlias, email: emailAddress } = user;

console.log(usernameAlias);   // Output: johndoe
console.log(emailAddress);    // Output: john.doe@example.com

//   nested  destructuring 
const person1 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA",
    },
};

// Nested object destructuring
const { name, age1, address: { city, country } } = person1;

//   console.log(name);     // Output: John
//   console.log(age1);      // Output: 30
//   console.log(city);     // Output: New York
//   console.log(country);  // Output: USA

// destructuring parametres

// Function with object parameter destructuring
function printPersonDetails({ firstName, lastName, age }) {
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Age: ${age}`);
}

const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

printPersonDetails(person2);
// Output:
// First Name: John
// Last Name: Doe
// Age: 30 

// shorthand object properties
// const { getstatus } = require('./a.js');
const reviews = [2, 4.3, 5, 6.3, 1.6, 0.44, 7];
// console.log(getstatus(reviews));

const getstatus = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    return [max, min, sum]

}
console.log(getstatus(reviews));

// computed properties

const role = 'host';
const people = "jools holland";
const role2 = 'director';
const people2 = 'james cameron';

// const team ={};
// team[role]=people;
// team[role2]=people2;
// console.log(team);

const team = {
    [role]: people,
    [role2]: people2
};
// console.log(team);

function addPro(obj, k, v) {
    const copy = {
        ...obj
    };
    // console.log('copy',copy);

    copy[k] = v;
    console.log('copy', copy);
    return copy;
};

const res = addPro(team, 'happy', ':');
console.log(res);