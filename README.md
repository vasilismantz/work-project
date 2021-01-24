<h1 align="center">
  <a style="text-decoration: none; color: white;" href="https://todolist1.vercel.app" target="_blank" rel="noreferrer">
  <br>
  📚 Todo List 📚
  <br>
  </a>
</h1>

<h4 align="center">A powerful todo list built with React, Node.Js, GraphQL, MongoDB ...</h4>
<h6 align="center"><a href="https://todolist1.vercel.app">https://todolist1.vercel.app</a></h6>

<p align="center">
  <img src="https://user-images.githubusercontent.com/56836643/105639497-fc7bf280-5e78-11eb-882a-0cf3a7cb64a1.gif">
</p>

## Description

This Todo list was made using [Next.js](https://nextjs.org/), [React](https://github.com/facebook/react#react-----), [Apollo Client](https://www.apollographql.com/docs/react/) and [Material UI](https://github.com/mui-org/material-ui#material-ui) amongst other libraries on the frontend and [Node.js](https://nodejs.org/en/) with [Apollo Server](https://www.apollographql.com/docs/apollo-server/) and [GraphQL](https://graphql.org/) on the backend. As for the database, I used [MongoDB](https://www.mongodb.com/2) and [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for hosting.

### Features

- User authentication and authorization with [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) and personally developed [authentication middleware hocs](https://github.com/vasilismantz/work-project/tree/develop/apps/www/src/hocs)
- User Password encryption using hashing with [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- Responsive design and use of [material-ui-icons](https://material-ui.com/components/material-icons/)
- Use of React [ContextAPI](https://reactjs.org/docs/context.html)
- Storage of environmental variables with [dotenv](https://www.npmjs.com/package/dotenv)
- Detailed project development with precise and simple commit messages ([source](https://chris.beams.io/posts/git-commit/))

### Experience

- Greatly improved my skills as a backend developer by building a solid full stack application with complex entities and a simple and self exlanatory api
- Vastly imporved my css skills
- Learned more about CI/CD with [Vercel](https://vercel.com/docs)
- Introduced myself to the world of [GraphQL](https://graphql.org/)
- Gained more advanced React experience [ContextAPI](https://reactjs.org/docs/context.html)
- Greatly improved my development process and monitoring through the correct use of git branches, commit messages, pull requests, stashing and many more
- Got one step further to writing cleaner and more self explanatory code

## Execute locally

```bash
# Clone this repository
$ git clone https://github.com/vasilismantz/work-project.git

# Go into the repository
$ cd work-project

# Install dependencies
$ yarn install
```

Copy and update the environment variables

```bash
cp ./apps/api/.env.example ./apps/api/.env
cp ./apps/www/.env.example ./apps/www/.env
```

Run the app

- For the backend

```bash
$ yarn run dev:api
```

- For the frontend

```bash
$ yarn run dev:www
```

### To install a new library

Use `yarn workspace <app> add <library@version>`. The following example shows how to install react v16.13.1 for apps/www:

```bash
yarn workspace @work-project/www add react@16.13.1
```


## Known issues

- [here](https://github.com/vasilismantz/work-project/issues) along with some other improvements planned.