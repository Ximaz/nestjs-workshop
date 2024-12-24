# Setup

## NodeJS

In this workshop, we will create an HTTP REST server using NestJS and NodeJS.
First of all, make sure you have **[NodeJS >= 22.12.0](https://nodejs.org/en/download/package-manager)**
installed, allowing you to use the NestJS framework.

> The language MUST NOT be an issue in this workshop, if you're struggling with
> JavaScript and / or TypeScript, ask for help!

## pnpm

pnpm will be our package manager for todays workshop. It's better than NPM so
we will use it to manage our NestJS dependencies.

Follow the instruction from [this website](https://pnpm.io/installation).

Once done, you can go to the `rest-api` folder and install the dependencies :
```bash
pnpm install
```

# Test

To test that everything works as expected, run the following command :
```bash
pnpm start:dev
```

You should be able to reach this address on your web browser : `http://localhost:3000`.
