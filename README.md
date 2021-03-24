# Graphql-CRUD

A React project that displays a Table with CRUD funtionality using [GraphQL](https://graphql.org/) along with [Apollo GraphQL](https://www.apollographql.com/docs/react/). Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The GraphQL requests are mocked using [MSW](https://mswjs.io/) API mocking library.

### Technologies used:

- React
- Graphq
- Apollo GraphQL Client
- MSW

### Features

- Table represents data.json with offset-based pagination. Clicking `Load more` button will query 6 more items.
- Table can be sorted using server-side sorting by clicking a `Column`.
- When clicking a row, it becomes editable. After clicking `save changes` button the updated entity is sent to the server.
- Rows can be deleted by clicking a `delete` button.

### Installation

Clone the repository, then install the required dependencied with `npm i`.

```sh
npm start
```
