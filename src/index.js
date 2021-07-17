const { ApolloServer, gql } = require('apollo-server');

const { resolvers } = require('./resolvers');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String
        active: Boolean!
    }

    type Post {
        _id: ID!
        title: String!
        content: String
        author: User!
    }

    type Query {
        users: [User!]!
        getUserByEmail(email: String!): User
    }

    type Mutation {
        createUser(name: String!, email: String!): User!
    }
`;

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => { console.log(`Server started at ${url}`); });
