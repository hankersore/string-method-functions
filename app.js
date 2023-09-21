// function includes(arr, item) {
//    for (let i =0; i < arr.length; i++) {
//     if (arr[i]==item) return true;
//    }
//    return false;
// }
// console.log(includes([0,1,2,3,4], 3));

// indexOf
// lastIndexOf
// toLoweCase
// toUpperCase
// slice
// replace

// ===================================================

// indexOf

function indexOf(str, word) {
   let parts = str.split(" ");
   for (let i = 0; i < parts.length; i++) {
      if (parts[i] == word) {
         return i;
      }
   }
   return "value is not found";
}

console.log(indexOf("lorem ipsum dolor sit amet", "ipsum"));

// lastIndexOf

function lastIndexOf (str, value) {
  for (let i = str.length - 1; i  > 0; i--) {
   if (str [i] === value) {
      return i;
   }
  }
  return -1;
}

console.log(lastIndexOf("hello", "l"));

// toLowerCase

const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";

function toLowerCase(str) {
   let lowerCaseStr = "";
   for (let i = 0; i < str.length; i++) {
     const char = str[i];
     const index = upperCase.indexOf(char);
     if (index !== -1) {
       lowerCaseStr += lowerCase[index];
     } else {
       lowerCaseStr += char;
     }
   }
   return lowerCaseStr;
 }

 console.log(toLowerCase("HI EVERYBODY"));

// toUpperCase

function toUpperCase(str) {
   let upperCaseStr = "";
   for (let i = 0; i < str.length; i++) {
     const char = str[i];
     const index = lowerCase.indexOf(char);
     if (index !== -1) {
       upperCaseStr += upperCase[index];
     } else {
       upperCaseStr += char;
     }
   }
   return upperCaseStr;
}

console.log(toUpperCase("abcdefg"));

// slice

function slice (str, start, end) {
      if (start === undefined) {
         start = 0;
      }
      if (end === undefined) {
         end = str.length;
      }
   return str.substring(start, end);
}

console.log(slice("hello world",0, 5));


// replace 

function replace(str, strWord, newWord) {
   return str.split(strWord).join(newWord);
}

console.log(replace("abcd", "d", "+++"));