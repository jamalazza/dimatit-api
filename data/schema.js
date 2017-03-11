import { makeExecutableSchema } from 'graphql-tools';

import articleSchema from './article/article-schema';               //Api des articles
import clientSchema from './client/client-schema';                  //Api des clients
import fournisseurSchema from './fournisseur/fournisseur-schema';   //Api fournisseurs
import opSchema from './op/op-schema';                           //Api ordre de paiment

import personSchema from './person/person-schema';
import { allResolvers } from './resolvers';

const rootSchema = `
    type Query {
      client(codeClient: String): Client
      clientsModified(dateModification: String): [Client]    
      
      fournisseur(codeFournisseur: String): Fournisseur
      fournisseurSearch(nomFournisseur: String): [Fournisseur]
      
      op(numOp: String): Op
      opLatest : [Op]
      
      article(codeArt: String) : Article
      
      searchPerson(query: String): [Person]
      getPerson(sAMAccountName: String): Person
    }
    
    schema {
      query: Query
      mutation: Mutation
    }
    
     type Mutation {
       createOp(input: OpInput): Op
     }
`;

export default makeExecutableSchema({
    typeDefs: [rootSchema, clientSchema, opSchema, fournisseurSchema, articleSchema, personSchema],
    resolvers: allResolvers,
});