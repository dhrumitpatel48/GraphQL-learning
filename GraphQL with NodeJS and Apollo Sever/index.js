const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./type-definitions");
const { resolvers } = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is: ${url} :)`);
});