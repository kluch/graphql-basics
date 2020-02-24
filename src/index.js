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

const users = [{
        id: '1',
        name: 'Shaun',
        email: 's@g.com',
        age: 29
    },
    {
        id: '2',
        name: 'Shaun2',
        email: 's@g.com2',
        age: 29
    },
    {
        id: '3',
        name: 'Piet',
        email: 's@g.com3'
    }
]

const posts = [{
        id: '1',
        title: 'Post 1',
        body: 'test',
        published: true
    },
    {
        id: '2',
        title: 'Post 2',
        body: 'lalala',
        published: true
    },
    {
        id: '3',
        title: 'Post 3',
        body: 'apex yass',
        published: false
    }
]
// Type defs (schema)
const typeDefs = `
    type Query {
        me: User!
        post: Post!
        users(query: String): [User!]!
        posts(query: String): [Post!]!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`;
// Resolvers
const resolvers = {
    Query: {
        users(parent, args, ctx, info) {
            if (args.query) {
                return users.filter(elem => elem.name.toLowerCase().includes(args.query.toLowerCase()));
            } else
                return users;
        },
        posts(parent, args, ctx, info) {
            if (args.query) {
                return posts.filter(elem => elem.title.toLowerCase().includes(args.query.toLowerCase()) || elem.body.toLowerCase().includes(args.query.toLowerCase()));
            } else
                return posts;
        },
        me() {
            return {
                id: 1,
                name: "Shaun",
                email: "s@g.com"
            }
        },
        post() {
            return {
                id: 1,
                title: "Test T",
                body: "Test B",
                published: true
            }
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