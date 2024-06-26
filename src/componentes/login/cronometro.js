import React, { useState, useEffect } from 'react';

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [hora, setHora] = useState(0);
  const [cronometroAtivo, setCronometroAtivo] = useState(false);

  useEffect(() => {
    if(segundos === 60){
        setMinutos(minutos => minutos + 1)
        setSegundos(0)
    }
  }, [segundos]);

  useEffect(() => {
  if(minutos === 60){
    setHora(hora => hora + 1)
    setSegundos(0)
    setMinutos(0)
}

}, [minutos]);


  useEffect(() => {
    let intervalo;
    if (cronometroAtivo) {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [cronometroAtivo]);

  const iniciarCronometro = () => {
    setCronometroAtivo(true);
  };

  const pausarCronometro = () => {
    setCronometroAtivo(false);
  };

  const reiniciarCronometro = () => {
    setSegundos(0);
    setMinutos(0)
    setHora(0)
    setCronometroAtivo(false);
  };

  return (
    <div>
      <h1>Cronômetro</h1>
      <p>{segundos} Segundos</p>
      <p>{minutos} Minutos</p>
      <p>{hora} Horas</p>
      <div>
        <button onClick={iniciarCronometro}>Iniciar</button>
        <button onClick={pausarCronometro}>Pausar</button>
        <button onClick={reiniciarCronometro}>Reiniciar</button>
      </div>
    </div>
  );
};

export default Cronometro;