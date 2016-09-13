# donejs-vscode

[![Build Status](https://travis-ci.org/icanjs/donejs-vscode.svg?branch=master)](https://travis-ci.org/icanjs/donejs-vscode)
[![npm version](https://badge.fury.io/js/donejs-vscode.svg)](http://badge.fury.io/js/donejs-vscode)

Add a Visual Studio Code launch.json to your DoneJS app.

[Visual Studio Code](https://code.visualstudio.com/) is a cross-platform app for writing code and it comes with an excellent Node.js debugger.  This generator will setup your project to work with VS Code and is especially handy for debugging the server-side rendered part of a DoneJS application.

![test](https://github.com/icanjs/donejs-vscode/blob/master/vscode.png?raw=true)

## Using the generator

To add this generator to your DoneJS application, run

```
donejs add vscode
```

A launch.json file will automatically be built from the `develop` script in the project's package.json.  

> Note: This will overwrite any existing `/.vscode/launch.json` you have in place.  But, if you are just staring a new project, you probably won't have one in place, yet.

## Developing

To make changes to this generator, clone the repository and install the dependencies

```
git clone git@github.com:icanjs/donejs-vscode.git
cd donejs-vscode
npm install
```

Then you can run the tests with

```
npm test
```
