# 15. Environment Setup for Mac

## install nvm

## if nvm: command not found

- nano ~/.bash_profile or touch ~/.bach_profile
- Add source ~/.bachrc on ~/.bash_profile
- $ source ~/.bash_profile
- $ nvm

# 18. Yihua's VSCode font and settings

## VS Code extensions

- Rainbow Brackets
- Reactjs code snippets
- Material Icon Theme
- vscode-styled-components
- ESLint
- GraphQL
- Markdown All in One
- Path Intellisense

# 48. Deploying Our App

## git remote add origin git@github.com:pcsmomo/monsters-rolodex.git

```
npm install --save gh-pages
```

```
npm run deploy
```

# 66. E-commerce Homepage + SASS setup

```
npx create-react-app crwn-clothing --template cra-template-pwa
```

```
npm install --save node-sass
```

```
git remote add origin git@github.com:pcsmomo/crwn-clothing.git
```

## To solve a SSH permission issue.

> https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

# 76. Routing In Our Project

```
npm install --save react-router-dom
```

# 91. Adding a Project to Firebase

```
npm install --save firebase
```

# 114. Setting Up Redux

```
npm install --save redux redux-logger react-redux
```

# 130. Reselect Library

```
npm install --save reselect
```

# 137. Checkout Item Component

## UTF-8 Dingbats Icons

> [UTF-8 Dingbats](https://www.w3schools.com/charsets/ref_utf_dingbats.asp)

# 141. Redux Persist

```
npm install --save redux-persist
```

# 148. Memoizing selectCollection and collectionUrlParam

```
npm install --save lodash.memoize
```

# 155. Stripe Integration

```
npm install --save react-stripe-checkout
```

> Testing card number
> 4242 4242 4242 4242 -- Exp: 01/22 -- CVV: 123
> https://stripe.com/docs/testing#cards

# 159. Deploying To Heroku

## heroku insetall & setup

```
> heroku login
> heroku create noahdw-crwn-live --buildpack https://github.com/mars/create-react-app-buildpack.git
> git push heroku main/master
// It will deploy and build
```

## add domain name noahdw-crwn-live.herokuapp.com on firebase Authentication/Sign-in method

# 165. styled-components

```
npm install --save styled-components
```

# 187. Redux Thunk

```
npm install --save redux-thunk
```

# 196. redux-saga

```
npm install --save redux-saga
```

# 226. Creating our Server Inside the Project

```
> mkdir client
> mv ./\* ./client
> touch package.json server.js
```

- copy package.json from the lecture

```
npm install --save body-parser cors dotenv express stripe
npm install --save-dev concurrently nodemon
```

# 232. Connecting Client To Server

```
npm install --save axios
```

# 234. Deploying To Production

```
> heroku apps
> heroku git:remote -a noahdw-crwn-live
> heroku buildpacks
> heroku buildpacks:remove https://github.com/mars/create-react-app-buildpack.git
> heroku config:set STRIPE_SECRET_KEY=
> heroku open
```

# 249. Introduction To Apollo

```
npm install --save apollo-boost react-apollo graphql
```

# 259. Note: Compose in next lesson

```
npm install --save lodash
```

# 275. Gzipping and Compression

```
npm install --save compression
```

# 289. Progressive Web Apps Examples

[PokeDex](https://pokedex.org/)

# 290. PWA - HTTPS 06:11

[Let's Encrypt](https://letsencrypt.org/)
[CloudFlare](https://www.cloudflare.com/)

## 292. Resources: PWA - HTTPS

[Favicon Generator](https://realfavicongenerator.net/)

# 294. PWA - Service Workers 13:15

## Manually build service-worker

```
npm install --save sw-precache
```

- "build": "react-scripts build && sw-precache --config=sw-precache-config.js"

and some more steps

# 298. Converting Our App To PWA

```
npm add --save express-sslify
```

# 308. Testing Libraries

- Jest : fast and all in one.
- Mocha : a bit hard to set up but more flexible
- Mocha, Chai, Sinon : popular test group of three
- Istanbul : Coverage tool
- Enzyme : to test React Components' output
- Nightmare, Webdriverio, TestCafe, Nightmare, Cypress : automation testing libraries

# 314. Setting Up Jest

```
npm install --save-dev jest
```

# 317. Quick Note: Upcoming API Endpoint

- [Star Wars API](http://swapi.py4e.com/api/people/)
- [Numbers API](http://numbersapi.com/#42)
- [Chuck Norris API](https://api.chucknorris.io/)
- [Pokemon API](https://pokeapi.co/)

# 318. Asynchronous Tests

```
npm install --save-dev node-fetch
```

# 320. Resources: Jest Cheat Sheet

## [Jest Cheat Sheet](https://github.com/sapegin/jest-cheat-sheet)

# 325. Introduction To Enzyme

```
npm install --save-dev enzyme @wojtekmaj/enzyme-adapter-react-17
```
