# Project setup

## Pre-requisite

You will need to have [node.js](https://nodejs.org/en/) installed.

I use nvm, and usually only use lts, and not the latest node version, hence the `.nvmrc` file.

Once node is installed, `npm` should be installed with it.
In the root folder run:

`npm init -y`

to create a `package.json` file, with some default fields.

Next thing is to install our dev dependencies:

```zsh
npm install --save-dev typescript @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-typescript @babel/plugin-proposal-object-rest-spread
```

`package.json` file should look like:
```json
{
  "name": "brobot-exchange",
  "version": "0.0.1",
  "description": "brobot-exchange",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/noejon/brobot-exchange.git"
  },
  "keywords": [],
  "author": "Jonathan Noé",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/noejon/brobot-exchange/issues"
  },
  "homepage": "https://github.com/noejon/brobot-exchange#readme",
  "devDependencies": {
    "@babel/core": "^7.8.7",
    "@babel/plugin-proposal-class-properties": "^7.8.3",
    "@babel/plugin-proposal-object-rest-spread": "^7.8.3",
    "@babel/preset-env": "^7.8.7",
    "@babel/preset-typescript": "^7.8.3",
    "typescript": "^3.8.3"
  }
}

```

Next we create our configuration file for typescript, but beforehand we need to install typescript globally

```zsh
npm install --global typescript
```


```zsh
tsc --init --declaration --allowSyntheticDefaultImports --target esnext --outDir lib
```

`tsconfig.json` should look like:

```json
{
  "compilerOptions": {
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "esnext",                       /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    "declaration": true,                      /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "lib",                          /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    "allowSyntheticDefaultImports": true,     /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}
```

Next we need to set our `.babelrc` file:

```zsh
touch .babelrc
```

and we add the following configuration:

```json
{
    "presets": [
        "@babel/env",
        "@babel/typescript"
    ],
    "plugins": [
        "@babel/proposal-class-properties"
    ]
}
```

Next let's setup webpack

First install the required dependencies:

```zsh
npm install --save-dev webpack webpack-cli babel-loader
```

```zsh
touch webpack.config.js
```

Fill it with the following configuration

```js
const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}
```

Next we will create scripts in `package.json`

First we need to install `npm-run-all`

```zsh
npm install --save-dev npm-run-all
```

we then add the scripts

```json
"scripts": {
    "build": "run-p 'build.js' 'build.types'",
    "build.js": "webpack --mode=production",
    "build.types": "tsc --emitDeclarationOnly",
    "bundle": "run-s 'clear' 'build'",
    "clear": "rm -rf dist",
    "type-check": "tsc --noEmit",
    "type-check.watch": "npm run type-check -- --watch"
},
```

Next we want to run our server locally, for that we will use [nodemon]()

```zsh
npm install --save-dev @types/node nodemon ts-node
```

Create a `nodemon.json` file

```zsh
touch nodemon.js
```

and populate it with the following configuration:

```json
{
    "restartable": "rs",
    "ignore": [
        "**/*.test.ts",
        ".git",
        "node_modules"
    ],
    "watch": [
        "src"
    ],
    "ext": "ts"
}
```

Next we will setup eslint with support to typescript:

```zsh
npm install ---save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Create a configuration file for eslint

```zsh
touch .eslintrc
```
 and populate it with 

 ```json
 {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "eslint: recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ]
}
 ```

Next we want to ignore some folders when linting

```zsh
touch .eslintignore
```

and populate it with:

```
node_modules
dist
```

Next we will set up [prettier]()

```zsh
npm install --save-dev eslint-config-prettier
```

and in `.eslintrc` we add `prettier@typescript-eslint`

```json
...
    extends: [
        ...,
        "prettier/@typescript-eslint"
    ]
...
```


As good developers we will also write test and for that we will use [jest]()

```
npm install --save-dev jest @types/jest babel-jest
```

Once again we need to create a [configuration](link/to/jest/config) file:

```zsh
touch jest.config.js
```

and we populate it with 

```js
module.exports = {
    root: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    testRegex: '\\.test.ts?$',
    testPathIgnorePattern: [
        '<rootDir>/node_modules',
        '<rootDir>/dist',
        '<rootDir>/documentation',
    ]
}
```

To test that this setup works we just create a dummy test file, in src, to test if jest is working.

```
touch src/dummy.test.ts
```

Populate it with the following simple test:

```ts
describe('dummy test', () => {
    it('should work', () => {
        expect(true).toBeTruthy();
    });
});
```

To run our test we can just run the following command `npx jest` and our dummy test should pass

```
 PASS  src/dummy.test.ts
  dummy test
    ✓ should work (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.819s, estimated 1s
Ran all test suites.
```

Later on we might want to run our tests as a commit hook, or in our CI/CD pipeline, so it is best we create a script for it in `package.json`

```json
"test": "jest",
"test.watch": "jest --watch"
```

We verify it is working by running 

```zsh
npm run test
```

we have the same output as previously. With `test.watch` jest listens for changes in the files and reloads the test accordingly. We now make the test fail by changing `toBeTruthy` to `toBeFalsy`. Once we save, the test reruns and we see that it fails.

We can now delete our dummy test.

```zsh
rm src/dummy.test.ts 
```

Lastly we will let our linter know that we use jest. We will use [eslint-plugin-jest](path/to/plugin)

```zsh
npm install --save-dev eslint-plugin-jest
```

In the `.eslintrc` file we add: 

```json
...,
"plugins": [
    ...,
    "jest"
],
"extends": [
    ...,
    "plugin:jest:recommended"
]
...
```

Next we want to do is add some pre-commit hooks to run our linting. For that we will use [husky](path/to/husky)

```zsh
npm install --save-dev husky
```

Here once again, we will create a configuration file for husky:

```zsh
touch .huskyrc
```

and populate it with the following config.

```json
{
    "hooks": {
        "pre-commit": "run-p 'lint' 'test'"
    }
}
```

I like it as a pre-commit hook but feel free to change it to whatever suits you best

Lastly we might want to run this in a [docker](path/to/docker) container
