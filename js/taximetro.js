function chequea(unidades,boton){
	if (unidades.value != ""){
		boton.disabled=false;
	} else {
		boton.disabled=true;
	}
}
function sumaCheck(num){ 
var suma=0;
for(i=1;i<num+1;i++){
if(document.getElementById("check"+i).checked)
suma = suma + parseFloat(document.getElementById("check"+i).value)
}
console.log(suma);
    return(suma);
}
    window.addEventListener("load",function(){
    var resul = document.getElementById("resul");
    var boton = document.getElementById("boton");
    boton.addEventListener("click",function(){
    var unidadesField = document.getElementById("unidades");
    var unidades = parseInt(unidadesField.value);
    var a = parseInt(sumaCheck(5));    
    var valor_uni = 78;    
    var valor =100*(Math.round((a + unidades) * valor_uni/100));
    var minima = (a + 50) * valor_uni;

    
    if(unidades > 0 && unidades <= 50){
    resul.innerHTML=(minima);
    }
    else{
    resul.innerHTML=(valor);
        console.log(a + unidades);
    }                           
});
});