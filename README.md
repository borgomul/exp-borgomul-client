## Dependencies

Install types for developement purpose:

```
npm i @types/graphql -D
```

## Error

If you have any linting error with typescript:

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

If you have any issue with Import Cost Extension then use the following configuration:

```json
{
  // File extensions to be parsed by the Typescript parser
  "importCost.typescriptExtensions": ["\\.tsx?$"],

  // File extensions to be parsed by the Javascript parser
  "importCost.javascriptExtensions": ["\\.jsx?$"],
  // Which bundle size to display
  "importCost.bundleSizeDecoration": "both",

  // Display the 'calculating' decoration
  "importCost.showCalculatingDecoration": true,

  // Print debug messages in output channel
  "importCost.debug": true,
  "importCost.timeout": 432000
}
```

## Hasura

Hasura only require 2 things if you use JWT auth:

1. Properly configured HASURA_GRAPHQL_JWT_SECRET env variable (once you configure it - it doesn't matter if you use Google or email/password provider);
2. [Firebase Auth REST API](https://firebase.google.com/docs/reference/rest/auth#section-sign-in-with-oauth-credential)
3. Authentication header in request where its value has format:

```
Bearer VALID_JWT_TOKEN
```

## JS Things

- **`!!`:** It's used convert a "truethy" or "falsy" value to a real boolean

## NextJS

process.browser is now deprecated and the recommended approach is

```
typeof window === "undefined"
```

## Typescript Things

- `!`: There will be a scenario when TypeScript believes that certain property, variable will be `null` or `undefined`. But if you are sure that this variable cannot be `null`, then you can use this operator.

## Codegen

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

const [signin, { loading }] = useSignInMutation();
```

## Perform Secure Queries to GraphQL Endpoints

```js
// codegen.yml
schema:
  - https://evolving-dory-55.hasura.app/v1/graphql:
      headers:
        "x-hasura-admin-secret": <SECRET>
```

OR

```js
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  GraphQLRequest,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AuthProvider, ProtectedRoute } from "./components/auth/AuthContext";

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
```

</Details>
