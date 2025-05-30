/******************
 * YOUR CODE HERE *
 ******************/
function xify(str){
    let result = "";
    for(let i = 0; i < str.length; i++) {
        result = result + "x";
    }
    return result;
}
console.log(xify("Taurus"));

function yellingChars(str){
    let result = "";
    for(let i = 0; i < str.length; i++) {
        result = result + str[i] + "!";
    }
    return result;
}
console.log(yellingChars("Taurus"));

function indexedChars(str){
    let result = "";
    for(let i = 0; i < str.length; i++) {
        result = result += i + str[i];
    }
    return result;
}
console.log(indexedChars("Taurus"));

function numberedChars(str){
    let result = "";
    for(let i = 0; i < str.length; i++) {
         //if the loop is about to end
            result = result += "(" + (i + 1) + ")" + str[i];
    }
    return result
}

console.log(numberedChars("Taurus"))


function exclaim(sentence){
    let result = "";
    for(let i = 0; i < sentence.length; i++) {
        let str = sentence[i];
        if(str === "?" || str === "." ) { //if the loop is about to end
            result = result + "!";
        } else {
          result = result + str;
        }
    }
    return result
}

console.log(exclaim("That's is fine!"))


function repeatIt(str, n){
    let result = "";
    for(let i = 0; i < n; i++) {
        result = result + str;
    }
    return result;
}
console.log(repeatIt("Taurus"));

function truncate(str) {
  let result = "";
  let i;

  if (str.length > 18) {
    for (i = 0; i < 15; i++) {
      result += str[i];
    }
    result +=  "...";
    return result;
  }

  for (i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}
console.log(truncate("Taurus"));

function emailify(name) {
  let firstInitial = name[0].toLowerCase();
  let lastName = '';
  let find = -1;

  for (let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      find = i;
      break;
    }
  }

  for (let i = find + 1; i < name.length; i++) {
    lastName += name[i].toLowerCase();
  }

  return firstInitial + lastName + '.prsvr@gmail.com';
}



console.log(emailify("Taurus"));

function reverse(str){
    let result = "";
    for(let i = str.length - 1; i >= 0; i--) {
        result = result +  str[i];
    }
    return result;
}
console.log(reverse("Taurus"));

function onlyVowels(word) {
  var result = '';
  var vowels = 'aeiouAEIOU';

  for (var i = 0; i < word.length; i++) {
    var char = word[i];

    // Check if char is a vowel
    for (var j = 0; j < vowels.length; j++) {
      if (char === vowels[j]) {
        result += char; // Add vowel in lowercase
        break;
      }
    }
  }

  return result;
}


console.log(onlyVowels("Taurus"));

function crazyCase(str) {
  let result = '';
  let j = 0;  

  for (let i = 0; i < str.length; i++) {
    let crazy = str[i];

    if (crazy === ' ') {
      result += crazy;
    } else if(j % 2 === 0){

        result += crazy.toLowerCase();
      } else {
        result += crazy.toUpperCase();
      }
      j++; 
    }

  return result;
}

 console.log(crazyCase("Taurus"));

// function scrub(str){
//     let result = "";
//     for(let i = 0; i < str.length; i++) {
//         result = result + "*";
//     }
//     return result;
// }
// console.log(scrub("Taurus"));

function camelCase(str) {
  var result = '';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (i === 0) {
      result += char.toLowerCase();
    } else if (str[i - 1] === ' ') {
      result += char.toUpperCase();
    } else if (char !== ' ') {
      result += char.toLowerCase();
    }
  }

  return result;
}

  console.log(camelCase("Taurus"));

// function scrub(str){
//     let result = "";
//     for(let i = 0; i < str.length; i++) {
//         result = result + "*";
//     }
//     return result;
// }
// console.log(scrub("Taurus"));

// function scrub(str){
//     let result = "";
//     for(let i = 0; i < str.length; i++) {
//         result = result + "*";
//     }
//     return result;
// }
// console.log(scrub("Taurus"));

// function scrub(str){
//     let result = "";
//     for(let i = 0; i < str.length; i++) {
//         result = result + "*";
//     }
//     return result;
// }
// console.log(scrub("Taurus"));

// function scrub(str){
//     let result = "";
//     for(let i = 0; i < str.length; i++) {
//         result = result + "*";
//     }
//     return result;
// }
// console.log(scrub("Taurus"));

// function scrub(str){
//     let result = "";
//     for(let i = 0; i < str.length; i++) {
//         result = result + "*";
//     }
//     return result;
// }
// console.log(scrub("Taurus"));



 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
