# HOWTO INSTALL 
Please follow the steps bellow to install docusaurus for local development and build the static website.

# Template

This template is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator, to provide a documentation system.

# Prerequistes

### Install NodeJS :
- Windows : 
Visit - https://nodejs.org/en/download/current/ download the Windows Installer .msi (64-bit) file and install the package.

- Linux(Debian):

````console
sudo apt-get install curl software-properties-common 
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - 
apt update
apt install nodejs npm
npm -v
nvm -v
````

# Docusaurus 

##  1 - Clone repo and install

```console
git clone https://github.com/paulo-amaral/easy-sop-docs.git
cd easy-sop-docs
npm install
```

## 2 - Local Development

```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.


## 3 - Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

## 4 - Deployment with Docker and Docker compose

- Install docker-ce and docker compose with this script : https://gist.github.com/paulo-amaral/d8995b42d6fc3b7a0984ee39ac927550 
- Clone repo :

  ```console
  git clone https://github.com/paulo-amaral/easy-sop-docs.git
  cd easy-sop-docs
  docker-compose up -d --build
  ````
  

## Install search
Docussaurus doesn't have support to offline search, but in this deploy(check docusaurus docs).

The search  is based on: 
https://github.com/lelouch77/docusaurus-lunr-search

## Setup docusaurus for mermaid(diagrams)
``
npm i mdx-mermaid mermaid
``
### Configure in Docusaurus

Add

```js
require('mdx-mermaid')
```

to `remarkPlugins`

into `docusaurus.config.js`

```
presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [require('mdx-mermaid')],
```

