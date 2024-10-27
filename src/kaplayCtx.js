import kaplay from 'kaplay';

const k = kaplay({
  width: 1920,
  height: 1080,
  letterbox: true, // Para mantener el aspecto de relación
  background: [0, 0, 0], // Es el color negro
  global: false, //
  touchToMouse: true, // Acceso a los móbiles
  buttons: {
    jump: {
      keyboard: ['space'],
      mouse: 'left',
    },
  },
  debugKey: 'd', // la tecla `d` ae usará para hacer depuración
  debug: true, // Depuración siempre activa
});

export default k;
