//1.	Array daxilində tək yerdə duran elementləri ekrana verin

// let arr1 = ["a", "b", "c", "d", 1,2,3,5]

// for (let i = 1; i < arr.length; i+=2){
//     console.log(arr[i]);
// };

//2.	Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin

// let arr2 = [5,7,10,25]

// let count = 0
//  for (let i = 0; i < arr2.length; i++){
//     if (arr2[i]%5==0){
//         count++;
//     }
//  }

//  console.log(count);

//3.	Daxil olunan ədədin sadə və ya mürəkkəb olduğunu tapan proqram tərtib edin.

// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     if (num === 2) {
//         return true;
//     }
//     if (num % 2 === 0) {
//         return false;
//     }
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function main() {
//     const number = parseInt(prompt("Bir ədəd daxil edin: "));

//     if (isNaN(number)) {
//         console.log("Düzgün ədəd daxil edin.");
//     } else {
//         if (isPrime(number)) {
//             console.log(number + " sadədir.");
//         } else {
//             console.log(number + " mürəkkəbdir.");
//         }
//     }
// }

// main();

//4.Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.
// let arr = [3, 14, 21, 35, 42, 49, 56, 63, 70, 77];
// let lastDivisibleBySeven;

// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 7 === 0) {
//         lastDivisibleBySeven = arr[i];
//         break;
//     }
// }

// console.log("Sonuncu 7-ə bölünən ədəd: " + lastDivisibleBySeven);

//5.	Array elementləri daxilində ən böyük və ən kiçik elementləri ekrana çıxaran proqram tamin edin
// let arr = [5, 3, 9, 2, 1, 7, 4, 8];

// let max = arr[0];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// console.log("max: " + max);
// console.log("min: " + min);

//6.	Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini dəyişən  proqram tərtib edin

// function deyis (arr){
//     let maxIndex= 0;
//     let minIndex= 0;

//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] > arr[maxIndex]) {
//             maxIndex =i;

//         }if (arr[i] < arr[minIndex]) {
//             minIndex=i;
//         }
// }

// let temp = arr[maxIndex];
// arr[maxIndex] = arr[minIndex];
// arr[minIndex] = temp;

// console.log(arr);
// }
// deyis([5, 3, 9, 2, 1, 7, 4, 8])
// min:1 max:9. yerleri deyisir/[5, 3, 1, 2, 9, 7, 4, 8]

//7.	Daxil edilən ədədin bütün mümkün bölənlərini ekrana çıxaran proqram tərtib edin

// function findDivisors(num) {
//     let divisors = [];

//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             divisors.push(i);
//         }
//     }

//     return divisors;
// }

// let num = parseInt(prompt("Eded daxil edin:"));

// if (!isNaN(num)) {
//     let divisors = findDivisors(num);

//     console.log(num + "ededin bölenleri:");
//     console.log(divisors);
// } else {
//     console.log("error");
// }

//8.	Verilmiş array daxilində ixtiyari ədədi ekrana çıxaran proqram tərtib edin
// function getRandomNumber(array) {
//     const length = array.length;
//     const randomNumber = Math.floor(Math.random() * length);
//     console.log("random eded: " + array[randomNumber]);
// }

// let array = [5, 8, 12, 3, 9, 25, 17, 4];

// getRandomNumber(array);

//9.	1-dən 100-ə qədər ədədlər daxilində təkliyi 1 olan ədədləri ekrana verin
// for (let i = 1; i <= 100; i++) {
//     let onesDigit = i % 10;
//     if (onesDigit === 1) {
//         console.log(i);
//     }
// }

//10.	Daxil olunmuş ifadənin polindrom olduğunu yoxlayın.   (polindrom dedikdə tərsi və düzü eyni olan ifadə başa düşülür məsələn ütü, 121,1331,4554 və s.)
// function palindrome(str) {
//     str = str.toLowerCase().replace(/[\W_]/g, '');
//     const length = str.length;

//     for (let i = 0; i < length / 2; i++) {
//         if (str[i] !== str[length - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }

// let input = prompt("soz ve ya reqem daxil edin:");

// if (palindrome(input)) {
//     console.log(input + "  palindromdur.");
// } else {
//     console.log(input + "  palindrom deyil.");
// }

//11.	Daxil olunmuş iki sözün anaqram olduğunu yoxlayın

// function anagram(word1, word2) {
//   let anagramWord1 = word1.split(" ").sort().join(" ");
//   let anagramWord2 = word2.split(" ").sort().join(" ");

//   if (anagramWord1.length == anagramWord2.length) {
//     return "anagram sozdur:";
//   } else {
//     return "anagram deyil:";
//   }
// }

// let word1 = "salam";
// let word2 = "mala";

// console.log(anagram(word1, word2) + word1 + " -" + word2);

// //12.	Daxil olunmuş iki eyni uzunluqlu arrayin eyni yerdə duran elementlərinin hasilindən ibarət yeni array yaradın.
// //Məsələn [2,5] [3,6] yeni array [6,30]

// function multiplyElements(arr1, arr2) {
//   let newArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i] * arr2[i]);
//   }
//   return newArr;
// }

// let arr1 = [2, 5];
// let arr2 = [3, 6];
// let newArr = multiplyElements(arr1, arr2);
// console.log(newArr);

// //13.	Daxil olunmuş mətndə saitləri silən proqram yaradın

// function removeVowels(text) {
//   let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//   let newText = text.split("");

//   for (let i = 0; i < newText.length; i++) {
//     if (vowels.indexOf(newText[i]) !== -1) {
//       newText[i] = "";
//     }
//   }
//   return newText.join("");
// }

// let inputText = "Bugun hava guneslidir.";
// let outputText = removeVowels(inputText);
// console.log(outputText);


//14.	İstifadəçi daxil edən ədəd sayda ixtiyarı simvoldan ibarət string ifadə yaradın (məsələn input:5   output: qeg8d)

//  function randomString(length){
//     let result = '';
//     let chars ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let charLength = chars.length;
//     for (let i = 0; i < length; i++) {
//         result += chars.charAt(Math.floor(Math.random() * charLength));
//     }
//     return result;
//  }
//  let userLength = parseInt(prompt("Ixtiyari sayda simvoldan ibaret uzunluq daxil edin:"));

//  let randomLength = randomString(userLength)

//  console.log("Ifade:", randomLength);

//15.	Ədədlərdən ibarət arrayin elementlərinin ədədi ortasını tapın

// function edediOrtaHesabla (num1, num2) {
//     let say=2
//     let edediOrta = (num1 + num2)/say;
//     return edediOrta;
// }

// let arr = [1,2]
// let cavab =edediOrtaHesabla(arr[0], arr[1])
// console.log(cavab);

//ve ya 

// function edediOrtaHesabla(arr){
//     let cem =0;
//     for(let i=0; i<arr.length; i++){
//         cem += arr[i];
//     }
//     let edediOrta = cem/arr.length;
//     return edediOrta;
// }
// let nums =[1,2,3,4,5]
// let edediOrta = edediOrtaHesabla(nums);
// console.log("Ededi orta: " + edediOrta);




// //16.	Daxil olunmuş sözdə neçə sait və samit olduğunu tapın
// function saitVeSamitSayi(söz) {
   
//     let saitler = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

//     let saitSayi = 0;
//     let samitSayi = 0;


//     for (let i = 0; i < söz.length; i++) {
//         let herf = söz[i];
       
//         if (saitler.indexOf(herf) !== -1) {
//             saitSayi++;
//         } else if (herf.match(/[a-zA-Z]/)) { 
//             samitSayi++;
//         }
//     }

//     return { sait: saitSayi, samit: samitSayi };
// }
// let söz = "JavaScript";
// let result = saitVeSamitSayi(söz);
// console.log("Sait sayi:", result.sait, "Samit sayi:", result.samit);




// //17.	Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan metod yaradın (Mükəmməl ədəd ədədin özündən başqa qalan bütün tam bölənlərinin cəmi özünə bərabər olan ədədə deyilir - məs: 6=1+2+3;  28=1+2+4+7+14)

// function perfectNumber(num){
//     let result = 0
//     for (let i = 1; i < num; i++) {
//         if (num %i == 0) {
//             result += i;

//         }
//     }
//     if(result=== num){
//         return (num + " "+ "mukemmel ededdir")
//     }else {
//         return(num+"mukemmel eded deyil")
//     } ;

   

// }

// let num = 28;
// console.log(perfectNumber(num));

//18.	Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın
function sumNumbers(num) {

    let sum=0;
    for (; num > 0; num = Math.floor(num / 10)) {
        sum += num % 10;
    }
    return sum;
}

let num = 1234567;
console.log("reqemler cemi", sumNumbers(num));

//19.	Substring metodunun işini yerinə yetirən funksiya yaradın

// function substring(string, start, end) {
//     if (start===undefined){
//         start=0;
//     }if (end===undefined){
//         end=string.length;
//     }

//     let result = '';
//     for (let i=start; i<end; i++) {
//         result += string[i];
//     }
//     return result;
// }

// let text = "FullStack oyrenirem"
// let resultText = substring(text,0,4);
// console.log(resultText);


//20.	indexOf metodunun işini yerinə yetirən funksiya yaradın

function indexOf(str, search, startIndex) {
    startIndex = startIndex || 0;

    if (startIndex < 0) {
        startIndex = 0;
    }

    for (var i = startIndex; i < str.length; i++) {
        var match = true;
        for (var j = 0; j < search.length; j++) {
            if (str[i + j] !== search[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }

    return -1;
}

var text = "Learning JavaScript";
var index = indexOf(text, "JavaScript");
console.log(index);


