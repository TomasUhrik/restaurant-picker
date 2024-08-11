# Technical reasoning

To fulfill requirements described in ["Product reasoning"](./product.md) I have made following technical decisions:

## Core

### Typescript

Typescript over plain Javascript for type safety and better developer experience

### React

React was mandated by the assignment requirements

### Next.js

Since speed and performance (especially the speed of first meaningful render) were one of the requirements I wanted to leverage the react server-side components introduced in React 19. To use react server-side components, the React team recommends to use one of the React meta-frameworks rather than setting it up on your own.

Alternatives considered:

- Classic SSR without react server-side components like Remix / Gatsby
- Fully client side app

## UI

### Tailwind CSS

To speed up UI development I've chosen to leverage Tailwind CSS to create my styles.

Alternatives considered:

- plain CSS
- CSS-in-JS like `styled-components` or `Emotion`

### ShadCN/ui

To speed up development and ensure accessability I've decided to use an open-source component library. I've ended up using ShadCN for it's sleek look, accessibility through RadixUI and compatibility with Tailwind CSS.

Alternatives considered:

- No UI library
- Traditional design-systems like `MaterialUI`

## Global state management

Thanks to the use of react server-side components there is not much need for state-management let alone global state management. The only reason why I've introduced global state at all was to have a way for individual pages to be able to communicate with the `Map` component which lives in the `layout` layer above them so that the `Map` doesn't get remounted on every page change.

I've chosen `zustand` for its simplicity.

Alternatives considered:

- Redux
- React-context

## Testing

`Jest` + `react-testing-library` + `Cypress` were chosen to cover 3 types of tests: `unit`, `component integration` and `e2e`.

Alternatives considered:

- ViTest (might switch as Jest is making problems)
- Playwright

## Infra

Github actions + Vercel deployments were chosen for their simplicity and compatibility.
