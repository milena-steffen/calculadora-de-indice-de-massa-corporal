function handleChange(unidades) {
    if (unidades.value === "radio-metric") {
      document.getElementById("radio-metric-bloco").style.display = "block";
      document.getElementById("radio-imperal-bloco").style.display = "none";
    } else {
      document.getElementById("radio-metric-bloco").style.display = "none";
      document.getElementById("radio-imperal-bloco").style.display = "block";
    }
  }
  
  function calcular() {
    if (document.getElementById("radio-imperial").checked) {
      var alturaft = (document.getElementById("alturaft").value);
      var alturain = (document.getElementById("alturain").value);
      var pesost = (document.getElementById("pesost").value);
      var pesolbs = (document.getElementById("pesolbs").value);
  
      var altura = converterparacm(alturaft, alturain);
      var peso = converterparakg(pesost, pesolbs);
  
      var imc = calcularimc(peso, altura); exibirresultado(imc);

    } else {
      var altura = (document.getElementById("altura").value);
      var peso = (document.getElementById("peso").value);
  
      var imc = calcularimc(peso, altura); exibirresultado(imc);
    }
  }
  
  function converterparacm(alturaft, alturain) {
    var altura = alturaft * 30.48 + alturain * 2.54;
    return altura;
  }

  
  function converterparakg(pesost, pesolbs) {
    var peso = pesost * 6.35029 + pesolbs * 0.453592;
    return peso;
  }
  
  function calcularimc(peso, altura) {
    var imc = peso / ((altura / 100) ** 2);
    return imc;
  }
  
  function exibirresultado(imc) {
    var classificacao = classificarimc(imc);
    var resultado = document.getElementById("area-de-texto");
    resultado.innerHTML = `Seu IMC é...&#13;&#10; ${imc.toFixed(2)}&#13;&#10;${classificacao}`;
  }

  function classificarimc(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 25) {
      return "Saudável";
    } else if (imc < 30) {
      return "Excesso de peso";
    } else {
      return "Obeso";
    }

  }
  


