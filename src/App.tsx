import React from "react";
import "./App.css";

// for apollo client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Route, Switch } from "react-router-dom";
// import other components

import SignUp from "./components/SignUp";
import { Container } from "@material-ui/core";
import SignIn from "./components/SignIn";

// secret routing
import Secret from "./components/Secret";

// for apollo client
const client = new ApolloClient({
  uri: "https://evolving-dory-55.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
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
          <Route path="/profile">
            <Secret />
          </Route>
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
  );
}

export default App;
