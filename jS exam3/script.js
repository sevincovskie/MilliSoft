//1.	Array daxilində tək yerdə duran elementləri ekrana verin

let arr1 = ["a", "b", "c", "d", 1,2,3,5]

for (let i = 1; i < arr.length; i+=2){
    console.log(arr[i]);
};

//2.	Array elementləri daxilində 5-ə bölünən ədədlərin sayını ekrana verin

let arr2 = [5,7,10,25]

let count = 0 


//3.	Daxil olunan ədədin sadə və ya mürəkkəb olduğunu tapan proqram tərtib edin.





//4.Array elementləri daxilində 7-ə bölünən sonuncu ədədi ekrana çıxarın.

let arr4


//5.	Array elementləri daxilində ən böyük və ən kiçik elementləri ekrana çıxaran proqram tamin edin
//6.	Array elementləri daxilində ən böyük və ən kiçik elementlərin yerini dəyişən  proqram tərtib edin


function deyis (arr5){
    let maxIndex= 0;
    let minIndex= 0;

    for (let i=0; i<arr5.length; i++) {
        if (arr5[i] > arr5[maxIndex]) {

        }
}





//10
var len = str.length;
var mid = Math.floor(len/2);

for ( var i = 0; i < mid; i++ ) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
}

return true;
}