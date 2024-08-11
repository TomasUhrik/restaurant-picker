# Cogent Restaurant picker

A mobile-first web app to help you choose a great venue for today's lunch.

Available for preview at [restaurant-picker-bice.vercel.app](https://restaurant-picker-bice.vercel.app)

[Current state of development + next steps](./docs/development.md)

Video preview of all features available on [Loom](https://www.loom.com/embed/80545b6e26ce4ffeb8e6ccd0646bd4a7?sid=702354e7-1f8f-4c08-99cd-0efd2726cdfa)

Demo showing the performance with poor internet connection available on [Loom](https://www.loom.com/share/cf6222ca36a846de89bab1ffe093200d?sid=f73011bd-cbfe-4de3-9ae6-4e28367665da)

## Features

- Suggests a random restaurant in the vicinity of CogentLabs office
- Displays relevant restaurant information
- Search for nearby restaurant by "food category" or "venue name"
- Ask for a different random restaurant

Read more about the features of this app in ["Product reasoning"](./docs/product.md)

## Tech

- Core: Typescript + Next.js
- Data: 4Square API
- Map: Google maps
- UI: ShadCN/ui + Tailwind CSS
- Global state management: Zustand
- Testing: Jest + react-testing-library + Cypress
- DevX: ESLint + Prettier + Husky
- Infra: Github actions + Vercel

Read more about the reasoning for the selection of these technologies in ["Tech reasoning"](./docs/tech.md)

## How to use

### Prerequisites

- Node.js
- Node package manager of choice (`yarn` preffered)

### Setup

1. Setup your env variables

- Create `.env.local` file in the root of this project
- Copy `.env.example` there and replace `X` with appropriate keys

2. `$ yarn install`
3. `$ yarn run prepare`

### Run app in development mode

`$ yarn dev`
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Test

#### Unit + integrations tests

- runs automatically during commits
- manual run
  `yarn run test`

#### e2e tests

`yarn run cypress:open`

### Deploy

All changes pushed to `main` branch automatically deploy to Vercel through Github actions
