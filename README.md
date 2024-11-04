[![GitHub release](https://img.shields.io/github/release/docker/login-action.svg?style=flat-square)](https://github.com/docker/login-action/releases/latest)
[![GitHub marketplace](https://img.shields.io/badge/marketplace-docker--login-blue?logo=github&style=flat-square)](https://github.com/marketplace/actions/docker-login)
[![CI workflow](https://img.shields.io/github/actions/workflow/status/docker/login-action/ci.yml?branch=master&label=ci&logo=github&style=flat-square)](https://github.com/docker/login-action/actions?workflow=ci)
[![Test workflow](https://img.shields.io/github/actions/workflow/status/docker/login-action/test.yml?branch=master&label=test&logo=github&style=flat-square)](https://github.com/docker/login-action/actions?workflow=test)
[![Codecov](https://img.shields.io/codecov/c/github/docker/login-action?logo=codecov&style=flat-square)](https://codecov.io/gh/docker/login-action)

## About

GitHub Action to login against a Docker registry.

![Screenshot](.github/docker-login.png)

___


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
 docker build -t nextjs-docker-app .
  docker run -p 3001:3000 nextjs-docker-app