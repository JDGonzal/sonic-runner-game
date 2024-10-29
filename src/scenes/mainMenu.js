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
}
