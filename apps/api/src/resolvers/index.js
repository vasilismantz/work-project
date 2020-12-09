import { resolvers as resolversScalars } from "graphql-scalars";

import Mutation from "./mutation";
import Query from "./query";

export default {
  ...resolversScalars,
  Node: {
    __resolveType() {
      return null;
    },
  },
  Mutation,
  Query,
};
