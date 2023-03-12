# [📈 re:doubt App](https://app.redoubt.online/)

re:doubt is a powerful tool for TON blockchain research, complete with all the tools you need to discover, explore, and visualize vast amounts of blockchain data; lets anyone, anywhere learn about crypto hacks, scams, and fraudulent activity so they can more safely participate in the growing crypto economy.

## 🔧 Setting up Local Development

Required:

-   [Node v16](https://nodejs.org/download/release/latest-v16.x/)
-   [Yarn](https://classic.yarnpkg.com/en/docs/install/)
-   [Git](https://git-scm.com/downloads)

Recommended:

-   [Prettier](https://prettier.io/) plugin [for your IDE](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Install the deps and start a dev server:

```bash
$ yarn
$ yarn prepare
$ yarn dev
```

The site is now running at `http://localhost:3006`!
Open the source code and start editing!

## Layout

The app is written in [React 17](https://reactjs.org/).

We use [Redux Toolkit](https://redux-toolkit.js.org/) for state management;

[Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview), [React Query](https://react-query-v3.tanstack.com/) and [Axios](https://axios-http.com/) for requests;

Our UI library is [MUI](https://mui.com/) and we use [emotion/styled](https://emotion.sh/docs/styled) approach for styles.

```
./src/
├── api/          // API clients, external data types
├── components/   // App components
├── constants/    // Reusable constants
├── hooks/        // Custom hooks with common logic
├── layouts/      // Page layouts
├── pages/        // App pages
├── store/        // Redux toolkit slices
├── styles/       // Global stylesheets
└── utils/        // Helper and utility functions

./.husky/
└── pre-commit    // Git hooks

./.github/
└── workflows/    // GitHub CI/CD jobs

./public/
├── img/          // Images to bundle
└── meta/         // App base metadata
```
