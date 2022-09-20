// let userName = prompt("Подскажите, как Вас зовут?");
// // alert(`Добрый день, ${userName}!`);
// printHello(userName);

let userName = prompt("Подскажите, как Вас зовут?");
let quest = confirm("Это правда?")
if (quest) {
    printHello(userName);
}
else {
    window.location.reload();
}

function printHello(userName) {
    return alert(`Добрый день, ${userName}!`);
}
