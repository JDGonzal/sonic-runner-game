import k from '../kaplayCtx.js';
import { makeSonic } from '../entities/sonic.js';

export default function game () {
  // Definimos la gravedad o caída d elos objetos
  k.setGravity(3100);

  // Copiamos de **`MainMenu.js`**
  const bgPieceWidth = 1920;
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

  const platformWidth = 1280;
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

  // Añadimos el objeto `sonic` al juego:
  const sonic = makeSonic(k.vec2(200, 745));

  // Velociad del juego con valor inicial de 300
  let gameSpeed = 300;
  // Ciclo que se mueve cada segundo
  k.loop(1, () => {
    gameSpeed += 50;
  });

  // Agregamos una plataforma invisible
  k.add([
    k.rect(1920, 300),
    k.opacity(0), // Es invisible
    k.area(), // Se requiere para ver en el debug
    k.pos(0, 832),
    k.body({ // Para los factores de gravedad
      isStatic: true,
    }),
  ]);

  // Uso la función `onUpdate` refresca 60 veces por segundo
  k.onUpdate(() => {
    // Copiamos la lógica del `bgPieces` de **`mainMenu.js`**:
    if (bgPieces[1].pos.x < 0) {
      bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth * 2, 0);
      bgPieces.push(bgPieces.shift());
    }
    bgPieces[0].move(-100, 0);
    bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth * 2, 0);
  });

  // Copiamos la lógica del `platforms` de **`mainMenu.js`**,
  // con algunos cambios como el uso de `gamespeed`:
  if (platforms[1].pos.x < 0) {
    platforms[0].moveTo(platforms[1].pos.x + platformWidth * 4, 450);
    platforms.push(platforms.shift());
  }
  platforms[0].move(-gameSpeed, 0);
  platforms[1].moveTo(platforms[0].pos.x + platformWidth * 4, 450);
}
