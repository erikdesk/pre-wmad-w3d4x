let animals = ["Penguins", "Dogs", "Parakeet", "Giraffe"];

console.log(animals);
console.log(animals.length);

for (let i = 0; i < animals.length; i++) {
    let capitalAnimal = animals[i].toUpperCase();
    console.log(animals[i], capitalAnimal);
}