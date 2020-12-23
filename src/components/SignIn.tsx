import React, { useContext } from "react";
import { Formik, FormikValues, Form } from "formik";
import * as Yup from "yup";
import { Button, Typography, TextField } from "@material-ui/core";
import { MutationResult } from "@apollo/client";
import { useHistory } from "react-router-dom";
import {
  SignInMutation,
  SignInMutationVariables,
  useSignInMutation,
} from "../generated/graphql";
import { authContext } from "./auth/AuthContext";

interface Props {}

const initialValue = {
  username: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
});

export interface SigninResponse {
  login_user: {
    auth: string;
    jwt: string;
    message: string;
  };
}
function SignIn(props: Props) {
  const [signin, { loading }] = useSignInMutation();

  const context = useContext(authContext);
  //useMutation(SIGN_MUTATION);

  const history = useHistory();

  // values: FormikValues
  const signinHandler = (values: SignInMutationVariables) => {
    console.log(values);
    signin({ variables: values })
      .then(({ errors, data }) => {
        return errors ? console.log(errors) : userLoggedInHandler(data);
      })
      .catch(console.error);
  };
  // data: SigninResponse
  const userLoggedInHandler = (
    data: MutationResult<SignInMutation>["data"]
  ) => {
    if (data?.login_user) {
      const { jwt } = data.login_user;
      localStorage.setItem("jwt", jwt);
      context?.setIsUserSignedIn(true);
      history.push(`/profile`);
    }
  };
  return (
    <div>
      <Typography variant="h6">Sign In</Typography>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={signinHandler}
      >
        {({
          values,
          touched,
          errors,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          isInitialValid,
        }) => (
          <Form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={!!(errors.username && touched.username)}
              helperText={
                errors.username && touched.username && errors.username
              }
              margin="normal"
            />
            <TextField
              label="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={!!(errors.password && touched.password)}
              helperText={
                errors.password && touched.password && errors.password
              }
              margin="normal"
            />
            <Button
              variant="contained"
              fullWidth
              type="submit"
              // !isValid || !!isInitialValid ||
              disabled={!isValid || !!isInitialValid || loading}
            >
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignIn;
