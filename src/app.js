

window.onload = function () {
  let quien = ['El gato', 'Mi hermano', 'El vecino', 'La mascota'];
  let accion = ['saltó sobre', 'rompió', 'pintó', 'perdió'];
  let queCosa = ['el jarrón', 'mi celular', 'la bicicleta'];
  let cuando = [
    'después de la lluvia',
    'mientras trabajaba',
    'cuando salí a comprar',
    'en la madrugada',
    'al terminar la reunión'
  ];

  function generarExcusa() {
    let randomQuien = quien[Math.floor(Math.random() * quien.length)];
    let randomAccion = accion[Math.floor(Math.random() * accion.length)];
    let randomQue = queCosa[Math.floor(Math.random() * queCosa.length)];
    let randomCuando = cuando[Math.floor(Math.random() * cuando.length)];
    return `${randomQuien} ${randomAccion} ${randomQue} ${randomCuando}.`;
  }

  // Genera y muestra una excusa distinta en cada recarga
  const excusa = generarExcusa();
  document.getElementById("excuse").innerHTML = excusa;
  console.log("Excusa generada:", excusa); // Opcional, para verificar en la consola
};
