const personValue = {
    personAge : prompt("Введіть ваш рік народження"),
    personCity : prompt("Введіть місто вашего проживання"),
    personSport : prompt("Введіть ваш улюблений вид спорту")
};

const capitalCountry = {
    'Київ' : "України" ,
    'Вашингтон' : "США" ,
    'Лондон' : "Великобританії"
};

const sportChampion = {
    'бокс' : "Олександром Усиком",
    'футбол' : "Ліонелем Мессі",
    'шахбокс' : "Акназаром Кенжебаєвом"
};

const personMessage = {};

if (personValue.personAge === null || personValue.personAge === undefined){
    personMessage.ageMessage =  "Шкода, що Ви не захотіли ввести свій вік";
} else {
    personMessage.ageMessage = `ваш вік ${personValue.personAge}`;
}

if (personValue.personCity === null || personValue.personCity === undefined){
    personMessage.cityMessage = "Шкода, що Ви не захотіли ввести своє місто";
} else if (capitalCountry[personValue.personCity]){
    personMessage.cityMessage = `Ти живеш у столиці ${capitalCountry[personValue.personCity]}`;
}
else {
    personMessage.cityMessage = `Ти живеш у місці ${personValue.personCity}`;
}

if (personValue.personSport === null || personValue.personSport  === undefined){
    personMessage.sportMessage = "Шкода, що ви не захотіли ввести свій улюблений вид спорту";
} else if (sportChampion[personValue.personSport]){
    personMessage.sportMessage = `Круто! Хочеш стати ${sportChampion[personValue.personSport]} ?`;
}

let result = '';
let keysCount = Object.keys(personMessage).length;
let count = 0;
/*хотел применнить именно этот цикл поэтому выбрал такую реализацию где к последнему значению из обьекта не добавиться перенос строки */
for (let key in personMessage){
    result += personMessage[key];
    if (count < keysCount - 1){
        result +="\n";
        count++;
    }
}

alert (result);
