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
