import React from 'react';
import apolloClient from './graphql/config/initApollo';
import { ApolloProvider } from '@apollo/client';

import Table from './components/Table';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Table />
    </ApolloProvider>
  );
}

export default App;
