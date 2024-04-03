//1. 2 tarix arasındakı intervalı tapın (iki tarix arasındakı intervalı il ay gün olaraq çıxarmaq,
// məsələn 27.03.2024 və 01.03.2027 tarixləri üçün aralarındakı interval 2 il 11 ay 2 gün)

// let startDate = "4/3/2024";
// let endDate = "5/4/2028";

// let year = endDate.getFullYear()-startDate.getFullYear();
// let month = endDate.getMonth()-startDate.getMonth();
// if(month<0){
//     year--;
//     month +=12;
// }

// let day = endDate.getDate()-startDate.getDate();
// if(day<0){
//     month--;
//     endDate.setDate(0);
//     day +=endDate.getDate();
// }

// console.log("Interval:", year+"year",+month+"month",+ day +"day");

//2.  2 tarix arasındakı gün sayını tapın

function gunSayiHesablamaq( date1, date2 ) {
    let day1 = new Date( date1);
    let day2 = new Date( date2);

    let days = 24*3600 * 1000;

    let arasindakiGun = Math.round(Math.abs(day1-day2)/days);

    return arasindakiGun;

}

let date1 = "4/3/2014";
let date2 = "5/6/2024";
console.log(gunSayiHesablamaq(date1, date2)+ "gun");

//3. Tələbələrin məlumatlarını özündə saxlayan array yaradın.
// İmtahandan keçməyən tələbələri  silin.(tələbələrin adı, soyadı, imtahana giriş balı, çıxış balı kimi məlumatları saxlayan obyektlər array-in elementləridir. 
//Əgər tələbənin çıxış balı 17-dən kiçik və giriş və  çıxış ballarının cəmi 51-dən kiçikdirsə, həmin tələbəni arraydən silin)-

let students = [
    {
        name:"Sevinc",
        surname:"Yusifova",
        girisBali:55,
        cixisBali:60
    },
    {
        name:"Ulviyye",
        surname:"Bayramova",
        girisBali:30,
        cixisBali:20
    },
    {
        name:"Elnare",
        surname:"Abdullayeva",
        girisBali:35,
        cixisBali:10
    },
    {
        name:"Nermin",
        surname:"Quliyeva",
        girisBali:50,
        cixisBali:40
    },
]

for (let i = 0; i <students.length; i++){
    let student = students[i];
    let cemBali = student.girisBali+student.cixisBali;

    if (student.cixisBali< 17 || cemBali<51){
        students.splice(i, 1);
        i--;
    }
}

console.log(students);
