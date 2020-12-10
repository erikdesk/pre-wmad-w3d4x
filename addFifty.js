let numbers = [45, 34, 6, 34, 52, 55, 4];

for (let i = 0; i < numbers.length; i++) {

    let beforeAdd = numbers[i];
    numbers[i] = numbers[i] + 50;
    let afterAdd = numbers[i];

    console.log(`the number ${beforeAdd} + 50 = ${afterAdd + 0}`);

}