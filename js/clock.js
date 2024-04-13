function topReloj(){
    let fecha = new Date();
    let horas = fecha.getHours(); // 0 - 23
    let minutos = fecha.getMinutes(); // 0 - 59
    let segundos = fecha.getSeconds(); // 0 - 59
    let mitad = "AM";
    
    if(horas == 0){
        horas = 12;
    }
    
    if(horas > 12){
        horas = horas - 12;
        mitad = "PM";
    }
    
    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;
    
    let tiempoFormateado = horas + ":" + minutos + ":" + segundos + " " + mitad;
    document.getElementById("top-clock").innerText = tiempoFormateado;
    document.getElementById("top-clock").textContent = tiempoFormateado;
    
    setTimeout(topReloj, 1000);
    
}

topReloj();