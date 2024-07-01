// import React, { useState, useEffect } from 'react';
// import { Form} from 'react-bootstrap';
// import * as Tone from 'tone';
// const Calculator = () => {
//   const [segundos, setSegundos] = useState(0);
//   const [minutos, setMinutos] = useState(0);
//   const [hora, setHora] = useState(0);
//   const [cronometroAtivo, setCronometroAtivo] = useState(false);
//   const [descrever, setDescrever] = useState(true);
//   const [iniciar, setIniciar] = useState(false);
//   const [mostrarIniciar, setMostrarIniciar] = useState(false);




// async function tocarSom() {
//   // Tocando a nota
  
//   const osc = new Tone.Oscillator().toDestination();
// const sampler = new Tone.Sampler({
//   urls: {
//     "C4": "path/to/C4.mp3",
//     "D#4": "path/to/Dsharp4.mp3",
//     // Adicione mais notas e seus respectivos arquivos de áudio, ou use um sampler diferente.
// }, 
//   baseUrl: "path/to/samples/"
// }).toDestination();

// const notas = ["C4", "E4", "G4", "B4"];
// const seq = new Tone.Sequence((time, note) => {
//   sampler.triggerAttackRelease(note, "8n", time);
// }, notas).start(0);

// Tone.Transport.start();
 
// }

// //   // Importando a biblioteca Tone.js
// // const Tone = require('tone');

// // // Inicializando o Tone.js
// // Tone.start();

// // // Criando um oscilador para gerar um som
// // const oscilador = new Tone.Oscillator(440, 'sine').toDestination();
// // const oscilador2 = new Tone.Oscillator(440, 'sine').toDestination();

// // // Definindo a duração da nota
// // const duracaoNota = '4n'; // Por exemplo, 4n representa uma nota de quarto de tempo
// // const duracaoNota2 = '5n'; // Por exemplo, 4n representa uma nota de quarto de tempo

// // async function tocarSom() {
// //   // Tocando a nota
// //   await tocarSom1()
 
// // }

// // async function tocarSom1() {
// //   // Tocando a nota
// //   oscilador.start().stop(`+${duracaoNota}`);
// // }





// //   useEffect(() => {
// //     if(segundos === 0 && minutos === 0 && hora === 0){
// //         console.log("33333", iniciar)
// //         setCronometroAtivo(false);
// //         setIniciar(false)
// //     }
// //    let seg = parseInt(segundos, 10)
// //    let min = parseInt(minutos, 10)
// //    let hor = parseInt(hora, 10)
   
// //     if(seg === 0 && min === 0 && hor === 0 ){
// //         setMostrarIniciar(false)
// //         setIniciar(false)
// //     }else{
// //         setMostrarIniciar(true)
// //     }
// //   }, [segundos]);

// //   useEffect(() => {

// //   }, [segundos]);

// //   useEffect(() => {
// //     if(segundos === 0 && iniciar){
// //         setMinutos(minutos => minutos - 1)
// //     }
    
// //   }, [segundos, iniciar]);

// //   useEffect(() => {
// //   if(minutos === 0 && iniciar){
// //     setHora(hora => hora - 1)
// // }

// // }, [minutos, iniciar]);


// // if(minutos < 0){
// // setMinutos(0)
// // }

// // if(hora < 0){
// //     setHora(0)
// //     }

// //   useEffect(() => {
// //     let intervalo;
// //     if (cronometroAtivo && iniciar) {
// //       intervalo = setInterval(() => {
// //         setSegundos(segundos => segundos - 1);
// //       }, 1000);
// //     } else {
// //       clearInterval(intervalo);
// //     }
// //     return () => clearInterval(intervalo);
// //   }, [cronometroAtivo, iniciar]);

// //   const iniciarCronometro = () => {
// //     if(segundos === 0 && minutos > 0){
// // setSegundos(60)
// //     }



// //     setDescrever(false)
// //     setIniciar(true)
// //     setCronometroAtivo(true);
// //   };

// //   const pausarCronometro = () => {
// //     setIniciar(false)
// //     setCronometroAtivo(false);
// //   };

// //   const reiniciarCronometro = () => {
// //     setSegundos(0);
// //     setMinutos(0)
// //     setHora(0)
// //     setIniciar(false)
// //     setCronometroAtivo(false);
// //     setDescrever(true)
// //   };

// //   useEffect(() => {
// //     if(segundos === 0 && minutos === 0 && hora === 0){
// //         setCronometroAtivo(false);
// //         setIniciar(false)
// //     }
// //    let seg = parseInt(segundos, 10)
// //    let min = parseInt(minutos, 10)
// //    let hor = parseInt(hora, 10)
   
// //     if(seg === 0 && min === 0 && hor === 0 ){
// //         console.log("entrou")
// //         setMostrarIniciar(false)
// //         setIniciar(false)
// //     }else{
// //         setMostrarIniciar(true)
// //     }
// //   }, [segundos, minutos, hora ]);


// //   function mostrarButaoIniciar(valor, tipo) {

// // }

//   return (
//     <div>
// <button onClick={tocarSom}>Tocar som</button>
// {/* {descrever &&
//      <p>Informe os segundos</p>
// }
// {descrever &&
   
//                 <Form.Control
//                     onChange={e => { setSegundos(e.target.value); mostrarButaoIniciar(e.target.value, "s") }}
//                     value={segundos}
//                 />
//             }
//             {descrever &&
//      <p>Informe os minutos</p>
// }
//             {descrever &&
//                 <Form.Control
//                     onChange={e => { setMinutos(e.target.value); mostrarButaoIniciar(e.target.value, "m")}}
//                     value={minutos}
//                 />
//             }
//              {descrever &&
//      <p>Informe as horas</p>
// }
//              {descrever &&
//                 <Form.Control
//                     onChange={e => { setHora(e.target.value); mostrarButaoIniciar(e.target.value, "h") }}
//                     value={hora}
//                 />
//             }


//       <h1>Cronômetro</h1>
//       <p>{segundos} Segundos</p>
//       <p>{minutos} Minutos</p>
//       <p>{hora} Horas</p>
//       <div>
//       {mostrarIniciar &&
//         <button onClick={iniciarCronometro}>Iniciar</button>
//       }
        
//         <button onClick={pausarCronometro}>Pausar</button>
//         <button onClick={reiniciarCronometro}>Reiniciar</button>
//       </div> */}
//     </div>
//   );
// };

// export default Calculator;