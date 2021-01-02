import React from "react";
import { useRouter } from "next/router";
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_ME } from "@work-project/graphql";
import { CircularProgress, NoSsr } from "@material-ui/core";

import { Center } from "@/components";
import { isLoggedInVar } from "@/lib/graphql/cache";

const withAuth = Component => props => {
  const router = useRouter();
  const client = useApolloClient();
  const { loading, error, data } = useQuery(GET_ME, {
    onError: () => {
      client.cache.evict({ fieldName: "me" });
      client.cache.gc();
      localStorage.clear();
      isLoggedInVar(false);
      router.push({
        pathname: "/landingPage",
      });
    },
  });

  if (!loading && !error && data) return <Component {...props} />;

  return (
    <NoSsr>
      <Center position="absolute" width="100%" height="100%">
        <CircularProgress />
      </Center>
    </NoSsr>
  );
};

export default withAuth;
