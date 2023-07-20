<p align="center">
    <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-ide">IDE</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licence">Licence</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>
<p align="center">
    <a href="https://douglasdl.github.io/Pokedex/">
        <img alt="Pokedex" src="https://douglasdl.github.io/images/Pokedex.png" width="100%">
    </a>
</p>

## 🚀 Technologies

This project was developped using the following technologies:
<p alight="center">
  <a href="https://expo.dev/"><img height="40" src="https://douglasdl.github.io/images/Expo.png"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://reactnative.dev/"><img height="40" src="https://douglasdl.github.io/images/ReactNative2.png"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://reactjs.org/"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.typescriptlang.org/"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://tailwindcss.com/"><img height="40" src="https://douglasdl.github.io/images/TailwindCSS.png"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3"></a>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

📚 Libraries
- [NativeWind](https://www.nativewind.dev/)
- [Google Fonts](https://fonts.google.com/)
- [Axios](https://axios-http.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React Router DOM](https://reactrouter.com/en/main)

🛠 Utilities

Sample Images
- [Unsplash](https://unsplash.com/s/photos/hairdresser)
- [Random User Generator](https://randomuser.me/)

Icons
- [IcoMoon App](https://icomoon.io/app/#/select)
- [FlatIcon](https://www.flaticon.com/br/)
- [IconFinder](https://www.iconfinder.com/)
- [ReactIcons](https://react-icons.github.io/react-icons/icons?name=fi)

## 📐 Project

This is a basic project that utilizes the public [RESTful Pokémon API](https://pokeapi.co/) data as backend to be displayed in the frontends web and mobile.
Check the project online [web](https://douglasdl.github.io/NLW6-Origin/), [Android](), [iOS]().
Pokedex is a basic page in the SPA (Single Page Application) format, responsive to be used in several devices to search and view data information from Pokemon direct from the Poke-API.
It's coposed by the following sections: Navigation, Home, Pokedex, Details and Generations.

### Mobile

Create the project:
```sh
npx create-expo-app mobile --template
```

Install the Expo dependencies:
```sh
npx expo install expo-font @expo-google-fonts/roboto
npx expo install react-native-svg
npx expo install react-native-screens 
npx expo install react-native-safe-area-context
```

Install the dependencies:
```sh
npm i @react-navigation/native
npm i @react-navigation/native-stack
npm i @react-navigation/bottom-tabs
npm i axios
```

Install the development dependencies:
```sh
npm i babel-plugin-module-resolver -D
npm i react-native-svg-transformer -D
```

Install Eslint dependencies:
```sh
npx expo install eslint eslint-config-prettier eslint-config-universe eslint-plugin-react-hooks
npx expo install prettier
npx expo install @types/react @types/react-native typescript
```


Make the Expo SDK migration updates:
```sh
npx expo install expo-updates
```

```sh
npx expo-optimize
```

Update to Expo SDK 49:
```sh
npm install expo@^49.0.0
npx expo install --fix
```

Run the Project in Development mode:
```sh
npx expo start
```

Build
```sh
npm install -g eas-cli
eas build -p ios
```


### Web

Create the project using [Vite](https://vitejs.dev/):
```sh
npm create vite@latest web -- --template react-ts
```

Install the dependencies:
```sh
npm i axios
npm i react-router-dom
```

Install the development dependencies:
```sh
npm i gh-pages -D
npm i -D tailwindcss postcss autoprefixer
npm i @tailwindcss/forms
npx tailwindcss init
```

Run the Project in Development mode:
```sh
npm run dev
```

Build the project:
```sh
npm run build
```

Run the Project in Production mode:
```sh
npm run start
```

## 🔖 Layout

The basic layout project can be accessed in [this link](https://www.figma.com/) in your [Figma](https://figma.com) account.

## 💻 IDE
This project was done using [Visual Studio Code](https://code.visualstudio.com/) IDE.

### 🧩 VS Code Extensions

- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight])
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#:~:text=Prettier%20is%20an%20opinionated%20code,account%2C%20wrapping%20code%20when%20necessary.)
- [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### ⚙ VS Code Configuration

-   CRTL + SHIFT + P
    -   settings.json

```javascript
{
    /* Define o tema do VS Code */
    "workbench.colorTheme": "Dracula",
    /*"workbench.colorTheme": "Omini", */
    "workbench.iconTheme": "material-icon-theme",

    /* Configura tamanho e família da fonte */
    "editor.fontSize": 18,
    "editor.lineHeight": 24,
    "editor.fontFamily": "Fira Code, Menlo, Monaco, 'Courier New', monospace",
    "editor.fontLigatures": true,
    "editor.wordWrap": "on",
    "workbench.editor.tabSizing": "shrink",
    "explorer.compactFolders": false,

    /* Aplica linhas verticais para lembrar quabra de linha em códigos muito grandes */
    "editor.rulers": [80, 120],
    "editor.formatOnSave": false,
    "editor.minimap.enabled": false,

    "window.zoomLevel": -1,
    "explorer.confirmDelete": false,
    "terminal.integrated.shell.osx": "/bin/zsh",
    "tabnine.experimentalAutoImports": true,
    "python.languageServer": "Pylance",
    "explorer.confirmDragAndDrop": false,
    "editor.accessibilitySupport": "off",

    /* Formatter */
    "prettier.tabWidth": 4,
    "prettier.semi": false,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "none",
    "prettier.arrowParens": "avoid",
    "prettier.endOfLine": "auto",
    "editor.tabSize": 4,
    "editor.formatOnSave": true,

    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.doNotVerifyTags": true,

    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    "workbench.editorAssociations": {
        "*.ipynb": "jupyter.notebook.ipynb"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    }

    /*"eslint.packageManager": "yarn", */
    /*"eslint.autoFixOnSave": true, */
}
```

## 📝 Licence

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.

---

Done with ♥ by [Douglas Dias Leal](mailto:douglasdiasleal87@gmail.com)
