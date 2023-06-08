function calcular (peso, altura){
    var altura=((document.getElementById("altura").value)/100)
    var peso=document.getElementById("peso").value
   

    var imc = (peso / (altura * altura));
    var texto=""
    if (imc <18.5){
        texto="Abaixo do peso"
    } else if (imc <24.9){
        texto="Saúdavel"
    } else if (imc <29.9){
        texto="Acesso de peso"
    } else if (imc >30){
        texto="obeso"
    }
    
    document.getElementById("area-de-texto").innerText=texto
}
