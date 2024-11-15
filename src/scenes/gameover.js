import k from '../kaplayCtx.js';

export default function gameover (citySfx) {
  // Pausamos el sonido
  citySfx.pause = true;
  // Definimos una variable con el tope del puntaje o `score`
  let bestScore = k.getData('best-score');
  // Otra con el mas reciente puntaje o `score`
  const currentScore = k.getData('current-score');

  // Ponemos unas categorías o _rankings_
  const rankGrades = ['F', 'E', 'D', 'C', 'B', 'A', 'S'];
  const rankValues = [50, 80, 100, 200, 300, 400, 500];

  // Dos variables mas con el actual y mejor categoría:
  let currentRank = 'F';
  let bestRank = 'F';

  // En un ciclo cargamos el `currentRank` y `bestRank`:
  for (let i = 0; i < rankValues.length; i++) {
    if (rankValues[i] < currentScore) {
      currentRank = rankGrades[i];
    }
    if (rankValues[i] > bestScore) {
      bestRank = rankGrades[i];
    }
  }

  // Cambiamos el valor de `'best-score'` si current es mayor:
  if (bestScore < currentScore) {
    bestScore = currentScore;
    bestRank = currentRank;
    k.setData('best-score', bestScore);
  }

  // Textos en pantalla con los resultados obtenidos
  k.add([
    k.text('GAME OVER', { font: 'mania', size: 96 }),
    k.anchor('center'),
    k.pos(k.center().x, k.center().y - 300),
  ]);
  k.add([
    k.text(`BEST SCORE : ${bestScore}`, { font: 'mania', size: 64 }),
    k.anchor('center'),
    k.pos(k.center().x - 400, k.center().y - 200),
  ]);
  k.add([
    k.text(`CURRENT SCORE : ${currentScore}`, { font: 'mania', size: 64 }),
    k.anchor('center'),
    k.pos(k.center().x + 400, k.center().y - 200),
  ]);

  // Creamos una constante `bestRankBox` para `bestRank`
  const bestRankBox = k.add([
    k.rect(400, 400, { radius: 4 }),
    k.color(0, 0, 0),
    k.area(),
    k.anchor('center'),
    k.outline(6, k.Color.fromArray([255, 255, 255])),
    k.pos(k.center().x - 400, k.center().y + 50),
  ]);
  bestRankBox.add([
    k.text(bestRank, { font: 'mania', size: 100 }),
    k.anchor('center'),
  ]);

  // Hacemos lo mismo para `currentRank` en `currentRankBox`
  const currentRankBox = k.add([
    k.rect(400, 400, { radius: 4 }),
    k.color(0, 0, 0),
    k.area(),
    k.anchor('center'),
    k.outline(6, k.Color.fromArray([255, 255, 255])),
    k.pos(k.center().x + 400, k.center().y + 50),
  ]);
  currentRankBox.add([
    k.text(currentRank, { font: 'mania', size: 100 }),
    k.anchor('center'),
  ]);

  // Esperando 2 segundos para volver a la escena `game`
  k.wait(2, () => {
    k.add([
      k.text('Press Space/Click/Touch to Play Again', {
        font: 'mania',
        size: 64,
      }),
      k.anchor('center'),
      k.pos(k.center().x, k.center().y + 350),
    ]);
    k.onButtonPress('jump', () => k.go('game'));
  });
}
