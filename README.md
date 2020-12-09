# Work project

This is a Node.js, GraphQL, React.js project. The goal of this project is to showcase my skills as a web developer.

### To install dependencies

```bash
yarn install
```

### To execute a dev environment

1. Copy & update the environment variables:

```bash
cp ./apps/api/.env.example ./apps/api/.env
cp ./apps/www/.env.example ./apps/www/.env
```

2. Run a dev environment

- For the api:

```bash
yarn run dev:api
```

- For www:

```bash
yarn run dev:www
```

### To install a new library

Use `yarn workspace <app> add <library@version>`. The following example shows how to install react v16.13.1 for apps/www:

```bash
yarn workspace @work-project/www add react@16.13.1
```
