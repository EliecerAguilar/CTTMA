/*var cajaXD= document.getElementById("caja");
cajaXD.addEventListener("click",toggleOpacity,False);

function toggleOpacity(e){
  cajaXD.style.opacity=(cajaXD.style.opacity==0)? 1:0;

  }
*/

$('.message a').click(function redit(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "show");
}
);