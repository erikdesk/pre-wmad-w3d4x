let mixedArray = ["Dogs", "Cats", 6, "77", 70, "toyota", 9, true, null];

for (let i = 0; i < mixedArray.length; i++) {

    if (typeof mixedArray[i] === "number") {
        console.log(`The item at index ${i} is a number - ${mixedArray[i]}`);
    } else if (typeof mixedArray[i] === "string") {
        console.log(`The item at index ${i} is a string - ${mixedArray[i]}`);
    } else {
        console.log(`---`);
    }

}