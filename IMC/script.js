window.onload = iniciar;

function iniciar(){
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener ("click", clickBtnCalcular);

}

function clickBtnCalcular (){
    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;
    
    var txtAltura = document.getElementById("txtAltura");
    var altura = txtAltura.value;
       

    if (altura > 3) {
        altura = altura / 100;
    }

    var imc = (peso / (altura * altura));
    alert("Su IMC es: " + imc.toFixed(2));
}