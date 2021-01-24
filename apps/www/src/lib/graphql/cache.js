import { InMemoryCache } from "@apollo/client";

const isClient = typeof window !== "undefined";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn() {
          return isLoggedInVar();
        },
      },
    },
  },
});

export const isLoggedInVar = cache.makeVar(
  isClient ? localStorage.getItem("token") : null
);
