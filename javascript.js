// SPOJ huudas 1 ---

// "Гурвалжин";
// function perimeter(a, b, c) {
//    let perimeter = a + b + c;
//    return perimeter;
// }
// let a = Number(prompt("a too")), b = Number(prompt("b too")), c = Number(prompt("c too"));
// let hariu = perimeter(a, b, c)
// console.log(hariu);

// "Хоёр тооны нийлбэр";
// function niilber(too1, too2){
//    let niilber = too1 + too2;
//    return niilber;
// }
// let too1 = Number(prompt('too1')), too2 = Number(prompt('too2'));
// let hariu = niilber(too1, too2);
// console.log(hariu);

// "Куб";
// function talbai(negTaliinUrt) {
//    let talbai = (negTaliinUrt * negTaliinUrt) * 6
//    return talbai;
// }
// function ezelhuun(negTaliinUrt) {
//    let ezelhuun = negTaliinUrt * negTaliinUrt * negTaliinUrt
//    return ezelhuun;
// // }
// let negTaliinUrt = Number(prompt(""))
// let hariu1 = talbai(negTaliinUrt);
// let hariu2 = ezelhuun(negTaliinUrt);
// console.log(hariu1, hariu2);

// "Тэгш өнцөгт";
// function talbai(a, b) {
//    let talbai = a * b;
//    return talbai;
// }
// function perimeter(a, b) {
//    let perimeter = (a+b)*2;
//    return perimeter;
// }
// let a= Number(prompt("")), b = Number(prompt(''));
// let hariu1 = talbai(a, b);
// let hariu2 = perimeter(a, b);
// console.log(hariu1, hariu2);

// "Функц 1";
// function tal(x) {
//    let f = 3 * x - 5;
//    return f;
// }
// let x = Number(prompt(''));
// let hariu = tal(x);
// console.log(hariu);

// "Функц 2";
// function tal(x) {
//    let f = 4 * x ** 2 - 3 * x + 5;
//    return f;
// }
// let x = Number(prompt(''));
// let hariu = tal(x);
// console.log(hariu);

// "Сүүлийн цифр";
// function findLastDigit(num) {
//    let lastDigit = num % 10
//    return lastDigit;
// }
// let hariu = findLastDigit(476);
// console.log(hariu)

// "Аравтын орны цифр";
// function findLastDigit(num) {
//    let lastDigit = (num % 100 - num % 10)/10
//    return lastDigit;
// }
// let hariu = findLastDigit(423);
// console.log(hariu)

// "2 оронтой тоо";
// function multiplyDigits(number) {
//     let product = 1;
//     const digits = number.toString().split('');
//     digits.forEach(digit => {product = product * parseInt(digit, 10)}); // parseInt ni stringiig too bolgon huvirgadag. (tsifer buriig 10tiin ornii too bolgoj bainaa gsn ug)
//     return product; 
// }
// console.log(multiplyDigits(27));

// "3 оронтой тоо"; 
// function sumOfDigits(number) {
//     let sum = 0;
//     const digits = number.toString().split('');
//     digits.forEach(digit => {sum = sum + parseInt(digit,10)});
//     return sum;
// }
// console.log(sumOfDigits(127));

// "Минут секунд";
// function changeToMinSec(seconds) {
//     let min = Math.floor(seconds/60);
//     let sec = seconds % 60;
//         return min + " " + sec;
//     }
// console.log(changeToMinSec(200));

// "Цаг минут секунд"; ???
// function changeToTimeMinSec(seconds) {
//     let tsag = Math.floor(seconds/60/60);
//     let min = Math.floor(seconds/60);
//     let sec = seconds % 60;
//         return tsag + " " + min + " " + sec;
// }
// console.log(changeToTimeMinSec(3612))

// "Минут секунд -> секунд";
// function changeToSec(min, sec) {
//     const seconds = min * 60 + sec;
//     return seconds;
// }
// console.log(changeToSec(3, 4));

// "Цаг минут секунд -> секунд";
// function changeToSec(tsag, min, sec) {
//     let seconds = tsag * 60 * 60 + min * 60 + sec;
//     return seconds;
// }
// console.log(changeToSec(1, 2, 3));

// "Хоног цаг";
// function changeToHonTsag(time) {
//     let honog = Math.floor(time/24);
//     let tsag = time%24;
//     return honog + " " + tsag;
// }
// console.log(changeToHonTsag(44));

// "Хоног цаг -> цаг";
// function changeToTime(hon, tsag) {
//     return time = hon * 24 + tsag;
// }
// console.log(changeToTime(2, 5))

// "Жил сар";
// function changeToJilSar(month) {
//     let jil = Math.floor(month/12);
//     let sar = month%12;
//     return JilSar = jil + " " + sar;
// }
// console.log(changeToJilSar(27));

// "Жил сар -> сар"; 
// function changeToSar(year, month) {
//     return sar = year * 12 + month;
// }
// console.log(changeToSar(2, 7));

// let test = 2^5
// console.log(test);

// test
// function age(params) {
//     if (age >= 18) {
//     console.log("tanii nas", age);
//     console.log("ta nasand hursen baina.");
//    } else {
//     console.log("ta huuhdeere baina.");
//    } 
//    return age;
// }
// let hariu = age(17)

// "Хоёр тооны их";
// function ihToo(params1, params2) {
// if (params1>params2) {
//     console.log(params1, "ih too")
// } else {
//     console.log(params2, "ih too")
// }  
// }
// let hariu = ihToo(16, 14);
// console.log(hariu);

// "Хоёр тооны бага";
// function bagaToo(params1, params2) {
// if (params1<params2) {
//     console.log(params1, "baga too")
// } else {
//     console.log(params2, "baga too")
// }  
// }
// let hariu = bagaToo(9, 4);
// console.log(hariu);

// "3 тооны их";
// function ihToo(too1, too2, too3) {
//    if (too1>too2>too3) {
//         console.log(too1, "ih too")
//    } else if (too1<too2>too3) {
//        console.log(too2, "ih too")
//    } else {
//        console.log(too3, "ih too")
//    } 
// }
// let hariu = ihToo(1, 3, 9)

// "4 тооны бага"; //shine ym olov: Math.min-eer minimum toog oloh bolomjtoi.
// function bagaTooOloh(too1, too2, too3, too4) {
//     return bagaToo = Math.min(too1, too2, too3, too4);
// }
// let hariu = bagaTooOloh(3, 1, 4, 2);
// console.log("Hamgiin baga too: ", hariu);

// "Нийлбэр 80";
// function nayaasIhToonuudiinNiilber(too) {
//     let nayaasIhToo = too.filter((num) => num > 80 );
//     return niilber = nayaasIhToo.reduce((total, current) => total + current, 0);
// }
// console.log(nayaasIhToonuudiinNiilber([85, 75, 96, 69]));

// "Үржвэр 5"
// function urjver(too) {
//     let tavaasIhToo = too.filter((num) => num < 5);
//     return urj = tavaasIhToo.reduce((total, current) => total * current);
// }
// console.log(urjver([3, 6, 2, 4]));

// "Тэгш тоонуудын нийлбэр"
// function sumOfEvenNumbers(numbers) {
//     let evenNumbers = numbers.filter((num) => num % 2 === 0);
//     return sum = evenNumbers.reduce((total, current) => total + current, 0);
// }
// console.log(sumOfEvenNumbers([10, 3, 5]));

// "Сондгой тоонуудын үржвэр"
// function multiplyOddNumbers(numbers) {
//     let oddNumbers = numbers.filter((num) => num % 2 !== 0);
//     return multiply = oddNumbers.reduce((total, current) => total * current);
// }
// console.log(multiplyOddNumbers([5, 2, 3]));

// "Тэнцүү 5";
// function TavtaiTesntsuuToo(too1, too2, too3) {
// let TavtaiTesntsuuToo;
// if(too1==5){
//     if(too2==5){
//         if(too3==5)
//             TavtaiTesntsuuToo='3'
//         if(too3!=5)
//            TavtaiTesntsuuToo='2'
//     }
//     if(too2!=5){
//         if(too3==5)
//             TavtaiTesntsuuToo='2'
//         if(too3!=5)
//             TavtaiTesntsuuToo='1'
//     }
// }
// else if(too1!=5){
//     if(too2==5){
//         if(too3==5)
//             TavtaiTesntsuuToo='2'
//         if(too3!=5)
//            TavtaiTesntsuuToo='1'
//     }
//     if(too2!=5){
//         if(too3==5)
//             TavtaiTesntsuuToo='1'
//         if(too3!=5)
//             TavtaiTesntsuuToo='0'
//     }
// }
// console.log(TavtaiTesntsuuToo);    
// }
// let hariu = TavtaiTesntsuuToo(1, 5, 5)

// function tavtaiTentsuuToo(too) {
//     let tavtaiTentsuu = too.filter((num) => num == 5);
//     return hedVe = tavtaiTentsuu.length;
// }
// console.log(tavtaiTentsuuToo([1, 5, 5]));

// "3-д хуваагдах"
// function guravdHuvaagdah(too) {
//     let huvaagdahToo = too.filter((num) => num % 3 === 0);
//     return hedVe = huvaagdahToo.length;
// }
// console.log(guravdHuvaagdah([3, 12, 8, 9]));

// "11-д хуваагддаггүй"
// function huvaagddagguiTooniiNiilber(too) {
//     let arvannegdHuvaagdahgui = too.filter((num) => num % 11 !== 0);
//     return niilber = arvannegdHuvaagdahgui.reduce((total, current) => total + current);
// }
// console.log(huvaagddagguiTooniiNiilber([7, 22, 13, 30]));

// "10-аас их"
// function aravaasIh(too) {
//     if(too>10){
//         console.log("yes");
//     }
//     else{
//         console.log("no");
//     }   
// }
// let hariu = aravaasIh(11)
// console.log(hariu);

// "Тэгш тоонууд YES";
// let too = [3, 4, 5];
// for(let i = 0; i< too.length; i++){
//     if(too[i]%2==0){
//         console.log("yes");
//      }
//      else {
//         console.log("no");
//      }
// }

// "IOI 3 удаа";
// for(let i = 0; i<3; i++) {
//     console.log('ioi');
// }

// "IOI n удаа"; ???
// let n = 6;
// for(let i = 0; i<n; i++){
//     console.log('ioi');
// } 

// "Эхний n тооны нийлбэр";
// let n= 5;
// let niilber=0;
// for(let i=1; i<=n; i++){
//     niilber = niilber + i
// }
//     console.log(niilber, "niilber");

// "n!";
// let n = 5;
// let too = 1;

// for (let i = 1; i <= n; i++) {
//     too = i * too
// }
// console.log(too);

// "100-г n удаа нэм";
// let n = 6;
// let too = 100;
// let niilber;
// for (let i = 1; i <= n; i++) {
//     niilber = too * i
// }
// console.log(niilber);

// "а тоог n удаа нэм";
// let n = 6;
// let too = 50;
// let niilber;
// for (let i = 1; i <= n; i++) {
//     niilber = too * i
// }
// console.log(niilber);

// "2-ын зэрэг";
// let too = 2;
// let n = 5;
// let zereg;

// for (let i = 1; i <= n; i++) {
//     zereg = too ** i;
// }
// console.log(zereg);

// "a тооны n зэрэг";
// let too = 3;
// let n = 4;
// let zereg;

// for (let i = 1; i <= n; i++) {
//     zereg = too ** i;
// }
// console.log(zereg);

// "Тэнцсэн, унасан";
// let too = 4;
// if (too>3) {
//     console.log('tentssen');
// }
// else { console.log('unasan');
// }

// function passOrFail(number) {
//     if (number > 3) {
//         return result = 'tentssen';
//     } else {
//         return result = 'unasan';
//     }
// }
// console.log(passOrFail(4));

// "5-аас онц руу";
// let dun=4;

// if (dun==5) {
//     console.log('Onts');
// }
// else if (dun==4) {
//     console.log('Sain');
// }
// else if (dun==3){
//     console.log('Dund');
// }
// else if(dun==2){
//     console.log('Muu');
// }
// else {
//     console.log(undefined);
// }

// "Тоон үнэлгээнээс үсгэнд"
// let dun=90;
// if (dun>100) {
//     console.log(undefined);
// }
// else if (dun>89) {
//     console.log('A');
// }
// else if (dun>79) {
//     console.log('B');
// }
// else if (dun>69){
//     console.log('C');
// }
// else if(dun>59){
//     console.log('D');
// }
// else if (dun<59){
//     console.log('F');
// }
// else {
//     console.log(undefined);
// }

// "Гараг";
// let day = 4;
// let DayName;

// switch (day) {
//   case 1:
//     DayName = "Monday";
//     break;
//   case 2:
//     DayName = "Tuesday";
//     break;
//   case 3:
//     DayName = "Wednesday";
//     break;
//   case 4:
//     DayName = "Thursday";
//     break;
//   case 5:
//     DayName = "Friday";
//     break;
//   case 6:
//     DayName = "Saturday";
//     break;
//   case 7:
//     DayName = "Sunday";
//     break;
//   default:
//     DayName = "Invalid day";
// }
// console.log(DayName);

// "Улирал";
// let month = 5;
// let SeosonName;

// if (month==12 || month==1 || month==2) {
//     console.log('Winter');
// }
// else if (month==3 || month==4 || month==5) {
//     console.log('Spring');
// }
// else if (month==6 || month==7 || month==8) {
//     console.log('Summer');
// }
// else if (month==9 || month==10 || month==11) {
//     console.log('Autumn');
// }

// "Гурвалжин эсэх" "???"
// let a = 2;
// let b = 3;
// let c = 4;

// if (a<b+c && c<a+b && b<c+a){
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

// "Тооны хүрд" //shine ym olov: ${} тэмдэглэгээг ашиглан хувьсагчдын утгыг мөрөнд оруулах боломжийг олгодог. Template Literals нь backtick (`) тэмдэглэгээгээр хүрээлэгдсэн байдаг.
// let too = 3;
// let hurd = 10;
// let urjver;
//  for (let index = 1; index <= hurd; index++) {
//     // console.log(urjver=too*index);
//     urjver = too * index;
//     console.log(`${too} * ${index} = ${urjver}`);
// }

// "Тооны зэргийн хүрд"
// let too = 3;
// let zereg = 5;
// let hurd;
// for (let index = 1; index <= zereg; index++) {
//     // console.log(hurd=too**index);
//     hurd = too ** index;
//     console.log(`${too} ^ ${index} = ${hurd}`);
// }

// "Илэрхийлэл 1"
// let too = [2, 3, 4];
// let A; 

// for (let i = 0; i < too.length; i++) {
//     A=too[0]*too[1]-too[2];
// }
// console.log(A);

// "Additional problems -- from Teams"
// 1.
// let input = "23453 3"
// let inputArray = input.split(" ");   // ["23453", "3"]
// let ehniiToo = inputArray[0]  // "23453"    =>   [2, 3, 4, 5, 3]
// let tsifr = inputArray[1]; // "3"

// // let ehniiTooniiEhniiTsifr = ehniiToo[0]   // "2"

// let hedenShirheg = 0;
// for (let i= 0; i< ehniiToo.length; i++) {
//    if( ehniiToo[i] == tsifr) hedenShirheg=hedenShirheg+1
// }
// console.log(hedenShirheg);

// 2.
// let NaturalToo = "16 24";
// let TooArray = NaturalToo.split(" "); 
// let too1 = TooArray[0];
// let too2 = TooArray[1];

// let minToo = too1 > too2 ? too2 : too1   // ternary
// let hiyh=1;

// for ( let i = 1; i<minToo; i++ ){
   
//    if ( too1 % i == 0 && too2 % i == 0){
//       if (i > hiyh) {
//          hiyh=i 
//       }
//    }
// }
// console.log(hiyh);

// 4.
// let too= [12321];

// for (let i = 0; i < too.length; i++) {
//    if (i) {
//       ;
//    }
// }
// console.log(14%3, 14/3);

// 6.
// let k = 4;
// let NegShagainiiBuuhBolomj = 4;
// let bolomj;

// for (let i = 1; i <= k; i++) {
//    bolomj = NegShagainiiBuuhBolomj * i;
//    console.log(bolomj);
// }

// 1. Davhriin  hed dahi haalga
// let davharHaalganiiToo = "5 4";
// let HaalganiiToot = 10;

// function name(params) {
    
// }

// function PrimeNumber(n) {
//     for(let i=2; i<=n/2; i++){
//         if(n%i==0) return "No";
//     }
//     return "Yes";
// }
// console.log(PrimeNumber(6));

// 12.11 --------

// let fullName = "Bold Bat"; // B. Bat
// function formatName(name) {
//     let firstName = name.split(" ")[1];
//     let lastName = name.split(" ")[0];

//     let firstChar = lastName[0];
//     return firstChar + ". " + firstName;
// }
// console.log(formatName(fullName));

// bold.sh@gmail.com // Sh. Bold
// let email = "bold.sh@gmail.com";
// function formatName(name) {
//     let lastName = name.split(".")[1];
//     let firstName = name.split(".")[0];
//     let firstChar1 = firstName.slice(0, 1).toUpperCase();
//     let secondChar1 = firstName.slice(1);
//     let firstChar2 = lastName.slice(0, 1).toUpperCase();
//     let secondChar2 = lastName.slice(1, 2);
    
//     return firstChar2 + secondChar2 + ". " + firstChar1 + secondChar1;
//     // console.log(name);
// }
// console.log(formatName(email));






