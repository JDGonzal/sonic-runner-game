import k from '../kaplayCtx.js';

export default function mainMenu () {
  if (!k.getData('best-score')) k.setData('best-score', 0);

  k.onButtonPress('jump', () => k.go('game'));

  // Ancho para el scroll infinito juntando imagenes
  const bgPieceWidth = 1920;
  // Para tener 2 valores de objetos del juego
  const bgPieces = [
    k.add([
      k.sprite('chemical-bg'),
      k.pos(0, 0),
      k.scale(2),
      k.opacity(0.8),
    ]),
    k.add([
      k.sprite('chemical-bg'),
      k.pos(bgPieceWidth * 2, 0), // Se multiplica x 2 por la `scale`
      k.scale(2),
      k.opacity(0.8),
    ]),
  ];
  // El ancho de la `platform`
  const platformWidth = 1280;
  // Similar a `bgPieces` con dos objetos y otra clave
  const platforms = [
    k.add([
      k.sprite('platforms'),
      k.pos(0, 450),
      k.scale(4),
    ]),
    k.add([
      k.sprite('platforms'),
      k.pos(platformWidth * 4, 450), // Multiplicar x 4 (`scale`)
      k.scale(4),
    ]),
  ];

  // Uso la función `onUpdate` refresca 60 veces por segundo
  k.onUpdate(() => {
    // Esto significa q está al finalizar de la imagen 2
    if (bgPieces[1].pos.x < 0) {
      // Cambiamos de posición
      bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth * 2, 0);
      // Lo movemos simplemente
      bgPieces.push(bgPieces.shift());
    }
    // Movemos la velocidad a la izquierda, es decir en negativo
    bgPieces[0].move(-100, 0);
    // Cambiamos entre los valores de lo que hay en `bgPieces`
    bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth * 2, 0);

    // Esto significa q está al finalizar de la imagen 2
    if (platforms[1].pos.x < 0) {
      // Cambiamos de posición
      platforms[0].moveTo(platforms[1].pos.x + platformWidth * 4, 450);
      // Lo movemos simplemente
      platforms.push(platforms.shift());
    }
    // Movemos la velocidad a la izquierda, es decir en negativo
    platforms[0].move(-4000, 0);
    // Cambiamos entre los valores de lo que hay en `platforms`
    platforms[1].moveTo(platforms[0].pos.x + platformWidth * 4, 450);
  });
}
