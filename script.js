const ruleta = document.querySelector("#ruleta");

ruleta.addEventListener("click",girar);

dinero = 50;

function girar(){
    if (dinero >= 20) {
    	let rand = Math.random()*7200; 
    	sumarPuntos(-20);
        calcular(rand);
    }  
    else {
    	alert("No te queda suficiente Mosca, Truco apreta refresh en la pagina gil =)");
    }
}
function sumarPuntos(puntos){
	dinero += puntos;
    document.querySelector("#dinero").innerHTML = "Tu Mosca: $" + dinero + "USD";
}


function calcular(rand){
    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    ruleta.style.transform = "rotate("+rand+"deg)";
    setTimeout(()=>{
    switch(true){
    	case valor > 0 && valor <= 45:
            alert("Ganaste 500 USD");
            sumarPuntos(500);
    	    break;
    	case valor > 45 && valor <= 90:
    	    alert("Ganaste 25 USD");
    	    sumarPuntos(25);
    	    break;
        case valor > 90 && valor <= 135:
            alert("Ganaste 15 USD");
            sumarPuntos(15);
            break; 
        case valor > 135 && valor <= 180:
            alert("Ganaste 50 USD");
            sumarPuntos(50);
            break;
        case valor > 180 && valor <= 225:
            alert("Ganaste 250 USD");
            sumarPuntos(250);
            break;
        case valor > 225 && valor <= 270:
            alert("No has sumado USD =(");
            break;
        case valor > 270 && valor <= 315:
            alert("has sumado 100 USD");
            sumarPuntos(100);
            break;
        case valor > 315 && valor <= 360:
            alert("Has sumado 10 USD");
            sumarPuntos(10);
            break;
    }},5000);
}