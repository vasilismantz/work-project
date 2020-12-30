import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "@work-project/graphql";

const userIsLoggedIn = () => {
  const { data } = useQuery(IS_LOGGED_IN);
  const isClient = typeof window !== "undefined";

  return (isClient && data.isLoggedIn) || false;
};

export default userIsLoggedIn;
