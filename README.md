# CruzHacks 2024 Website

CruzHacks 2024 website built with React, Typescript, Tailwind, and hosted with
firebase. Website depends on firestore rules, indexes, and functions defined in
[CruzHacks 2024 backend](https://github.com/CruzHacks/cruzhacks-2024-backend).

## Getting Started

### How to Run

1. Clone this repository
2. Install [nvm](https://github.com/nvm-sh/nvm) to use a specific version of
   node; in this case, v18.18.2
   2a. run `command -v nvm` to check if nvm is installed correctly, should output `nvm`
3. Use `nvm install 18` and `nvm use 18` to use version 18 of node, you may have
   to redo this step each time you open terminal
4. Navigate to the root of the repository and run `yarn` to install all the
   dependencies
5. Find/create .env file according to .env.sample (optional: create/find
   .env.production for production environment)
6. Run `yarn start` to start the frontend

### How to Deploy

1. Install [Firebase CLI](https://firebase.google.com/docs/cli) to emulate
   hosting or deploy to staging. We recommend installing through npm via `npm
install -g firebase-tools`
2. Login using `firebase login`
3. Test the CLI is working properly and you have access to CruzHacks firebase
   projects using `firebase projects:list` (you may not have access to production
   for security reasons, however you need access to development to emulate:hosting
   locally)
4. Deploy to development or production using `yarn deploy:dev` or `yarn
deploy:prod`

## Available Scripts

- `yarn start` - starts a development server
- `yarn lint` - runs the linter for all typescript files
- `yarn format` - runs the prettier formatter for all typescript files
  <br></br>
- `yarn build` - creates a development build
- `yarn build:prod` - creates a production build
- `yarn preview` - preview the build
- `yarn emulate:hosting` create a build and emulate firebase hosting
  <br></br>
- `yarn deploy:dev` - deploy to firebase development project
  - as defined by `default` project and `development` target in
    [/.firebaserc](/.firebaserc)
- `yarn deploy:prod` - deploy to firebase production project
  - as defined by `production` project and target in [/.firebaserc](/.firebaserc)

## Design

- [CruzHacks 2024 Website Figma](<https://www.figma.com/file/IXAajiFoWwcPU70DFs6hRt/2024-Website?type=design&node-id=2%3A2208&mode=design&t=JUGVyFxn8iTvM5LQ-1](https://www.figma.com/file/IXAajiFoWwcPU70DFs6hRt/2024-Website?type=design&t=JUGVyFxn8iTvM5LQ-6)https://www.figma.com/file/IXAajiFoWwcPU70DFs6hRt/2024-Website?type=design&t=JUGVyFxn8iTvM5LQ-6>)

Site Map, Feature List, UI Mockups, Style Guide, etc.

## Contact

Reach out to 2024 CruzHacks Engineering Director
[Zack Traczyk](https://github.com/zacktraczyk) regarding any questions about the
codebase.
