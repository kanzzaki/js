if (2 * 4 == 8) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let num;
(num == 50) ? console.log("Верно") : console.log("Неверно");

switch (num) {
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Много");
        break;
    case 50:
        console.log("Верно");
        break;
    default:
        console.log("Что-то не так");
        break;
}