import express from 'express';
import { apolloServer } from 'graphql-tools';
import Schema from './data/schema';

const cors = require('cors');
const GRAPHQL_PORT = 80;

const graphQLServer = express();

graphQLServer.use('/graphql',cors(), apolloServer({
	graphiql: true,
	pretty: true,
	schema: Schema
  })
);

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
