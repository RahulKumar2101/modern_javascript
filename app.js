
// loops with array

const word = 'stressed';
for (i = word.length - 1; i >= 0; i--) {
    console.log(i + ' ' + word[i]);
}

let words = 'stressed';
let reversedwords = '';
for (i = 0; i < words.length; i++) {
    reversedwords += words[i];
    console.log(reversedwords);
}

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
    
    return alpha.indexOf(element)+1;

}
console.log( 'h' ,placeOfAlpha('h'));
console.log('a' , placeOfAlpha('a')); // should return 1
console.log(placeOfAlpha('d')); // should return 4
console.log(placeOfAlpha('k')); // should return 11 



