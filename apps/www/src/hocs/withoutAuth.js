import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { isEmpty } from "lodash";
import { CircularProgress, NoSsr } from "@material-ui/core";

import { Center } from "@/components";
import { userIsLoggedIn } from "@/hooks";

const withoutAuth = Component => props => {
  const isLoggedIn = userIsLoggedIn();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (isLoggedIn) {
      const url = !isEmpty(redirect) ? redirect : "/";
      router.push(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  if (!isLoggedIn) return <Component {...props} />;

  return (
    <NoSsr>
      <Center position="absolute" width="100%" height="100%">
        <CircularProgress />
      </Center>
    </NoSsr>
  );
};

export default withoutAuth;
