// part 1 : coding questions

// #region question 1

// var str = "123"
// var num = Number(str)
// console.log(num + 7);

//#endregion

//#region question 2

// //solution 1 :
// var input = "0"; //cuz its string not num
// if (!input) {
//   console.log("invalid");
// } else {
//   console.log(`your input (${input}) is truthy`);
// }
// //learned how to write the variable in the output from ai

// -----------------------------------------------------------------

// //soultion 2 :
// var input = 3;
// FalsyItems = ["", 0, false, null, NaN, undefined];
// for (var i = 0; i < FalsyItems.length; i++) {
//   if (input == FalsyItems[i]) {
//     console.log("invalid");
//     break;
//   } else {
//     console.log(`your input (${input}) is truthy`);
//     break;
//   }
// }

//#endregion

//#region question 3

// for (var i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

//#endregion

//#region question 4

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var result = arr.filter(function (arr) {
//   return arr % 2 == 0;
// });
// console.log(result);

//#endregion

//#region question 5

// arr1=[1,2,3,4]
// arr2=[5,6,7]
// var merg = (arr1,arr2)=> {
//     return [...arr1,...arr2]
// }
// merged = merg(arr1, arr2);
// console.log(merged);

//#endregion

//#region question 6

// solution 1
// function weekDay(day) {
//   switch (day) {
//     case 1:
//       return "Sunday";
//     case 2:
//       return "Monday";
//     case 3:
//       return "Tuesday";
//     case 4:
//       return "Wednesday";
//     case 5:
//       return "Thursday";
//     case 6:
//       return "Friday";
//     case 7:
//       return "Satrday";
//     default:
//       return "Invalid day";
//   }
// }
// console.log(weekDay(6));

//------------------------------------------------

// // solution 2
// var day = 3;
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saterday");
//     break;
//   default:
//     console.log("Invalid day");
// }

//#endregion

//#region question 7

// var arr = ["ab", "abc" , "abcd"]
// var result = arr.map((arr)=>{
//     return arr.length
// })
// console.log(result);

//#endregion

//#region question 8

// var divisableCheck = (num) => {
//   if (num % 3 == 0 && num % 5 == 0) {
//     return("Divisible by both");
//   } else {
//     return("Not divisible by both");
//   }
// };

// console.log(divisableCheck(21));

//#endregion

//#region question 9

// var squareNum = (num) => (num**2)

// console.log(squareNum(5));

//#endregion

//#region question 10

// var extractSentence = (userInfo) => {
//   const { name, major, majorExperience } = userInfo;
//   return `${name} is working as ${major} for ${majorExperience}`;
// };

// info = {
//   name: "Koong",
//   major: "Software_Engineer",
//   majorExperience: 10,
// };
// console.log(extractSentence(info));

//#endregion

//#region question 11

// var sum = (num1 = 1, num2 = 2, num3 = 3, num4 = 4) => {
//   return num1 + num2 + num3 + num4;
// };
// console.log(sum());
// console.log(sum(6,7));

//#endregion

//#region question 12

// function msg() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Success");
//     }, 3000);
//   });
// }
// msg().then((value)=>{
//     console.log(value);

// })

//#endregion

//#region question 13

// var maxArr = (arr) => {
//   var max = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(maxArr([1, 3, 7, 2, 4]));

//#endregion

//#region question 14

// function objKeys(obj) {
//   return Object.keys(obj);
// }

// var user = {
//   name: "John",
//   age: 30,
// };
// console.log(objKeys(user));

//#endregion

//#region question 15

// function splitStr(str) {
//   return str.split(" ");
// }

// console.log(splitStr("Nmaed Koong ELbalad"));

//#endregion

