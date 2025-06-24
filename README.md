# YC Directory 

## About

A NextJS full stack application

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
    ```

### Usage

To run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.