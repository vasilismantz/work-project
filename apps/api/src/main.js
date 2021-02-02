require("dotenv").config();
import { ApolloServer } from "apollo-server";
import jwt from "jsonwebtoken";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import playground from "./playground";
import connect from "./lib/mongoose";
import {
  User,
  userLoader,
  Project,
  projectLoader,
  Task,
  taskLoader,
} from "./models";

(async () => {
  await connect();
})();

const getUser = async tokenWithBearer => {
  try {
    if (tokenWithBearer) {
      const token = tokenWithBearer.split(" ")[1];
      const tokenVerify = jwt.verify(token, process.env.JWT_SECRET);
      return await User.findOne({ _id: tokenVerify.userId });
    }
    return null;
  } catch (err) {
    return null;
  }
};

const isProduction = process.env.NODE_ENV === "production";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    const tokenWithBearer = req ? req.headers.authorization : "";
    const user = await getUser(tokenWithBearer);

    return {
      user,
      models: { User, Project, Task },
      loaders: { userLoader, projectLoader, taskLoader },
      req,
      res,
    };
  },
  playground: !isProduction && playground,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
