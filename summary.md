# 15. Environment Setup for Mac

## install nvm

## if nvm: command not found

> nano ~/.bash_profile or touch ~/.bach_profile
> Add source ~/.bachrc on ~/.bash_profile
> $ source ~/.bash_profile
> $ nvm

# 18. Yihua's VSCode font and settings

## VS Code extensions

> Rainbow Brackets
> Reactjs code snippets
> Material Icon Theme
> vscode-styled-components
> ESLint
> GraphQL
> Markdown All in One
> Path Intellisense

# 48. Deploying Our App

## git remote add origin git@github.com:pcsmomo/monsters-rolodex.git

## npm install --save gh-pages

## npm run deploy

# 66. E-commerce Homepage + SASS setup

## npx create-react-app crwn-clothing --template cra-template-pwa

## npm install --save node-sass

## git remote add origin git@github.com:pcsmomo/crwn-clothing.git

## To solve a SSH permission issue.

> https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

# 76. Routing In Our Project

## npm install --save react-router-dom

# 91. Adding a Project to Firebase

## npm install --save firebase

# 114. Setting Up Redux

## npm install --save redux redux-logger react-redux

# 130. Reselect Library

## npm install --save reselect

# 137. Checkout Item Component

## UTF-8 Dingbats Icons

> https://www.w3schools.com/charsets/ref_utf_dingbats.asp

# 141. Redux Persist

## npm install --save redux-persist

# 148. Memoizing selectCollection and collectionUrlParam

## npm install --save lodash.memoize

# 155. Stripe Integration

## npm install --save react-stripe-checkout

> Testing card number
> 4242 4242 4242 4242 -- Exp: 01/22 -- CVV: 123
> https://stripe.com/docs/testing#cards

# 159. Deploying To Heroku

## heroku insetall & setup

> heroku login
> heroku create noahdw-crwn-live --buildpack https://github.com/mars/create-react-app-buildpack.git
> git push heroku main/master
> It will deploy and build

## add domain name noahdw-crwn-live.herokuapp.com on firebase Authentication/Sign-in method

# 165. styled-components

## npm install --save styled-components

# 187. Redux Thunk

## npm install --save redux-thunk

# 196. redux-saga

## npm install --save redux-saga

# 226. Creating our Server Inside the Project

## mkdir client

## mv ./\* ./client

## touch package.json server.js

## copy package.json from the lecture

## npm install --save body-parser cors dotenv express stripe

## npm install --save-dev concurrently nodemon

# 232. Connecting Client To Server

## npm install --save axios

# 234. Deploying To Production

## heroku apps

## heroku git:remote -a noahdw-crwn-live

## heroku buildpacks

## heroku buildpacks:remove https://github.com/mars/create-react-app-buildpack.git

## heroku config:set STRIPE_SECRET_KEY=

## heroku open

# 249. Introduction To Apollo

## npm install --save apollo-boost react-apollo graphql

# 259. Note: Compose in next lesson

## npm install --save lodash

# 275. Gzipping and Compression

## npm install --save compression

# 289. Progressive Web Apps Examples

## https://pokedex.org/
