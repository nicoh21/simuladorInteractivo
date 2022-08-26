
//Calcular el precio total de los productos seleccionados

const sumaPrecio  = (a,b,c) => a + b + c;
const restaDescuento = (a,b) => a - b;


let producto1 = parseInt(prompt("Ingrese el precio del producto"));
let producto2 = parseInt(prompt("Ingrese el precio del producto"));
let producto3 = parseInt(prompt("Ingrese el precio del producto"));
let totalParcial = sumaPrecio(producto1, producto2, producto3)
let pago = prompt("Con que tarjeta desea hacer el pago?\nLas tarjetas habilitadas son Santander y Frances")

let descuento = "";

if(pago.toLowerCase() === "santander"){
    descuento = 0.1
}else if(pago.toLowerCase() === "frances"){
    descuento = 0.2
}else{
    alert("La tarjeta ingresada no es valida")
    
}

let total = restaDescuento(totalParcial, totalParcial * descuento);
alert(`El total es ${total}`);



//Calcular monto a pagar por cuota, dependiendo de la cantidad seleccionada

let cuota = parseInt(prompt(`Su monto a pagar es de: $${total}\nEn cuantas cuotas lo va a pagar?`))
alert(`Va a pagar ${cuota} cuotas de: ${total / cuota}`)


let valorCuota = "";

for(let i = 1; i <= cuota; i++){
    valorCuota += `${i}: ${total / cuota.toFixed(2)} \n`;
};

alert(`Cuotas:\n\n ${valorCuota}\nTotal: ${restaDescuento(totalParcial, totalParcial * descuento)}`);


