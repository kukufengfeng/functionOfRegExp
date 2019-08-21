var str="1 plus 2 equal 3"

console.log(str.match("plus"));  //["plus", index: 2, input: "1 plus 2 equal 3", groups: undefined]

console.log(str.match(/\d+/))  //["plus", index: 2, input: "1 plus 2 equal 3", groups: undefined]
console.log(str.match(/\d+/g))  //["1", "2", "3"]
