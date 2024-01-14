/*let nombre = prompt ("ingresa tu nombre guacho")

if (nombre == "matias"){
  alert ("bienvenido matias")
}else if (nombre == "marcos"){
  alert ("bienvenido " + nombre)
}else{
  alert ("vos no sos matias")
}
*/



/*let nombre = prompt("Ingresa tu Nombre");
let apellido = prompt("Ingresa tu apellido");

if( (nombre !="") && (apellido !="") ) {
    alert ("Nombre: " + nombre + "\nApellido: " + apellido);
}else {
  alert("Error: Hiciste todo mal loco");
}*/

/*alert("vendo algo escucho ofertas")

let ofertaBase = 2000
let ofertadelusuario = prompt ("ingresa tu oferta")

if(ofertadelusuario >= ofertaBase){
  alert("es tuyo")
}else if(ofertadelusuario < ofertaBase && ofertadelusuario < 1500){
  alert("estirate un poco mas")
} else if(ofertadelusuario < ofertaBase && ofertadelusuario > 1500){
  alert("ya casi, un poco mas")
}
else{
  alert("tu oferta no gano")
}*/





let intentos = 3
let identificar = true

do{
  let usuario = prompt ("ingresa tu usuario, (solo hay " + intentos + " intentos)")
    
  if (usuario==="" || usuario === null){
    break 
  }
      
  if(usuario === "Gil Matias" && intentos >0){
      alert("Bienvenido: " + usuario)
      identificar = false
  }else{
      alert ("no se reconoce el usuario: " + usuario)
      intentos--
      if( intentos == 0){
        alert("superaste los 3 intentos")
        break
      }
  }
}
while(identificar)


/** 
let iva = 1.21

function calcularIVA(importe){
  if(parseFloat(importe)){
    let resultado = importe * iva
    alert("el importe es:" + resultado)

  }
}

function calcularPrecioFinal(){
  let precioDelProducto = prompt("ingresa el precio del producto")
  calcularIVA(precioDelProducto)
}

calcularPrecioFinal()
*/







/*funcion anonima: una funcion sin nombre

const suma = function (a,b) {return a + b}
const resta = function (a,b) {return a + b}

console.log (suma(15,20) )
console.log (resta(15,5) )
*/




//funciones flecha: son como funciones anonimas con sintaxis simplificada//

const suma =  (a,b) => a + b;
const resta = (a,b) => a - b;
console.log (suma (15,20) )
console.log (resta (20,5) )

