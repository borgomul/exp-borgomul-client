## Dev Dependencies

Install types for developement purpose:

```
npm i @types/graphql -D
```

## Solve Linting Error

If you have any linting error with typescript follow the following instructions:

```json
// .vscode/settings.json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

If the above fix didn't work for you and get `Could not find a declaration file for module 'react/jsx-runtime'` error then just disable it site wide.

```json
// tsconfig.json
{
  "compilerOptions": {
    ...
    "noImplicitAny": false
  },
  "include": ["src"]
}
```

## Consume Hasura API

Hasura only require 2 things if you use JWT auth:

1. Properly configured HASURA_GRAPHQL_JWT_SECRET env variable (once you configure it - it doesn't matter if you use Google or email/password provider); e.g., Like [Firebase Auth REST API](https://firebase.google.com/docs/reference/rest/auth#section-sign-in-with-oauth-credential)
2. Authentication header in request with Bearer token

## Codegen to generate types

```
npm install --save-dev @graphql-codegen/cli
npx graphql-codegen init
npm install
npm run <SCRIPT>
```

In this way you don't need to write your every query and mutation definition as well as other typescript definition.

<Details>
<summary>Example</summary>

Instead of:

```js
import { gql, useMutation } from "@apollo/client";

const SIGN_MUTATION = gql`
  mutation SignIn($username: String!, $password: String!) {
    login_user(credentials: { username: $username, password: $password }) {
      auth
      jwt
      message
    }
  }
`;

const [signin, { loading }] = useMutation(SIGN_MUTATION);
```

Use this:

```js
import { MutationResult } from "@apollo/client";
import {
  SignInMutation,
  SignInMutationVariables,
  useSignInMutation,
} from "../generated/graphql";

const [signin, { loading }] = useSignInMutation(); // generated types
```

</Details>

## Perform Secure Queries to GraphQL Endpoints

```js
// codegen.yml
schema:
  - https://evolving-dory-55.hasura.app/v1/graphql:
      headers:
        "x-hasura-admin-secret": <SECRET>
```

Which is not good approach as it pretend to be admin.

In order to use the Bearer token based authorization use the following instructions:

<Details>

<summary>Example</summary>

```js
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  GraphQLRequest,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://evolving-dory-55.hasura.app/v1/graphql",
});

const authLink = setContext(
  ({ operationName }: GraphQLRequest, prevCtx: any) => {
    // graphql operator which didn't need bearer token to attach the req header
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

// create apollo client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
```

</Details>

## Tips

> 💡 process.browser is now deprecated and the recommended approach is `typeof window === "undefined"` > `!!` used convert a "truethy" or "falsy" value to a real boolean
> There will be a scenario when TypeScript believes that certain property, variable will be `null` or `undefined`. But if you are sure that this variable cannot be `null`, then you can use `!` this operator at the end of that variable.
