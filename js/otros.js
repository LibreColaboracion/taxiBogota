    window.addEventListener("load",function(){
    var resul = document.getElementById("resul");
    var boton = document.getElementById("boton");
    boton.addEventListener("click",function(){
    var horasField = document.getElementById("horas");
    var horas = parseInt(horasField.value);    
    var valor_uni = 78;    
    var horas_cant = 225 * valor_uni;
    var valor_h = parseInt(horas * horas_cant);
                console.log(valor_h);
                resul.innerHTML=(valor_h);         
});
});