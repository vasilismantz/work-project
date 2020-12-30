import React from "react";
import withApollo from "next-with-apollo";
import { ApolloProvider } from "@apollo/client";

import client from "@/lib/graphql/client";

export default withApollo(client, {
  // eslint-disable-next-line react/prop-types, react/display-name
  render: ({ Page, props }) => {
    return (
      // eslint-disable-next-line react/prop-types
      <ApolloProvider client={props.apollo}>
        <Page {...props} />
      </ApolloProvider>
    );
  },
});
