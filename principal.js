function handleChange(unidades) {

    if (unidades.value === "radio-metric"){
        document.getElementById("radio-metric-bloco").style.display= "block";
        document.getElementById("radio-imperal-bloco").style.display="none";
    }
    else{
        document.getElementById("radio-metric-bloco").style.display= "none";
        document.getElementById("radio-imperal-bloco").style.display="block";  
    }

    }

 
function calcular(){

    if (document.getElementById("radio-imperial").checked){
        var altura = (document.getElementById("alturaft").value);
        var peso = document.getElementById("pesost").value;
      

        altura = altura * 0.3048;
        peso = peso * 6.3029;

        console.log(altura);
        console.log(peso);                                  
    }                                           
    else{
        var altura = (document.getElementById("altura").value/100);
        console.log(altura);

        var peso = document.getElementById("peso").value;
        console.log(peso);
    }

    var imc = (peso / (altura * altura));
    var texto=`Seu IMC é...  ${imc}`;
        if (imc <18.5){
            texto+="Abaixo do peso"
        } else if (imc <24.9){
            texto+="Saúdavel"
        } else if (imc <29.9){
            texto+="Acesso de peso"
        } else if (imc >30){
            texto+="obeso"
        }


        document.getElementById("area-de-texto").innerText=texto;

        //document.getElementById("area-de-texto").innerText=`Seu IMC é de <br> ${imc}</span><br>${texto}`;
   



}
