# aind-data-asset-view

React application to interact with Code Ocean's API to view registered data assets.

This application was [deployed](https://aind-data-asset-view-dot-neural-dynamics-dev.uw.r.appspot.com/) through GCP App Engine.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Setting up ESLint

In the project root directory, run:

#### `npm init @eslint/config`

This will install ESLint and create a config file (.eslintrc). Choose the Airbnb Style Guide and JSON for the config file format.

In the package.json file, update 'scripts' to include:

```
"lint": "eslint \"src/**/*.{js,jsx}\"",
"lint-fix": "eslint --fix \"src/**/*.{js,jsx}\""
```

Once the package.json file is updated, you can run `npm run lint` to execute the linter.
Run `npm run lint-fix` to execute and fix warnings.

## Setting up Prettier

In the project root directory, run:

#### `npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev`

In the .eslintrc.json file, update 'plugins' to:

```
"plugins": [
        "react",
        "prettier"
    ],
```

Prettier should be last in the array to overwrite previous rules.

In the project root directory, create a .prettierrc file.

Below is the current Prettier config.

```
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true
}
```

In the package.json file, update 'scripts' to include:
```
"format": "prettier --check ./src",
"format-fix": "prettier --write ./src"
```

Once the package.json file is updated, you can run `npm run format-fix` to execute and fix code format. After this, run `npm run format` to see that all files have been formatted correctly.

#### Apply Prettier when files are saved in VS Code:

- Install the Prettier extension
- Go into Settings
- Search for 'Formatter' and set Prettier as the 'Default Formatter'
- Enable 'Format on Save'
