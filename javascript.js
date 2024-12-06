// 12.03  --- Conditions ---

// "Гурвалжин";
// let a = 4, b = 3, c = 5
// console.log(a+b+c)

// "Хоёр тооны нийлбэр";
// let d = 12, e =23
// console.log(d+e)

// "Куб";
// let f = 5
// console.log(f*f*f, f*f*6)

// "Тэгш өнцөгт";
// let g = 6, h=4
// console.log(g*h, g*2+h*2)

// "Функц 1";
// let x= 1
// console.log(y=3*x-5)

// "Функц 2";
// let j= -2
// console.log(k=4*j*j-3*j+5)

// "Сүүлийн цифр";
// let l= 476
// console.log(l%10)

// "Аравтын орны цифр";
// let p= 423
// let i= p%100-3
// console.log(i/10)

// "2 оронтой тоо";
// let w= 27
// let z= Math.floor(w/10)
// let m= w%10
// console.log(z*m)

// "3 оронтой тоо";
// let ons= 123
// let o= Math.floor(ons/100)
// let n= (ons%100-3)/10
// let s= ons%10
// console.log(o+n+s)

// "Минут секунд";
// let sec= 200
// console.log(Math.floor(sec/60), sec%60 )

// "Цаг минут секунд";
// let mmm= 3612
// console.log(Math.floor(mmm/60/60), mmm%60-12, mmm%60)

// "Минут секунд -> секунд";
// let min2= 3
// let sec2= 4
// console.log(min2*60+sec2)

// "Цаг минут секунд -> секунд";
// // let hon= 1; 2; 3
// // console.log(hon*24+hon*60+hon)

// "Хоног цаг";
// let tsag= 44
// console.log(Math.floor(tsag/24), tsag%24)

// "Хоног цаг -> цаг";
// let days= 2
// let hours= 5
// console.log(days*24+hours)

// "Жил сар";
// let sar= 27
// console.log(Math.floor(sar/12), sar%12)

// "Жил сар -> сар";
// let year= 2
// let month= 7

// let test = 2^5
// console.log(test);

// console.log(2*12+7)

// 12.04 --- Array ---

// test
// let age =17
// if (age >= 18) {
//     console.log("tanii nas", age);
//     console.log("ta nasand hursen baina.");
// } else {
//     console.log("ta huuhdeere baina.");
// }

// "Хоёр тооны их";
// let too1= 16;
// let too2= 20;

// if (too1>too2) {
//     console.log(too1, "ih too")
// } else {
//     console.log(too2, "ih too")

// }

// "Хоёр тооны бага";
// let too1= 9;
// let too2= 4;

// if (too1>too2) {
//     console.log(too2, 'baga too')
// } else {
//     console.log(too1, 'baga too')
// }

// "3 тооны их";
// let too1= 1;
// let too2= 3;
// let too3= 9;

// if (too1>too2>too3) {
//      console.log(too1, "ih too")
// } else if (too1<too2>too3) {
//     console.log(too2, "ih too")
// } else {
//     console.log(too3, "ih too")
// }

// "4 тооны бага";
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
// let too1 = 85;
// let too2 = 75;
// let too3 = 96;
// let too4 = 69;

// if (too1>80) {
//     if (too2>80)
//         console.log(too1+too2);
//     if (too3>80)
//         console.log(too1+too3);
//     if (too4>80)
//         console.log(too1+too4);
// }
// if (too2>80) {
//     if (too3>80)
//         console.log(too2+too3);
//     if (too4>80)
//         console.log(too2+too4);
// }

// if (too3>80) {
//     if (too4>80)
//         console.log(too3+too4);
// }

// "Үржвэр 5";
// let too1= 3;
// let too2= 6;
// let too3= 2;
// let too4= 4;

// if (too1<5){
//     if (too2<5)
//         console.log(too1*too2);
//     if (too3<5)
//         console.log(too1*too3);
//     if (too4<5)
//         console.log(too1*too4);
// }
// if (too2<5) {
//     if (too3< 5)
//         console.log(too2*too3);
//     if (too4<5)
//         console.log(too2*too4);
// }
// if (too3<5) {
//     if (too4<5)
//         console.log(too3*too4);
// }

// "Тэнцүү 5";
// let too1 = 1;
// let too2 = 5;
// let too3 = 5;
// let TavtaiTesntsuuToo;

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

// "10-аас их";
// let too = 11;
// if(too>10){
//     console.log("yes");
// }
// else{
//     console.log("no");
// }

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

// "IOI n удаа";
// let n=6;
// for(let i = 0; i<n; i++){
//     console.log('ioi');
// }

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
let NaturalToo = "16 24";
let TooArray = NaturalToo.split(" "); 
let too1 = TooArray[0];
let too2 = TooArray[1];

//"// let HIYH;
// let x;
// let y;

// for (let  i = 1;  i <= too1;  i++) {
//    x = too1/i;
//    if (x % 1 == 0){
//       console.log(x);
//    }
// }
// for (let  i = 1;  i <= too2;  i++) {
//    y = too2/i;
//    if (y % 1 == 0) {
//       console.log(y);
//    }
// }
// for (let i= 0; i< x.length; i++) {
//    for (let i= 0; i< y.length; i++) {
//       if( x[i] == y[i]){
//          HIYH= x[i] * y[i]
//          console.log(HIYH);
//       }
//    }
// }"

let minToo = too1 > too2 ? too2 : too1   // ternary
let hiyh=1;

for ( let i = 1; i<minToo; i++ ){
   
   if ( too1 % i == 0 && too2 % i == 0){
      if (i > hiyh) {
         hiyh=i 
      }
   }
}
console.log(hiyh);

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







