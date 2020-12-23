import React from "react";
import "./App.css";

// for apollo client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  GraphQLRequest,
} from "@apollo/client";
import { Route, Switch } from "react-router-dom";
// import other components

import SignUp from "./components/SignUp";
import { Container } from "@material-ui/core";
import SignIn from "./components/SignIn";

// secret routing
import Secret from "./components/Secret";
import { AuthProvider, ProtectedRoute } from "./components/auth/AuthContext";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://evolving-dory-55.hasura.app/v1/graphql",
});

const authLink = setContext(
  ({ operationName }: GraphQLRequest, prevCtx: any) => {
    const publicOperations = ["signin", "signup"];
    if (
      operationName &&
      !publicOperations.includes(operationName.toLocaleLowerCase())
    ) {
      const token = localStorage.getItem("jwt");
      return {
        headers: {
          ...prevCtx.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    }
  }
);
// for apollo client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Container>
          <Switch>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              {/* {() => <h1>Sign in Page</h1>} */}
              <SignIn />
            </Route>
            <ProtectedRoute path="/profile">
              <Secret />
            </ProtectedRoute>
            <Route path="/">
              {() => (
                <div>
                  <h1>Welcome to Borgomul</h1>
                  <a href="/signin">Sign In</a>
                  <br />
                  <a href="/signup">Sign Up</a>
                  <br />
                  <a href="/profile">Secret Page</a>
                </div>
              )}
            </Route>
          </Switch>
        </Container>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
