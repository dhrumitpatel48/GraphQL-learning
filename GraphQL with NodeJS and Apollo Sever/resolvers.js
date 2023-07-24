const { UserList } = require("./dummy-data");
const resolvers = {
  Query: {
    // USER RESOLVERS
    users: () => {
      return UserList;
    },
  },
};

module.exports = { resolvers };
