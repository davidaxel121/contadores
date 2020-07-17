function createCountUp(fecha,numero) {

  var countDownDate = new Date(fecha).getTime();

  var interval = setInterval(function(){

    var now = new Date().getTime();
  
    var distance = now - countDownDate;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("count-"+numero).innerHTML = days + " dias " + hours + " horas "
    + minutes + " minutos " + seconds + " segundos ";
  },1000)
}

function createCountDown(fecha,numero,mensaje) {

  var countDownDate = new Date(fecha).getTime();
  

  var interval = setInterval(function(){

    var now = new Date().getTime();
  
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("count-"+numero).innerHTML = days + " dias " + hours + " horas "
    + minutes + " minutos " + seconds + " segundos ";
  
     //If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(interval);
        document.getElementById("count-"+numero).innerHTML = mensaje;
      }
  },1000)
}

createCountUp("Jul 12, 2020 10:00:00",1);
createCountUp("Jun 15, 2020 09:00:00",2);
createCountDown("Dec 15, 2020 09:00:00",3,"Ya acabo la residencia :D");
