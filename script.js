function createCountUp(fecha, numero) {

	var countDownDate = new Date(fecha).getTime();

	var interval = setInterval(function () {

		var now = new Date().getTime();

		var distance = now - countDownDate;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("count-" + numero).innerHTML = days + " dias " + hours + " horas "
			+ minutes + " minutos " + seconds + " segundos ";
	}, 1000)
}

function createCountDown(fecha, numero, mensaje) {

	var countDownDate = new Date(fecha).getTime();

	var interval = setInterval(function () {

		var now = new Date().getTime();

		var distance = countDownDate - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("count-" + numero).innerHTML = days + " dias " + hours + " horas "
			+ minutes + " minutos " + seconds + " segundos ";

		//If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(interval);
			document.getElementById("count-" + numero).innerHTML = mensaje;
		}
	}, 1000)
}

function getPrimeraQuincena() {

	var countDownDate = new Date();

	var interval = setInterval(function () {

		var now = new Date().getTime();

		var distance = countDownDate - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("count-" + numero).innerHTML = days + " dias " + hours + " horas "
			+ minutes + " minutos " + seconds + " segundos ";

		//If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(interval);
			document.getElementById("count-" + numero).innerHTML = mensaje;
		}
	}, 1000)
};

function getSegundaQuincena() {

	var countDownDate = new Date(fecha).getTime();

	var interval = setInterval(function () {

		var now = new Date().getTime();

		var distance = countDownDate - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("count-" + numero).innerHTML = days + " dias " + hours + " horas "
			+ minutes + " minutos " + seconds + " segundos ";

		//If the count down is finished, write some text
		if (distance < 0) {
			clearInterval(interval);
			document.getElementById("count-" + numero).innerHTML = mensaje;
		}
	}, 1000)

};

// Contadores personales
createCountUp("Jul 12, 2020 10:00:00", 1);
createCountDown("Jun 6, 2021 10:00:00", 2, "Ya acabo la suscripcion");
createCountDown("Oct 5, 2020 00:00:00", 9, "Ya puedes salir");

// Contadores trabajo
createCountUp("Jun 15, 2020 09:00:00", 3);
createCountDown("Dec 15, 2020 09:00:00", 4, "Ya acabo la residencia :D");

//Contadores TecMM
createCountDown("Oct 9, 2020 23:59:59", 5, "Ya debiste entregar el primer informe");
createCountDown("Nov 20, 2020 23:59:59", 6, "Ya debiste acabar el segundo informe");
createCountDown("Dec 7, 2020 23:59:59", 7, "Ya deberia estar listo para revisar");
createCountDown("Jan 13, 2021 23:59:59", 8, "Realmente deberia estar acabado aqui o repruebas");

// 1 informe 9oct
// 2 informe 20nov
//  Informe final 13 ene sin prologa