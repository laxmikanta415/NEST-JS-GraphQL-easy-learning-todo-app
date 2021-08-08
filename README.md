# Simple and small Graph QL + NEST JS project for beginners

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
 
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

The goal of creating the repository is to make developer learn how to use GraphQL and NEST JS.

## Installation

```bash
$ npm install
```

## Running the app

In app.module.ts use your database credentials.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Graph QL queries:

### Mutations & Queries

```
mutation createTodo($createTodo: TodoInput!){
  create( todo: $createTodo) {
    title
    id
  }
}

mutation updateTodo($updateTodo: TodoInput!, $updateTodoId: Float!){
  update(id: $updateTodoId, todo: $updateTodo){
    title
    id
  }
}

mutation removeTodo($deleteTodoId: Float!){
  remove(id:$deleteTodoId){
    id
  }
}

query listTodos{
  items {
    id
    title
  }
}

query todoDetails($id: Float!){
  item(id: $id){
    id
    title
  }
}
```

### Query Variables

```
{
  "createTodo": {
    "title": "Mai Yahan hu bhai"
  },
  "id": 8,
  "updateTodo":{
    "title":"Mai update ho gaya bhai"
  },
  "updateTodoId": 8,
  "deleteTodoId": 7
}
```

test PR
