# SONIC-RUNNER-GAME

 Basado en este video: 

[![freeCodeCamp.org-20241017](images/2024-10-23_164048.png "JavaScript GameDev – Code a Sonic Runner Using Kaplay Library")](https://www.youtube.com/watch?v=EmMO0yQ7eeY)

>[!IMPORTANT] 
> * El código original está en este repositorio: 
>[sonic-runner
](https://github.com/JSLegendDev/sonic-runner)  
>del usuario [JSLegendDev](https://github.com/JSLegendDev) 
>desde Agosto 22 de 2024.
> * La librería base esta en este sitio: 
>[KAPLAY](https://kaplayjs.com/).
> * Esta es una guía para empezar:
[Instalación](https://kaplayjs.com/guides/install/).

## 00. Prerrequisito​s
1. Tener el Editor [Visual Studio Code](https://code.visualstudio.com/insiders/).
2. Extensiones insaladas dentro de 
`Visual Studio Code`:  
  * [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) 
de [Aaron Bond](https://aaronbond.co.uk/).
  * [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) 
de [Alexander](https://marketplace.visualstudio.com/publishers/usernamehw).
  * [Javascript-Essentials](https://marketplace.visualstudio.com/items?itemName=Gydunhn.javascript-essentials)
  de [Gydunhn](https://marketplace.visualstudio.com/publishers/Gydunhn),  
  Este instala un paquete con:
    * ESLint
    * npm Intellisense 
    * IntelliCode
    * JavaScript (ES6) code snippets
    * Debugger for Firefox
    * Path Intellisense
    * Formatting Toggle
  * [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  de [Ritwick Dey](https://marketplace.visualstudio.com/publishers/ritwickdey).
  * [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview)
  de [Kiss Tamás](https://marketplace.visualstudio.com/publishers/kisstkondoros)

## 01. Instalar el Ambiente
1. En una `TERMINAL` de `Visual Studio Code`, se ejecuta
este comando:
```bash
npm create vite@latest .
```
* `OK to Proceed? (y)` -> `y` o `[ENTER]`
* `Current directory is not empty` -> `Ignore files and continue`
* `Select a framework:` -> `Vanilla`
* `Select a variant:` -> `JavaScript`
2. Borramos estos archivos:
* **`counter.js`** 
* **`main.js`** 
* **`style.css`**
3. Creamos la carpeta "`src`" en la raíz del proyecto.
4. Creamos el archivo **`main.js`** dentro de "`src`".
5. Cambiamos en **`index.html`** la ruta del `<script` a
`src="src/main.js"`.
6. Para probar ejecutamos estos dos comandos en la `TERMINAL`:
```bash
  pnpm i
  pnpm dev
```
* Revisar la página que sugiere `http://localhost:5173/`

## 02. Código inicial

1. Descargamos los `assets` de este sitio: 
[`public`](https://github.com/JSLegendDev/sonic-runner/tree/master/public) y los copiamos en la misma
carpeta "`public`"
2. En una `TERMINAL` de `VSCode` ejecutamos el comando para instalar `kaplay`:
```bash
pnpm i kaplay
```
3. En el archivo **`main.js`**, poner la importación de `kaplay`
e inicializar el `canvas` de `kaplay`:
```js
import kaplay from 'kaplay';
kaplay();
```
4. Sino esta en ejecución , en una `TERMINAL`, este comando 
expone la página para ser vista en un browser:  
`pnpm dev`  
Veremos una cuadrícula similar a esta:  
![localhost ## 02](images/2024-10-27_153706.png)
5. Añadimos parámetros al inicializar el `kaplay` en **`main.js`**:
```js
kaplay({
  width: 1920,
  height: 1080,
  letterbox: true, // Para mantener el aspecto de relación
});
```

### Versión de Kaplay sugerida
>[!NOTE]  
>En el minuto 11:00 se sugiere q la instalación de `kaplay` en
>la `TERMINAL` sea con la una versión específica, con este 
>comando:
>```bash
>pnpm i kaplay@3001.0.0-alpha.21
>```
>Dice que otra versión falla para ser vista en Android, pero lo 
>tendremos en cuenta una vez llegado al tema.
> Por ahora la que tengo instalada es `3001.0.0-beta.8`.  
>Revisa la versión en el archivo **`package.json`**.

6. Seguimos añadiendo parámetros al llamado de `kaplay` en
 **`main.js`**:
 ```js
kaplay({
  width: 1920,
  height: 1080,
  letterbox: true, // Para mantener el aspecto de relación
  background: [0, 0, 0], // Es el color negro
});
 ```

 ### ESLInt o mejorador del código
 >[!IMPORTANT]
> 1. Instalar `nvm` descargando el instalador desde este sitio:
>[nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe).
> 2. Instalar el `node`, que a su vez
>trae el `npm` basado en este sitio: 
>[Instalar múltiples versiones de Node.js en Windows](https://rafaelneto.dev/blog/instalar-multiples-versiones-nodejs-windows/).  
>Con el `nvm` permite múltiples versiones
>del `node`.
> 3. El programa `pnpm` es similar al `npm`, siendo un mejor empaquetador.  
>Este lo puede conseguir con las instrucciones de este sitio
>[pnpm Installation](https://pnpm.io/installation).  
>4. Instalamos las extensiones en `Visual Studio Code`:
> * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 
>de [Microsoft](https://www.microsoft.com/es-co/).
> * [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
>de [Prettier](https://prettier.io/)

>[!NOTE]
>1. En una `TERMINAL` del `Visual Studio Code`, ponemos este comando:
>```gitbash
>pnpm install standard -D
>```
>ó
>```gitbash
>npm i standard -D
>```
>* De preferencia el primero(`pnpm`) pero en caso que falle, 
>seguir usando el segundo(`npm`).
>2. Añadimos al **`package.json`**, el contenido de:  
>`"eslintConfig": { "extends" : "standard" },`, encima de
>`devDependencies`, quedando el **`package.json`** así:
>```json
>{
>  "name": "sonic-runner-game",
>  "private": true,
>  "version": "0.0.0",
>  "type": "module",
>  "scripts": {
>    "dev": "vite",
>    "build": "vite build",
>    "preview": "vite preview"
>  },
>  "eslintConfig": {
>    "extends": "standard"
>  },
>  "devDependencies": {
>    "standard": "^17.1.2",
>    "vite": "^5.4.9"
>  },
>  "dependencies": {
>    "kaplay": "3001.0.0-beta.8",
>    "sonic-runner-game": "file:"
>  }
>}
>```
>3. Creo el archivo **`.eslintrc.json`** 
>(OJO: El archivo empieza con el punto) y ponemos este texto:
>```json
> {
> "extends": ["standard"],
>   "rules": {
>     "semi" : [2, "always"],
>     "comma-dangle": [2, "always-multiline"] 
>   }
> }
>```
>4. La extensión de `Prettier` requiere ajustes, estos 
>se pueden hacer en el archivo de configuracion del usuario:  
>Presiono en `Visual Studio Code` las teclas: 
> [`Ctrl`] + [`Shift`] + [`P`]  
> y selecciono o busco `Open User Settings (JSON)`
>```json
>	"prettier.jsxSingleQuote": true,
>	"prettier.singleQuote": true,
>	"prettier.eslintIntegration": true,
>	"prettier.spaceParenthesis": true,
>	"[javascript]": {
>		"editor.defaultFormatter": "esbenp.prettier-vscode"
>	},
>	"[json]": {
>		"editor.defaultFormatter": "esbenp.prettier-vscode"
>	},
>```
>5. Presiono en `Visual Studio Code` las teclas: 
> [`Ctrl`] + [`Shift`] + [`P`]  
> y selecciono o busco `Restart ESLint Server`
>6. El Formato en `Visual Studio Code` se invoca con las teclas :  
>[`Alt`] + [`Shift`] + [`F`] 
> * Este proceso aplicó un nuevo formato a todos los archivos
> **`*.js`**

>[!WARNING]
>### El archivo **`package-lock.json`**, aparece, pero no es necesario, por ende lo borramos.

## 03. Usando **`kaplayCtx.js`**
1. Creamos el archivo **`kaplayCtx.js`** en la carpeta "`src`".
2. Cortamos lo hecho en **`main.js`** y lo pasamos a 
**`kaplayCtx.js`**.
3. Asignamos el valor de `kaplay()` a una una `const` de nombre
`k`:
```js
import kaplay from 'kaplay';

const k = kaplay({
  width: 1920,
  height: 1080,
  letterbox: true, // Para mantener el aspecto de relación
  background: [0, 0, 0], // Es el color negro
});
```
4. Añadimos mas parámetors a la función `kaplay()`:
```js
  global: false, //
```
5. Exportamos la `const k`
```js 
export default k;
```
6. En el archivo **`main.js`**, importamos este valor:
```js
import {k} from './kaplayCtx.js';
```
7. En **`kaplayCtx.jx`** para `kaplay()` añadimos otro parámetro
para tener en cuenta con los móbiles:
```js
  touchToMouse: true, // Acceso a los móbiles
```
8. Especificamos los botones en `kaplay()`:
```js
  buttons: {
    jump: {
      keyboard: ['space'],
      mouse: 'left',
    },
  },
``` 
9. Mas opciones en `kaplay()` de **`kaplayCtx.jx`** para
depuración:
```js
  debugKey: 'd', // la tecla `d` ae usará para hacer depuración
  debug: true, // Depuración siempre activa
```
10. Regreansando al browser donde se ejecuta esta página 
[localhost:5173](`http://localhost:5173/`), presionamos la tecla
[`d`] y nos parece un texto en pantalla: `FPS: 60`, o algo parecido.

## 04. Importamos los `assets` de "`public`"

1. En el archivo **`main.js`**, importamos los `assets`, empezando
por el fondo y la plataforma:
```js
k.loadSprite('chemicak-bg', 'gaphics/chemical-bg.png');
k.loadSprite('platforms', 'gaphics/platforms.png');
```
2. Importamos el `sprite` de `'sonic'`, pero este es una imagen con
múltiples imágenes, entonces se agregan unos parámetros:
```js
k.loadSprite('sonic', 'gaphics/sonic.png', {
  sliceX: 8,
  sliceY: 2,
  anims: {
    run: { from: 0, to: 7, loop: true, speed: 30 },
    jump: { from: 5, to: 15, loop: true, speed: 100 },
  },
});
```
3. Lo mismo con `'motobug'`:
```js
k.loadSprite('motobug', 'gaphics/motobug.png', {
  sliceX: 5,
  sliceY: 1,
  anims: {
    run: { from: 0, to: 4, loop: true, speed: 8 },
  },
});
```
5. Agregamos el `'ring'` en **`main.js`**:
```js
k.loadSprite('ring', 'gaphics/ring.png', {
  sliceX: 16,
  sliceY: 1,
  anims: {
    spin: { from: 0, to: 15, loop: true, speed: 30 },
  },
});
```
6. Agregamos el tipo de letra o `font`:
```js
k.loadFont('mania', 'fonts/mania.ttf');
```
7. Agregamos los sonidos en **`main.js`**:
```js
k.loadSound('destroy', 'sounds/Destroy.wav');
k.loadSound('hurt', 'sounds/Hurt.wav');
k.loadSound('hyper-ring', 'sounds/HyperRing.wav');
k.loadSound('jump', 'sounds/Jump.wav');
k.loadSound('ring', 'sounds/Ring.wav');
k.loadSound('city', 'sounds/city.mp3');
```

## 05. Creando las escenas básicas

1. Creamos un folder dentro de "`src`" llamado "`scenes`".
2. Ponemos en **`main.js`**, el llamado a tres escenas y cual sería
la primer escena a mostrar:
```js
k.scene('main-menu', () => {});
k.scene('game', () => {});
k.scene('gameover', () => {});
k.go('main-menu');
```
3. En la carpeta "`src/scenes`" creamos el archivo **`mainMenu.js`**.
4. En **`mainMenu.js`**, importamos el contextos de `kaplay`:
```js
import k from '../kaplayCtx.js';
```
5. Creamos la función `mainMenu` y la exportamos por defecto:
```js
export default function mainMenu () {

}
```
6. En el archivo **`main.js`**, cambiamos el  
`k.scene('main-menu', () => {});` por  
`k.scene('main-menu', mainMenu);`  
y el debe de importar al principio
esto:  
`import mainMenu from './scenes/mainMenu.js';`.

## 06. Código Inicial en **`mainMenu.js`**

1. Voy a utilizar el `localStorage`, empiezo con una pregunta en
negativo para saber si la Data no existe, para crearla:
```js
  if (!k.getData('best-score')) k.setData('best-score', 0);
```
2. En el archivo el archivo **`mainMenu.js`**, pregunto por la tecla 
de `'jump'`, para llevarlo o cambiar al escenario `'game'`:
```js
  k.onButtonPress('jump', () => k.go('game'));
```
3. Creamos una constante de nombre `bgPieceWidth`, para saber cuando
debo cambiar la primera pieza del fondo, para q funcione el 
movimiento infinito de `scroll`, juntando dos imágenes, con valor
del ancho total del ancho definido en `kaplay`, es 1920.
 
>[!CAUTION]  
>### Corrijo de **`main.js`**, la ruta de las imágenes.
>### Corrijo también `'chemicak-bg'` por `'chemical-bg'`.

4. En el archivo **`mainMenu.js`** creamos la constante `bgPieces`, 
es un arreglo para almacenar dos valores de objetos del juego usando 
el método `k.add()`, añado componente como el `k.sprite` pasando una 
clave de las definidas en **`main.js`**. 
Otro componente sería `k.pos()`, especificando las coordenadas (x,y).
```js
  const bgPieces = [k.add([k.sprite('chemical-bg'), k.pos(0, 0)])];
```

>[!NOTE]  
>Hasta aquí, en el browser ya parece el fondo de pantalla del juego:  
>![chemicak-bg](images/2024-10-29_151455.png "chemicak-bg, mainMenu.js")

5. Añado mas información a la constante `bgPieces`:
```js
  const bgPieces = [k.add([
    k.sprite('chemical-bg'),
    k.pos(0, 0),
    k.scale(2),
    k.opacity(0.8),
  ])];
```
6. Duplico la información dentro de la constante `bgPieces`, 
y corrijo la posición `x` del segundo por la constante 
`bgPieceWidth` multiplicada por `2`:
```js
  const bgPieces = [
    k.add([
      k.sprite('chemical-bg'),
      k.pos(0, 0),
      k.scale(2),
      k.opacity(0.8),
    ]),
    k.add([
      k.sprite('chemical-bg'),
      k.pos(bgPieceWidth *2, 0), // Se multiplica x 2 por la `scale`
      k.scale(2),
      k.opacity(0.8),
    ]),
  ];
```
