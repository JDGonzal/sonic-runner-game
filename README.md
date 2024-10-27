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
* **counter.js** 
* **main.js** 
* **style.css**
3. Creamos la carpeta "src" en la raíz del proyecto.
4. Creamos el archivo **main.js** dentro de "src".
5. Cambiamos en **index.html** la ruta del `<script` a
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
carpeta "public"
2. En una `TERMINAL` de `VSCode` ejecutamos el comando para instalar `kaplay`:
```bash
pnpm i kaplay
```
3. En el archivo **main.js**, poner la importación de `kaplay`
e inicializar el `canvas` de `kaplay`:
```js
import kaplay from "kaplay";
kaplay();
```
4. Sino esta en ejecución , en una `TERMINAL`, este comando 
expone la página para ser vista en un browser:  
`pnpm dev`  
Veremos una cuadrícula similar a esta:  
![localhost ## 02](images/2024-10-27_153706.png)
5. Añadimos parámetros al inicializar el `kaplay` en **main.js**:
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
>Revisa la versión en el archivo **package.json**.

6. Seguimos añadiendo parámetros al llamado de `kaplay` en
 **main.js**:
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
>2. Añadimos al **package.json**, el contenido de:  
>`"eslintConfig": { "extends" : "standard" },`, encima de
>`devDependencies`, quedando el **package.json** así:
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
>3. Creo el archivo **.eslintrc.json** 
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
> ***.js**

>[!WARNING]
>### El archivo **`package-lock.json`**, aparece, pero no es necesario, por ende lo borramos.

