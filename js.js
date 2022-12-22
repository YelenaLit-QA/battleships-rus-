var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Привет, это мини-игра Морской бой! Представь, что на поле из семи ячеек ••••••• (от 0 до 6) спрятан корабль. Задача - потопить его за как можно меньшее кол-во выстрелов. Огонь! (введи число от 0 до 6):");
	if (guess < 0 || guess > 6) {
		alert("Введи число от 0 до 6");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Попал!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Корабль тонет!");
			}
		} else {
			alert("Промах");
		}
	}
}

var stats = "Победа! Тебе удалось потопить корабль за " + guesses + " попыток. Точность - " + (3 / guesses);
alert(stats);
