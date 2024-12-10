// 12.03  ---

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
//    let lastDigit = (num % 100 -num % 10)/10
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

// "Минут секунд"; ??? ------------------------------------
// function Minut(params) {
//     let MinSec = (Math.floor(arr/60), arr%60)
//     return MinSec;
// }
// let hariu = Minut(200);
// console.log(hariu);

// "Цаг минут секунд"; ???
// let mmm= 3612
// console.log(Math.floor(mmm/60/60), mmm%60-12, mmm%60)

// "Минут секунд -> секунд"; ???
// let min2= 3
// let sec2= 4
// console.log(min2*60+sec2)

// "Цаг минут секунд -> секунд"; ???
// // let hon= 1; 2; 3
// // console.log(hon*24+hon*60+hon)

// "Хоног цаг";
// let tsag= 44
// console.log(Math.floor(tsag/24), tsag%24)

// "Хоног цаг -> цаг"; ???
// let days= 2
// let hours= 5
// console.log(days*24+hours)

// "Жил сар";
// let sar= 27
// console.log(Math.floor(sar/12), sar%12)

// "Жил сар -> сар"; ???
// let year= 2
// let month= 7

// let test = 2^5
// console.log(test);

// console.log(2*12+7)

// 12.04 --- Array ---

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

// "4 тооны бага"; ???
// let too1= 40;
// let too2= 10;
// let too3= 46;
// let too4= 50;

// if (too1<too2) {
//     if (too1<too3);
//     if (too1<too4)
//         console.log(too1, 'baga too');
// } if (too1>too2) {
//     if (too2<too3);
//     if (too2<too4)
//         console.log(too2, 'baga too');
// } if (too2>too3) {
//     if (too1>too3);
//     if (too3<too4)
//         console.log(too3, 'baga too');
// } if (too2<too3) {
//     if (too1>too4);
//     if (too3>too4)
//         console.log(too4, 'baga too');
// }

// "Нийлбэр 80";
// function niilber(too1, too2, too3, too4){
//     if (too1>80) {
//         if (too2>80)
//             console.log(too1+too2);
//         if (too3>80)
//             console.log(too1+too3);
//         if (too4>80)
//             console.log(too1+too4);
//     }
//     if (too2>80) {
//         if (too3>80)
//             console.log(too2+too3);
//         if (too4>80)
//             console.log(too2+too4);
//     }
//     if (too3>80) {
//         if (too4>80)
//             console.log(too3+too4);
//     }
// }
// let hariu = niilber(85, 75, 96,69);

// "Үржвэр 5" ???

// function urjver(too1, too2, too3, too4) {
//     if (too1<5){
//         if (too2<5)
//             console.log(too1*too2);
//         if (too3<5)
//             console.log(too1*too3);
//         if (too4<5)
//             console.log(too1*too4);
//     }
//     if (too2<5) {
//         if (too3< 5)
//             console.log(too2*too3);
//             console.log(too2*too4);
//     if (too3<5) {
//         if (too4<5)
//             console.log(too3*too4);
//     }
//    }
// }
// let hariu = urjver(3, 6, 2, 4)

// "Тэнцүү 5";
// let too1 = 1;
// let too2 = 5;
// let too3 = 5;
// let TavtaiTesntsuuToo;

// function TavtaiTesntsuuToo(too1, too2, too3) {
// if(too1==5){
//     if(too2==5){
//         if(too3==5){
//             TavtaiTesntsuuToo='3'
//         }
//         if(too3!=5){
//            TavtaiTesntsuuToo='2'
//         }
//     }
//     if(too2!=5){
//         if(too3==5){
//             TavtaiTesntsuuToo='2'
//         }
//         if(too3!=5){
//             TavtaiTesntsuuToo='1'
//         }
//     }
// }
// else if(too1!=5){
//     if(too2==5){
//         if(too3==5){
//             TavtaiTesntsuuToo='2'
//         }
//         if(too3!=5){
//            TavtaiTesntsuuToo='1'
//         }
//     }
//     if(too2!=5){
//         if(too3==5){
//             TavtaiTesntsuuToo='1'
//         }
//         if(too3!=5){
//             TavtaiTesntsuuToo='0'
//         }
//     }
// }
// console.log(TavtaiTesntsuuToo);    
// }
// let hariu = TavtaiTesntsuuToo(1, 5, 5)

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
// function hevleh(params) {
//     let n = 6;
//     for(let i = 0; i<n; i++){
//     } 
// }
// let hariu = hevleh(ioi)
// console.log(hariu);


// "Эхний n тооны нийлбэр";
// let n= 9;
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
// let dun=89;

// if (dun>89) {
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
// let c = 40;

// if (a<b+c || c<a+b || b<c+a){
//     console.log("Yes");
// }
// else {
//     console.log("No");
// }

// "Тооны хүрд"
// let too = 9;
// let hurd = 10;
// let urjver;
//  for (let index = 1; index <= hurd; index++) {
//     console.log(urjver=too*index);
//  }

// "Тооны зэргийн хүрд"
// let too = 3;
// let hurd = 5;
// let urjver;
//  for (let index = 1; index <= hurd; index++) {
//     console.log(urjver=too**index);
//  }

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




