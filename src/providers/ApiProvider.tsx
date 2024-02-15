import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import { ReactNode } from "react";

export default function ApiProvider({ children }: { children: ReactNode }) {
  const httpLink = new HttpLink({
    uri: import.meta.env.VITE_STORYBLOK_API_URL,
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        token: import.meta.env.VITE_STORYBLOK_ACCESS_TOKEN,
        version: "draft",
      },
    }));

    return forward(operation);
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
