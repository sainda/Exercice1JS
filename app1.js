let sum = {
    num1: 5,
    num2: 3,
    calculateSum: function() {
        return this.num1 + this.num2;
    }
};

let initial_sum = sum.calculateSum();
console.log("initial sum: "+ initial_sum);

sum.num2 = 6;
let updated_sum = sum.calculateSum();
console.log("updated sum: "+ updated_sum);

sum.num3 = 20;

console.log("num3: ", sum.num3);