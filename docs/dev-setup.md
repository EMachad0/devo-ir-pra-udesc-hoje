# Dev Setup

## Required Tools

- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org/)

## Recommended Tools

- [asdf](https://asdf-vm.com/) - Version manager for multiple languages
- [WebStorm](https://www.jetbrains.com/webstorm/) - IDE for web development

## Setup

This tutorial assumes you have already installed all the required and recommended tools. You can adapt this tutorial to your own environment at your own risk.

1. Clone the repository

```bash
git clone 'https://github.com/EMachad0/devo-ir-pra-udesc-hoje.git'
cd devo-ir-pra-udesc-hoje
```

2. Make sure you have the correct Node.js version

```bash
node -v
```

if the version is not `v20.13.1`, you can use `asdf` to install the correct version

```bash
asdf add plugin nodejs
asdf install nodejs 20.13.1
```

3. Install the dependencies

```bash
npm install yarn -g
yarn install
```

4. Run the project

```bash
yarn dev
```
