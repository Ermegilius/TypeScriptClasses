# REST-full app

## Init the project

1. Cd into the project folder

2.

```sh
npm init -y
tsc --init
```

3. Changes to tsconfig.json:

```json
"module": "commonjs" /* Specify what module code is generated. */,
"rootDir": "./src" /* Specify the root folder within your source files. */,
"moduleResolution": "node" /* Specify how TypeScript looks up a file from a given module specifier. */,
"outDir": "./dist" /* Specify an output folder for all emitted files. */,
```

## Instal dependencies

-   npm install --save express body-parser
-   npm install --save-dev nodemon
-   npm i --save-dev @types/node
-   npm i --save-dev @types/express

## Run TypeScript watch mode

```sh
tsc --w
```

## Add script to package.json

```json
"scripts": {
    "start": "nodemon dist/app.js"
}
```

## Start the server

```sh
npm start
```
