var str = "Visit W3School";
var patt = new RegExp("W3School","g");

var patt2 = new RegExp("W3School");

//var result;
/*while((result = patt.exec(str)) != null) {
    document.write(result);

    document.write("<br />");
    document.write(patt.lastIndex);
}*/


console.log(patt.exec(str)); //["W3School", index: 6, input: "Visit W3School"， groups: undefined, lenth: 1]
console.log(patt.lastIndex);  //14

patt.lastIndex = 0;
console.log(patt.exec("xxxxW3School")); //["W3School", index: 6, input: "Visit W3School"， groups: undefined, lenth: 1]
console.log(patt.lastIndex);  //12


//patt.lastIndex = 0;   //重要事项：如果在一个字符串中完成了一次全局模式匹配之后要开始检索新的字符串，就必须手动地把 lastIndex 属性重置为 0。
console.log(patt.exec("bbbbbbW3School")); //null
console.log(patt.lastIndex);  //0





console.log(patt2.exec(str)); //["W3School", index: 6, input: "Visit W3School"， groups: undefined, lenth: 1]
console.log(patt2.lastIndex);  //0

//利用exec()循环
let a = {
    reg: '/\d/g',

    valueOf () {
        return this.reg.exec(123)[0]
    }
}

console.log(a == 1 && a == 2 && a == 3); //true;






