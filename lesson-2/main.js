/*
Helloooo woooo
*/
/**
 * Khai bao vui vui
 * 
 * 
 */

/*
Giá»›i thiá»‡u má»™t sá»‘ hÃ m built - in
    1. Alert
    2. Console
    3. Confirm
    4. Prompt
    5. Set timeout
    6. Set interval
*/

// Khai bao bien
var fullName = 'Vo Tuan Kiet';
var age = 22; //Khai bao tuoi

//Goi ham thong bao
alert(fullName + age);

//1.Console
console.log('Hoc Lap trinh cung f8');
console.log(fullName)


//Confrim
confirm('Xac nhan');

//Prompt
prompt('Xac nhan do tuoi')

//Set timeout
setTimeout(function() {
    alert('Thong bao')
},1000
)

//Set interval
setInterval(function() {
    console.log('Day la Thong bao')
},1000
)
