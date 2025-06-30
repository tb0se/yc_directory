# YC Directory 

## About

A NextJS full stack application called YC directory

### Built with

- [![React][react]][react-url]
- [![NextJS][nextjs]][nextjs-url]
- [![Typescript][typescript]][typescript-url]
- [![Sanity][sanity]][sanity-url]
- [![Sentry][sentry]][sentry-url]

## Getting Started

### Installation

1. Install the required node modules
    ```bash
    pnpm i
    ```

### Setup

1. Generate a auth secret using the Auth.js CLI,
    ```bash
    npx auth secret
    ```
2. The above command should have created a `env.local` file with a `AUTH_SECRET` variable

3. Add the following variables to the `env.local` file:
    ```bash
    AUTH_SECRET="" # added by Auth.js
    AUTH_GITHUB_ID="" # Github OAuth App
    AUTH_GITHUB_SECRET="" # Github OAuth App
    NEXT_PUBLIC_SANITY_PROJECT_ID=""
    NEXT_PUBLIC_SANITY_DATASET=""
    NEXT_PUBLIC_SANITY_API_VERSION="vX"
    SANITY_API_TOKEN=""
    ```
    Add your actual credentials from Github and Sanity.

### Usage

To run the development server:

```bash
pnpm dev
```

 - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 - Open [https://localhost:3000/studio](https://localhost:3000/studio) to access Sanity

 [typescript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[react]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://react.dev/
[tailwindcss]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwindcss-url]: https://tailwindcss.com/
[nextjs]: https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[nextjs-url]: https://nextjs.org/
[sentry]: https://img.shields.io/badge/Sentry-black?style=for-the-badge&logo=Sentry&logoColor=#362D59
[sentry-url]: https://sentry.io/welcome/
[sanity]: https://img.shields.io/badge/sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white
[sanity-url]: https://www.sanity.io/