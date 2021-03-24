import React from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './graphql/config/initApollo';

import Table from './components/Table';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Table />
    </ApolloProvider>
  );
}

export default App;
