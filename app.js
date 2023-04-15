const horas = document.getElementById("hora");
const minutos = document.getElementById("minuto");
const segundos = document.getElementById("segundo");

const relogio = setInterval(function time(){

    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if(hr < 10){
        hr = "0" + hr;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(sec < 10){
        sec = "0" + sec;
    }




//https://wa.me/5545984127626/?text=Ol%C3%A1%20vi%20sua%20p%C3%A1gina%20e%20gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AA.


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;


})