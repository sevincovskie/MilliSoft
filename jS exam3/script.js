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


//11.	Daxil olunmuş iki sözün anaqram olduğunu yoxlayın ( anaqram dedikdə sözlərinin tərkibinin eyni olması başa düşülür, məsələn oslo solo və   s.)

//12.	Daxil olunmuş iki eyni uzunluqlu arrayin eyni yerdə duran elementlərinin hasilindən ibarət yeni array yaradın. Məsələn [2,5] [3,6] yeni array [6,30]
//13.	Daxil olunmuş mətndə saitləri silən proqram yaradın 
//14.	İstifadəçi daxil edən ədəd sayda ixtiyarı simvoldan ibarət string ifadə yaradın (məsələn input:5   output: qeg8d)
//15.	Ədədlərdən ibarət arrayin elementlərinin ədədi ortasını tapın
//16.	Daxil olunmuş sözdə neçə sait və samit olduğunu tapın
//17.	Daxil olunmuş ədədin mükəmməl ədəd olub olmadığını yoxlayan metod yaradın (Mükəmməl ədəd ədədin özündən başqa qalan bütün tam bölənlərinin cəmi özünə bərabər olan ədədə deyilir - məs: 6=1+2+3;  28=1+2+4+7+14)
//18.	Daxil olunan ixtiyari ədədin rəqəmləri cəmini tapan funksiya yaradın
//19.	Substring metodunun işini yerinə yetirən funksiya yaradın
//20.	indexOf metodunun işini yerinə yetirən funksiya yaradın