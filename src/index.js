import {
    GraphQLServer
} from "graphql-yoga";

/*  Scalar Types:
        String
        Boolean
        Int
        Float
        ID
*/

// Type defs (schema)
const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean
    }
`;
// Resolvers
const resolvers = {
    Query: {
        title() {
            return "Item title"
        },
        releaseYear() {
            return 2019
        },
        price() {
            return 29;
        },
        rating() {
            return null;
        },
        inStock() {
            return false
        },
    }
}

const graphqlServer = new GraphQLServer({
    typeDefs,
    resolvers
});

graphqlServer.start(() => {
    console.log(`Server Up!`);

});