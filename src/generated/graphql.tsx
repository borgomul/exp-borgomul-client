import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  timestamptz: any;
  uuid: any;
};

/**
 * Create Blog table: initialize
 *
 *
 * columns and relationships of "Blog"
 */
export type Blog = {
  __typename?: "Blog";
  /** An array relationship */
  Votes: Array<Vote>;
  content: Scalars["String"];
  created_at: Scalars["timestamptz"];
  id: Scalars["Int"];
  title: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  user_id: Scalars["uuid"];
};

/**
 * Create Blog table: initialize
 *
 *
 * columns and relationships of "Blog"
 */
export type BlogVotesArgs = {
  distinct_on?: Maybe<Array<Vote_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vote_Order_By>>;
  where?: Maybe<Vote_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "Blog". All fields are combined with a logical 'AND'. */
export type Blog_Bool_Exp = {
  Votes?: Maybe<Vote_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Blog_Bool_Exp>>>;
  _not?: Maybe<Blog_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Blog_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** ordering options when selecting data from "Blog" */
export type Blog_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "Blog" */
export type Blog_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "Blog" */
export enum Blog_Select_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/**
 * Create Follow table
 *
 *
 * columns and relationships of "Follow"
 */
export type Follow = {
  __typename?: "Follow";
  follower_id: Scalars["uuid"];
  following_id: Scalars["uuid"];
  id: Scalars["Int"];
};

/** Boolean expression to filter rows from the table "Follow". All fields are combined with a logical 'AND'. */
export type Follow_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Follow_Bool_Exp>>>;
  _not?: Maybe<Follow_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Follow_Bool_Exp>>>;
  follower_id?: Maybe<Uuid_Comparison_Exp>;
  following_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** ordering options when selecting data from "Follow" */
export type Follow_Order_By = {
  follower_id?: Maybe<Order_By>;
  following_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "Follow" */
export type Follow_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "Follow" */
export enum Follow_Select_Column {
  /** column name */
  FollowerId = "follower_id",
  /** column name */
  FollowingId = "following_id",
  /** column name */
  Id = "id",
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

export type Message = {
  __typename?: "Message";
  message: Scalars["String"];
};

export type SigninCredentials = {
  password: Scalars["String"];
  username: Scalars["String"];
};

export type SignupCredentials = {
  email: Scalars["String"];
  first_name: Scalars["String"];
  last_name: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "Vote" */
export type Vote = {
  __typename?: "Vote";
  /** An object relationship */
  Blog: Blog;
  blog_id: Scalars["Int"];
  id: Scalars["Int"];
  user_id: Scalars["uuid"];
};

/** Boolean expression to filter rows from the table "Vote". All fields are combined with a logical 'AND'. */
export type Vote_Bool_Exp = {
  Blog?: Maybe<Blog_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Vote_Bool_Exp>>>;
  _not?: Maybe<Vote_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vote_Bool_Exp>>>;
  blog_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** ordering options when selecting data from "Vote" */
export type Vote_Order_By = {
  Blog?: Maybe<Blog_Order_By>;
  blog_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "Vote" */
export type Vote_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "Vote" */
export enum Vote_Select_Column {
  /** column name */
  BlogId = "blog_id",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "user_id",
}

export type AccessToken = {
  __typename?: "accessToken";
  auth: Scalars["Boolean"];
  jwt: Scalars["String"];
  message: Scalars["String"];
};

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars["json"]>;
  _gt?: Maybe<Scalars["json"]>;
  _gte?: Maybe<Scalars["json"]>;
  _in?: Maybe<Array<Scalars["json"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["json"]>;
  _lte?: Maybe<Scalars["json"]>;
  _neq?: Maybe<Scalars["json"]>;
  _nin?: Maybe<Array<Scalars["json"]>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** perform the action: "create_user" */
  create_user?: Maybe<Message>;
  /** perform the action: "login_user" */
  login_user?: Maybe<AccessToken>;
};

/** mutation root */
export type Mutation_RootCreate_UserArgs = {
  credentials: SignupCredentials;
};

/** mutation root */
export type Mutation_RootLogin_UserArgs = {
  credentials: SigninCredentials;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "Blog" */
  Blog: Array<Blog>;
  /** fetch data from the table: "Blog" using primary key columns */
  Blog_by_pk?: Maybe<Blog>;
  /** fetch data from the table: "Follow" */
  Follow: Array<Follow>;
  /** fetch data from the table: "Follow" using primary key columns */
  Follow_by_pk?: Maybe<Follow>;
  /** fetch data from the table: "Vote" */
  Vote: Array<Vote>;
  /** fetch data from the table: "Vote" using primary key columns */
  Vote_by_pk?: Maybe<Vote>;
};

/** query root */
export type Query_RootBlogArgs = {
  distinct_on?: Maybe<Array<Blog_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Blog_Order_By>>;
  where?: Maybe<Blog_Bool_Exp>;
};

/** query root */
export type Query_RootBlog_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootFollowArgs = {
  distinct_on?: Maybe<Array<Follow_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Follow_Order_By>>;
  where?: Maybe<Follow_Bool_Exp>;
};

/** query root */
export type Query_RootFollow_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootVoteArgs = {
  distinct_on?: Maybe<Array<Vote_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vote_Order_By>>;
  where?: Maybe<Vote_Bool_Exp>;
};

/** query root */
export type Query_RootVote_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "Blog" */
  Blog: Array<Blog>;
  /** fetch data from the table: "Blog" using primary key columns */
  Blog_by_pk?: Maybe<Blog>;
  /** fetch data from the table: "Follow" */
  Follow: Array<Follow>;
  /** fetch data from the table: "Follow" using primary key columns */
  Follow_by_pk?: Maybe<Follow>;
  /** fetch data from the table: "Vote" */
  Vote: Array<Vote>;
  /** fetch data from the table: "Vote" using primary key columns */
  Vote_by_pk?: Maybe<Vote>;
};

/** subscription root */
export type Subscription_RootBlogArgs = {
  distinct_on?: Maybe<Array<Blog_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Blog_Order_By>>;
  where?: Maybe<Blog_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootBlog_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootFollowArgs = {
  distinct_on?: Maybe<Array<Follow_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Follow_Order_By>>;
  where?: Maybe<Follow_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFollow_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootVoteArgs = {
  distinct_on?: Maybe<Array<Vote_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vote_Order_By>>;
  where?: Maybe<Vote_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVote_By_PkArgs = {
  id: Scalars["Int"];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};

export type SignInMutationVariables = Exact<{
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignInMutation = { __typename?: "mutation_root" } & {
  login_user?: Maybe<
    { __typename?: "accessToken" } & Pick<
      AccessToken,
      "auth" | "jwt" | "message"
    >
  >;
};

export type SignUpMutationVariables = Exact<{
  email: Scalars["String"];
  first_name: Scalars["String"];
  last_name: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
}>;

export type SignUpMutation = { __typename?: "mutation_root" } & {
  create_user?: Maybe<{ __typename?: "Message" } & Pick<Message, "message">>;
};

export const SignInDocument = gql`
  mutation SignIn($username: String!, $password: String!) {
    login_user(credentials: { username: $username, password: $password }) {
      auth
      jwt
      message
    }
  }
`;
export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >
) {
  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    baseOptions
  );
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>;
export const SignUpDocument = gql`
  mutation SignUp(
    $email: String!
    $first_name: String!
    $last_name: String!
    $password: String!
    $username: String!
  ) {
    create_user(
      credentials: {
        email: $email
        first_name: $first_name
        last_name: $last_name
        password: $password
        username: $username
      }
    ) {
      message
    }
  }
`;
export type SignUpMutationFn = Apollo.MutationFunction<
  SignUpMutation,
  SignUpMutationVariables
>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignUpMutation,
    SignUpMutationVariables
  >
) {
  return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument,
    baseOptions
  );
}
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<
  SignUpMutation,
  SignUpMutationVariables
>;
