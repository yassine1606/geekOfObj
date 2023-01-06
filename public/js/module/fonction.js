export function random() {
    let array = [7, 9, 11];
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomValue = array[randomIndex];
    console.log(randomValue);
}
