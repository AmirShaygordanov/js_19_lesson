/* Задание 1
let a = prompt("Введите число a");
let message = (a == 10) ? true:false;
alert(message);
*/ 

/*Задание 2
let min = prompt("Введите число от 0 до 59");
let message = (min < 0 ) ? 'Вы ввели число вне этого диапозона!':
    (min <= 14) ? 'Это совпадает с первой четвертью часа':
    (min <= 29) ? 'Это совпадает с второй четвертью часа':
    (min <= 44) ? 'Это совпадает с третьей четвертью часа':
    (min <= 59) ? 'Это совпадает с третьей четвертью часа':
    'Вы ввели число вне этого диапозона!';
alert(message);
*/

/*Второе задание(1 решение)
let lang = confirm("Чтобы оставить русский язык нажмите 'да', для смены на английсский нажмите 'нет'");
if (lang == true){
    let arr = ("пн, вт, ср , чт, пт, сб, вс");
    alert(arr);
} else {
    let arr = ("Mn, ts, Wd, Th, fr, St, Sn);
    alert(arr);
}
*/

/* 2 решение
let lang = prompt("Выберите язык ru or eng")
switch (lang) {
	case 'ru':
		var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	break;
	case 'eng':
		arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
	break;
}
alert(arr);
*/

/* 3 решение
let lang = prompt("Выберите язык ru or eng")
var arr = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'eng':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
alert(arr[lang]);

/* Третье задание
let a = prompt("Введите число");
if (a == 0){
    alert(true);
} else {
    alert(false)
}
*/

/*
let a = prompt("Введите число");
if (a > 0){
    alert(true);
} else {
    alert(false)
}
*/

/*
let a = prompt("Введите число");
if (a < 0){
    alert(true);
} else {
    alert(false)
}
*/

/*
let a = prompt("Введите число");
if (a >= 0){
    alert(true);
} else {
    alert(false)
}
*/

/*
let a = prompt("Введите число");
if (a <= 0){
    alert(true);
} else {
    alert(false)
}
*/

/*
let a = prompt("Введите число");
if (a != 0){
    alert(true);
} else {
    alert(false)
}
*/

/*
let a = prompt("Введите слово test");
if (a === test){
    alert(true);
} else {
    alert(false)
}
*/

/*
let a = prompt("Введите число")

    if (a > 0 && a < 5){
        alert(true);
    } else {
        alert(false)
    }
*/

/*
let a =+prompt("Введите переменную а")
if (a == 0 || a == 2){
    alert( a + 7 );
} else {
    alert(a / 10 );
}
*/
 
/*
let a =+prompt("Введите переменную а")
let b =+prompt("ВВедите переменную b");
if (a <=1 && b >=3){
    alert( a + b );
} else {
    alert(a - b);
}
*/

/*
let a =+prompt("Введите переменную а")
let b =+prompt("ВВедите переменную b");
if (a > 2 && a < 11 || b >=6 && b < 14){
    alert( "Верно" );
} else {
    alert("Неверно");
}
*/

/*
let season = prompt("Введите цифру от  1 до  4")
switch (season * 1) {
	case 1:
		alert("Зима");
	break;
	case 2:
		alert("Весна");
	break;
    case 3:
        alert("Лето");
        break;
    case 4:
        alert("Осень");
        break;
    default:
        alert("Не подходящее число");
}
*/


/*
let day = prompt("Введите цифру от 1 до 31");
let message = (day > 0 && day < 10) ? 'Вы в 1 декаде месяца':
( day < 11) ? 'Вы в 2 декаде месяца':
( day > 21 && day <= 31) ? 'Вы в 3 декаде месяца':
'Вы вели число вне деапазона';
alert(message);
*/


/*
let month = prompt("Введите цифру от 1 до 12");
let message = (month >= 1 && month <= 3 || month == 12) ? 'Зима':
(month <=6 ) ? 'Весна':
(month <=9 ) ? 'Лето':
(month <=11 ) ? 'Осень':
'Вы вели число вне деапазона';
alert(message);
*/

/*
str = 'abcde';
result = (str[0] === 'a') ? 'Да' : 'Нет';
alert(result);
*/

/*

str_num = '12345';
result = (str_num[0] === '1' || str_num ==='2' || str_num === '3') ? 'Да' : 'Нет';
alert(result);
*/

/*
str_sum = prompt("Введите трёхзначное число");
sum = (str_sum[0] + str_sum[1] + str_sum[2]);
alert(sum);
*/
