import k from './kaplayCtx.js';
import mainMenu from './scenes/mainMenu.js';

// Definimos imágens
k.loadSprite('chemicak-bg', 'gaphics/chemical-bg.png');
k.loadSprite('platforms', 'gaphics/platforms.png');

// Definimos `sprites`
k.loadSprite('sonic', 'gaphics/sonic.png', {
  sliceX: 8,
  sliceY: 2,
  anims: {
    run: { from: 0, to: 7, loop: true, speed: 30 },
    jump: { from: 5, to: 15, loop: true, speed: 100 },
  },
});

k.loadSprite('ring', 'gaphics/ring.png', {
  sliceX: 16,
  sliceY: 1,
  anims: {
    spin: { from: 0, to: 15, loop: true, speed: 30 },
  },
});

k.loadSprite('motobug', 'gaphics/motobug.png', {
  sliceX: 5,
  sliceY: 1,
  anims: {
    run: { from: 0, to: 4, loop: true, speed: 8 },
  },
});

// Definimos el tipo de letra o `font`
k.loadFont('mania', 'fonts/mania.ttf');

// Definimos los sonidos
k.loadSound('destroy', 'sounds/Destroy.wav');
k.loadSound('hurt', 'sounds/Hurt.wav');
k.loadSound('hyper-ring', 'sounds/HyperRing.wav');
k.loadSound('jump', 'sounds/Jump.wav');
k.loadSound('ring', 'sounds/Ring.wav');
k.loadSound('city', 'sounds/city.mp3');

// Llamamos tres escenas y con cual va a empezar:
k.scene('main-menu', mainMenu);
k.scene('game', () => {});
k.scene('gameover', () => {});
k.go('main-menu');
