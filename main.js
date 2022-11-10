// let list = [10, 20, "hello", true, NaN];
// list.unshift(100);
// list.pop();
// list.shift();
// list[2] = "Salom";
// let obj = {
// name: "Kuchukcha Oybek",
// age: 21,
// gender: "male",
// };
// obj.name = "shuhrat";
// obj.age = 22;
// obj.nationality = "uzbek";
// delete obj.name;


// console.log(obj);

// let a = prompt("biror bir son kiriting:");

// if (a > 0 && a < 10) {
//     console.log(a, " son[0:10]");
// } else if (a >= 10 && a <= 100) {
//     console.log(a, " son[10:100]");
// } else {
//     console.log(a, "- bu son 1000 dan katta");
// // }
// let list = [4, 613, 6549, 3265];
// for (let i = 0; i < list.length; i = i + 1) {
//     if (list[i] % 2 == 1) {
//         console.log(list[i], "- toq son");
//     } else {
//         console.log(list[i], "-juft son");
//     }

// }
// 1,2,3-misol
// let a = prompt("son kirit:")
// if (a > 0) {
//     a++;
//     console.log(a);
// } else if (a < 0) {
//     a = a - 2;
//     console.log(a);
// } else {
//     console.log("10");
// }

//4-misol
//  let a = 79;
// b = 45;
// c = 32;
// if (a > b) {
//     console.log(a);
// } else if (c > b) {
//     console.log(c);
// } else {
//     console.log(b)
// }
// 5-misol
let a = prompt("Sonni kiriting:");
if (a > 0) {
    if (a % 2 == 1) {
        console.log("Musbat toq son");
    } else { console.log("Musbat juft son"); }
} else if (a < 0) {
    if (a % 2 == 0) {
        console.log("Manfiy juft son");
    } else { console.log("Manfiy toq son"); }
} else if (a == 0) {
    console.log("Son nolga teng");
}
// let a=prompt("Son kiriting:");
// if(a>0 && a%2==1){
//     console.log("Musbat toq son");
//     // else{
//     //     console.log("Musbat juft son");
//     // }
// }else if(a<0 && a%2==0){
//     console.log("Manfiy juft son");
//     // else{
//     //     console.log("Manfiy toq son");
//     // }
// } else if(a==0){
//     console.log("Son nolga teng")
// }