# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 0.2.0 (2020-10-21)


### Features

* **auth:** add logout to auth.service. Add field 'redirectToMain' to user reducer. Add action clearUserData to types, reducer, action. Add function for logout from app to dashboard. Add axios interceptor for request (make all request with header authorization) ([049ed14](https://github.com/mWorkTime/web/commit/049ed1458b7cd6ddfeb6b3cd81259f2729c50def))
* **auth pages:** add auth container to pages. Add login and register forms. Add auth validators for these forms. Add styles. ([3f66aed](https://github.com/mWorkTime/web/commit/3f66aedb36091a5b061f638df1b7f3f14d0c4dce))
* **confirm email address:** add confirm - page, service, route. Using the page in navigation by app. Add function confirmEmail to the service. Add to the page logic for confirm email and redirect on login page. ([2c9e076](https://github.com/mWorkTime/web/commit/2c9e076d587e74f9d9a910c6b55b0489273b9a7a))
* **enhance auth actions:** add middleware thunk - use in the store. Add new types - CLEAR_AUTH_MESSAGES, SET_DISABLED and etc. Add function clearAllMessages to auth reducer. Enhance logic in the actions - registerUser, loginUser. ([61e5024](https://github.com/mWorkTime/web/commit/61e502482120a5063f74b87b9a5d8beb4dbf7b60))
* **enhance confirm:** add confirm actions, reducer. Add functions for putting confirm (success, error) messages to store. ([74d24e6](https://github.com/mWorkTime/web/commit/74d24e600c069b65304630e149ab007497426c36))
* **images, logo:** add new images, logo, icon. Add new font - Roboto. Add logo to sidebar. ([da4e164](https://github.com/mWorkTime/web/commit/da4e16407721583c815e4406dd3a8af3dce754fe))
* **initial app:** add necessary packages to web - antd, react-redux, redux, react-router; server - mongoose, shortid, jsonwebtoken, express-validator, express-jwt, express, dotenv, debug, cookie-parser, body-parser. Add - readme, license. ([d38c7ab](https://github.com/mWorkTime/web/commit/d38c7ab8c5f59e4e56b6f9b778bc49497b29b6f2))
* **login form:** add redirect in login component to dashboard page. Add component loader. Add field 'redirect' to auth.reducer. ([6df2a19](https://github.com/mWorkTime/web/commit/6df2a193a457d38a2a5e74352cb25fad6da38fa0))
* **page 404:** add component - page-not-found. Add styles to the component. In sidebar - change links, labels and keys. ([02b0124](https://github.com/mWorkTime/web/commit/02b0124cbf3524c6e2814de1623ec228672aefb8))
* **readme:** update README.md in server and web. ([23b7d2b](https://github.com/mWorkTime/web/commit/23b7d2b56a99f993f765657961480744aba076c4))
* **refactor components register and login:** add types with some constants. Add auth-user.reducer. Add functions to auth.action - registerUser, loginUser and etc. Refactor register and login components using redux - state, dispatch actions for register or login user in app. ([bb0d44f](https://github.com/mWorkTime/web/commit/bb0d44fa9c3b0468126816290a583dac31421a7d))
* **refresh token:** server - add route '/auth/refresh', add refreshToken to auth.controller and to auth.service. Add model blocklist. Web - add an automatic token update when the response status is 401, and a store update to axios-app.js. ([89d56cd](https://github.com/mWorkTime/web/commit/89d56cd48856e2057788c3853136d05834897089))
* **resend link:** add resend component. Add function resendConfirmLink to confirm.service. Add the resend to login component. Server: add - route resend; resend-link validator for email. ([e7af81c](https://github.com/mWorkTime/web/commit/e7af81c4f17c8ec38b74d829e5a610dc5382e20f))
* **sidebar:** add sidebar - component, action, reducer. Add burger component. Add styles for dashboard, sidebar, burger. Add routes - for authorized and unauthorized users. ([cdf47e5](https://github.com/mWorkTime/web/commit/cdf47e5ab2518dc3c1ac1ded8e1ed50e89ed64ef))
* **styles, store, routing:** add package - react-router-dom, add to app routes - for pages welcome, register, login. Add welcome page with some content and links. Add global store to project. Add global styles, variables. Add styles to the welcome. Add errorBoundary. ([786ce4a](https://github.com/mWorkTime/web/commit/786ce4a4c86a958e88d174d62c9c460d0f9fd158))
* **user:** add user - reducer, action, service. Add function in the service to receive data about user from the server. Add types. Add action for making request. ([11c3040](https://github.com/mWorkTime/web/commit/11c3040e5de3bb84c5867969005a216961c2bd29))
* **user-dashboard:** add dashboard - reducer. Add user-header. Cover page user-dashboard. Add styles for elements in component the dashboard. ([da03786](https://github.com/mWorkTime/web/commit/da037867d38978883dbf84852c8d6930c510286e))
* **user-dashboard:** add design for tablet, middle, small mobile devices. Change favicon. ([09d43fe](https://github.com/mWorkTime/web/commit/09d43fe0e750caf1e63455bd861f314570f73d35))
* **user, dashboard:** server - add timestamps to model, remove cookie from auth service. Web - add folder items with dashboard, sidebar data. Add headers to user service. Add to sidebar new action 'showSidebar'. Add dashboard folder to components/user.  Add user-dashboard and user dashboard-top to the dashboard. Add loader to the user-dashboard.js when data is loading. ([d431705](https://github.com/mWorkTime/web/commit/d43170557fe0984ccf9198a0d4fcbe0f01b2c4ad))
* **web: enhance auth forms, server: token, services:** add clear all fields to auth forms. Add clear all messages in login and register page. Add messages that are came from confirm component. Add to token model some fields. Add to email registration - styles. ([8be3e51](https://github.com/mWorkTime/web/commit/8be3e51ed261c2f6342ccc8a6e4c231fd6289b68))
* **web: env:** add .env file with some constants. add the constants to the axios-app and clear-set-auth. Add  'CLEAR_REDIRECT_TO_MAIN' to user-reducer, types and auth.action. ([1f928f9](https://github.com/mWorkTime/web/commit/1f928f96f70be1e794ab92b8b3fd2550b555c43c))
* **web: token:** add field 'token' to user reducer. Add redirect to dashboard page from login using hook useHistory. Remove cookie. Add token to localStorage. Add type and action setAuthToken. ([f94efde](https://github.com/mWorkTime/web/commit/f94efde39f55b0070be5041a4532fbb9495ffdb2))
* **web: user:** add conversion of received data, which comes from the server, and add this data to userData (user.action). ([e7c7524](https://github.com/mWorkTime/web/commit/e7c75242ff23b6050f025d4bf37c164926297967))
* **web: UserDashboardItem:** add component user-dashboard-item with props - firstItem, secondItem. Add dictionary-items to items. Add UserDashboardItem to UserDashboardTop. ([d18a94f](https://github.com/mWorkTime/web/commit/d18a94f65d1656172f6187fca6b06809e605f09d))
* **working registration and login forms:** add auth.service with functions that are sent data to server and registered or login user in app. Add module local storage. Add util clear-set-auth - that is cleared or set some data in cookie and localStorage. Add api interceptor - for catching errors and display them in message to user. ([bd11c09](https://github.com/mWorkTime/web/commit/bd11c09b245cf8178a44a17ea8b9e7cf7ffb42ad))


### Bug Fixes

* **web axios interceptor:** change window.location on return Promise reject. Add check types of data (equal object).Add media queries to auth, welcome styles. ([6ace698](https://github.com/mWorkTime/web/commit/6ace698de0b3b31e9c0ff80cad12cab50dee9868))
