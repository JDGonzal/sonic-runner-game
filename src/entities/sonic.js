import k from '../kaplayCtx.js';

export function makeSonic (pos) {
  const sonic = k.add([
    k.sprite('sonic', { anim: 'run' }),
    k.scale(4),
    k.area(),
    k.anchor('center'),
    k.pos(pos),
    k.body({ jumpForce: 1700 }),
    {
      setControls () {
        k.onButtonPress('jump', () => {
          if (this.isGrounded()) {
            this.play('jump'); // Esta es la animación
            this.jump();
            k.play('jump', { volume: 0.5 }); // Ejecuto el sonido
          }
        });
      },
      setEvents () {
        this.onGround(() => {
          this.play('run'); // Esta es la animación
        });
      },
    },
  ]);
  return sonic;
}
