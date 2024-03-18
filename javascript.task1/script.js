//1.	İstifadəçi tərəfindən daxil edilən ədədin cüt olub-olmadığını yoxlayın.
//(Məsələn istifadəçi 12 daxil etdiyi zaman ekrana cütdür, 15 daxil etdiyi zaman təkdir çıxarsın)

// let number = prompt("Eded daxil edin: ");

// if ( number % 2 ==0){
//     console.log("Eded cutdur: " + number);
// } else {
//     console.log("Eded tekdir: " + number);
// }

//2.	Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın.

// let a = Number(prompt("Eded daxil edin: "));
// let b = Number(prompt(" Eded daxil edin: "));
// let c = Number(prompt(" Eded daxil edin:"));

// if (a > b && a > c) {
//   console.log("max: " + a);
//   if (b < c) {
//     console.log("min: " + b);
//   } else {
//     console.log("min: " + c);
//   }
// } else if (b > c && b > a) {
//   console.log("max: " + b);
//   if (c < a) {
//     console.log("min: " + c);
//   } else {
//     console.log("min: " + a);
//   }
// } else if (c > a && c > b) {
//   console.log("max: " + c);
//   if (a < b) {
//     console.log("min: " + a);
//   } else {
//     console.log("min: " + b);
//   }
// }

//3.	1-dən 10-a qədər ədədlərin cəmini və hasilini tapın.

// let cem = 0;
// let hasil = 1;

// for ( let i = 1; i < 10 ; i++ ) {
//     cem += i;
//     hasil *= i;
// }

// console.log("cem: " + cem); //45
// console.log("hasil: " + hasil);//3628800

//4. 1-dən 100-ə qədər cüt ədədləri, onların cəmini və hasilini tapın.

// let cem = 0;
// let hasil =1;

// for (let i = 1; i < 100 ; i++) {
//     if ( i%2 == 0 ) {
//         console.log(i);
//     cem += i;
//     hasil *= i;
//     }
// }

// console.log("cem: " + cem);
// console.log("hasil: " + hasil);

//5.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədləri tapın.
//6.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın.

//   let cem =0;

//   for (let i = 100; i <=999; i++) {
//     if ( i% 7 == 0 && i % 8== 0){
//         console.log(i);
//         cem +=i;
//     }
//   }
//   console.log("cem: " + cem);

//7.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın.

// for (let i = 100; i <= 999; i++) {
//     if (i % 7 === 0 && i % 8 === 0) {
//         console.log(" 7 və 8-ə bulunen eded:", i);
//         break;
//     }
// }

// //8.	3 rəqəmli ədədlərdən 7 və 8-ə bölünən son ədədi tapın.
// for (let i=999; i>100; i--) {
//     if (i % 7 === 0 && i % 8 === 0) {
//         console.log(" 7 və 8-ə bulunen eded:", i);
//         break;
//     }
// }

//9.	3 rəqəmli ədədlərin ədədi ortasını tapın.

// let edediOrta;
//  say = 0;
// cem=0;
//  for (let i = 100; i <= 999; i++) {
//     cem=cem+i;
//     say++;
//     edediOrta = cem/say;

//  }

//  console.log(edediOrta);

//10.	İstifadəçidən iki rəqəm və bir riyazi əməl daxil etməsini təmin edin və həmin ədədlər üzərində daxil olunmuş riyazi əməli tətbiq edib nəticəni ekrana çıxarın.
//  let a =Number(prompt(" 1-ci ededi daxil edin:"));
//  let b=Number(prompt(" 2-ci ededi daxil edin:"));
//  let c = prompt (" riyazi emeli daxil edin: '+', '-', '*', ':'");

//  if (c=="+") {
//     let cem=a+b;
//     console.log("cem"+" " + cem);
//  }if (c=="-") {
//     let ferq = a-b;
//     console.log("ferq"+" " + ferq);
//  } if (c=="*") {
//     let hasil = a*b;
//     console.log("hasil"+" " + hasil);
//  } if (c==":") {
//     if(b==0){
//         alert("0 a bolme yoxudr")
//     }
//     else{
//        let qismet = a/b;

//     console.log("qismet"  + "  " + qismet);
//  }
//     }

//11.	Daxil edilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın.

//  let number =Number( prompt(" eded daxil edin ve bolunenlerini gorun"))

//   for (let i =100; i <=999; i++) {
//     if ( i%number==0){
//         console.log(i);
//     }
//   }

//12.	Daxil edilmiş ədədin bütün mümkün tam bölənlərini tapın.
// let number =Number( prompt(" eded daxil edin ve bolunenlerini gorun"))

//   for (let i =0; i < number; i++) {
//     if ( number%i==0){
//         console.log(i);
//     }
//   }

//13.	1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın.

// for  ( let i = 2 ;i <= 100; i++ ) {
//     let say =0;
//     for ( let j = 2; j< i; j++ ) {
//         if (i%j == 0) {
//             say++;
//         }
//     } if ( say == 2){
//      console.log("sade ededler:"+" "+ i);
//     } else {
//       console.log("murekkeb ededler:"+" "+i);
// }

// }

//14.	12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)
// for  ( let i = 0 ;i <= 12; i++ ) {
//     for ( let j = 0; j< i; j++ ) {
//         if (i+j == 12) {
//             console.log(i , j);

//         }

// }
// }

//15.	İki dəyişənin dəyərlərininin yerini dəyişən proqram tərtib edin. (Məsələn x=5, y=6, => x=6, y=5)
let x = Number(prompt("1-ci ededi daxil edin:"));
let y = Number(prompt("2-ci ededi daxil edin:"));

let z;
z = x;
x = y;
y = z;

console.log(x);
console.log(y);
