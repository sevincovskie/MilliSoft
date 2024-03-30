// //     1. Array elementlərinin cəmini / hasilini tapın
// function returnSumandProduct(arr){
//   var sum = 0;
//     let product =1

//   for(let i in arr){
//     sum += arr[i]
//         product *= arr[i];

//   }
//   return sum;
// }

// let arr = [1, 2, 3, 4, 5];
// let result = sumAndProduct(arr);
// console.log( result);
// sumAndProduct();

// // 2. Array elementlərinin içində təkrarlanan elementləri silin
// let arr = [1,2,2,2,3,4]

//   let newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(newArr.indexOf(arr[i]) == -1){ // == -1
//       newArr.push(arr[i])
//     }
//   }

// console.log(newArr);

// // 3. Array elementlərində ədəd olmayan elementləri silin.
// let arr = [5, "salam", true, 5];
//   let newArr = []
//   for(let i in arr){
//     if(typeof arr[i] === "number"){
//       newArr.push(arr[i])
//     }
//   }
//   console.log(newArr);

// // 4. Sözü tərsinə çevirən funksiya yaradın. 2usul
// function reverseString(string){
//   return string.split('').reverse().join('')
// }
//  let word = "abcdez"
//  let reverseWord = ""

//  for (let i= word.length-1; i >= 0;i--) {
//   reverseWord+= word[i]

//  }
//  console.log(reverseWord);
// // 5. Cümləni tərsinə çevirən funksiya.
// function reverseSentence(string){
//   return string.split(' ').reverse().join(' ')
// }

// let sentence = "Salam, menim adim Sevincdir"

// let reverseSentence = ""
//  let words  = sentence.split(" ")
// for (let i=sentence.length-1;i>=0; i--){
//  reverseSentence += words[i] + ""
// }
// console.log(reverseSentence);
// // 6. Daxil edilmiş ədədi sözlə yazan funskiya (Məs→ input :1, output : Bir )

// let tekl = [
//   "sifir",
//   "bir",
//   "iki",
//   "uch",
//   "dord",
//   "besh",
//   "alti",
//   "yeddi",
//   "sekkiz",
//   "doqquz",
// ];
// let onl = [
//   "on",
//   "iyirmi",
//   "otuz",
//   "qirx",
//   "elli",
//   "altmis",
//   "yetmis",
//   "seksen",
//   "doxsan",
// ];
// let input = 225;


// if (input == 0) {
//   console.log("sifir");
// } else if (input == 10) {
//   console.log("on");
// } else if (input == 100) {
//   console.log("yuz");
// } else if (input === 1000) {
//   console.log("min");
// } else {
//   let a = (input % 10) ;
//   let b = ((Math.floor(input / 10)) % 10)-1;
//   let c = (Math.floor(input / 100)) ;
//   if (input < 10) {
//     console.log(tekl[a]);
//   } else if (input < 100) {
//     if (input % 10 == 0) {
//       console.log(onl[b]);
//     }else {
//       console.log(onl[b]+" "+tekl[a]);
//     }
//   }else {
//     if (input%100==0){
//       console.log(tekl[c]+"yuz");
//     }else {
//       console.log(tekl[c]+"yuz"+ onl[b]+" "+tekl[a]);
//     }
    
//   }
// }

// 7. Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın

// let number = prompt("eded daxil edin")
// if (number % 1 === 0){

//   console.log("Tam ededdir: " + number);
// }else {

//   console.log("Tam eded deyil: " + number);
// }


// 8. Verilmiş cümlədə sözlərin sayını tapın
// let sentence = "test cumle"
// let words = sentence.split(" ")
// console.log(words.length);

// 9. Verilmiş cümlədə artıq boşluq simvollarını silin
// function clearPrompts(string){
//   let newSentence = []
//   let strings = string.split(' ')
//   for(let i in strings){
//     if(strings[i].trim() != ""){
//       newSentence.push(strings[i])
//     }
//   }
//   return newSentence.join(' ')
// }

// console.log(clearPrompts(" Bu   cumleni tapaq."));

//10. Verilmiş mətndə cümlənin ilk sözündə olan baş hərfin böyük yazılmasını təmin edən proqram yazın

//  let text = prompt("cumle daxil edin")
//  let splitText =text.split(' ')
//  let result = "";

//  for(let i in text){
//   if(splitText[i-2]=="." || i==0){
//     result+=text[i].toUpperCase()
//   }
//   else {
//     result+=text[i]
//   }

//  }
//  console.log(result);

//11. 2 arrayın eyniliyini yoxlayın

// let arr1 = [1,2,3,4];
// let arr2 = [3,4,5,6];
// let count= 0;

// if (arr1.length==arr2.length){
//   for(let i=0; i<arr1.length; i++){
//     if(arr1.sort()==arr2.sort()){
//       count++
//     }
//   }if(count==arr1.length){
//     console.log("eynidir");
//   }else {
//     console.log("eyni deyil");
//   }
// }
//12. Array elementlərini sort metodundan istifadə etmədən artma / azalma istiqamətinə görə sıralayın

// let arr =[1,2,3,4,5,6,6,7,1];
// let m;
// for(let i=0; i<arr.length; i++){
//   for(let j=0; j<arr.length; j++){
//     if(arr[i]>arr[j]){
//       m = arr[i]
//       arr[i] = arr[j]
//       arr[j] = m
//     } 
    
//   }
 
// }
 
// console.log("azalma sirasi:" +arr);

// for(let i=0; i<arr.length; i++){
//   for(let j=0; j<arr.length; j++){
//     if(arr[i]<arr[j]){
//       m = arr[i]
//       arr[i] = arr[j]
//       arr[j] = m
//     } 
    
//   }
 
// }


// console.log("artma sirasi:" +arr);


//13. Verilmiş mətndə «ADNA» sözlərini «ADNSU» sözü ilə əvəz edin

function replaceADNAwithADNSU(text) {
  
  let words = text.split(' ');
  
  for (let i = 0; i < words.length; i++) {
      if (words[i] === 'ADNA') {
          words[i] = 'ADNSU';
      }
  }
  
  return words.join(' ');
}

let text = "ADNA";
let newText = replaceADNAwithADNSU(text);
console.log(newText);//ADNSU

//14. İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, aylıq əmək haqqınn hesablanması üçün proqram yazın. Həftəlik 40 saatdan artıq olan iş saatları üçün əmək haqqı 2 qat hesablansın

function ayliqMaasHesabla(saatliqMaas, heftelikSaatlar){
  const heftelikIsSaati =40;
  const hefteGunu= 5;//heftede 5 gun isleyir

  //heftelik isleme saati

  let heftelikMaas =0;
  if(heftelikSaatlar> heftelikIsSaati){
    heftelikMaas= heftelikIsSaati*saatliqMaas+ (heftelikSaatlar-heftelikIsSaati)*2*saatliqMaas;

  }else {
    heftelikMaas = heftelikSaatlar*saatliqMaas;
  }

  //ayliq maas 

  let ayliqMaas = heftelikMaas*(4/hefteGunu);
  return ayliqMaas;

}

const saatliqMaas = 15; //1saati 15manat
const heftelikSaatlar=45 // heftelik is saatlari 45 saat

const ayliqMaas = ayliqMaasHesabla(saatliqMaas, heftelikSaatlar)

console.log("ayliqMaas:" + ayliqMaas);


//15. 3 rəqəmli ədədin rəqəmləri cəmini tapın

// let number = 234;
// let a = math.floor(number/100)
// let b = math.floor((number/10))%10
// let c = number % 10

// console.log(a+b+c);

//16. Verilmiş 2 mətnin oxşarlıq əmsalını hesablayın. ( 3 ardıcıl sözün eyniliyinə əsasən)

// let text1 = "Hi world";
// let text2 = "Hello world";

// let text1Split = text1.split(" ");

// let count = 0;
// text = "";

// for (let i = 0; i < text1Split.length; i++) {
//   text = "";
//   if (text1Split.length - 2) {
//     text = text1Split[i] + " " + text1Split[i + 1] + " " + text1Split[i + 2];
//     console.log(text);
//   }
// }
// if (text!= "") {
//   if(text2.includes(text)){
//     count++;
//   }
// }
//  if (text1Split.length-20/100 <= count) {
//   console.log("copy");
//  }else {
//   console.log("copy failed");

//  }

//17. Verilmiş mətndə təkrarlana sözlərin sayını tapın

//  let text = " salam salam . sagolun.gedin"

//  let textSplit= text.split("");

//  let count

//  for (let i=0; i<textSplit.length; i++){
//   count =0
//   for (let j=0; j<textSplit.length; j++){
//     if (textSplit[i]=textSplit[j]){
//       count++;

//     }
//   }
//   if (count>1){
//     for(let t=0; t<=i; t++){
//       if (textSplit[i]=textSplit[t]){
//         count++;
//     }
//   }
//  }
//  if (count==2){
//   console.log();
//  
