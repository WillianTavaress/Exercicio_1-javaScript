let etanol, gasolina;

function calcular(){
   etanol = parseFloat(flex.flex1.value.replace(",","."));
   gasolina = parseFloat(flex.flex2.value.replace(",","."));

   if( etanol < 0.7 * gasolina){
        document.getElementById("status").src = "img/etanol.png";
   }else{
    document.getElementById("status").src = "img/gasolina.png";
   }
}
function resetar(){
    document.getElementById("status").src = "img/neutro.png";
} 