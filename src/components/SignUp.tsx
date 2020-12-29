import React from "react";
import { Button, Typography, TextField } from "@material-ui/core";
import { Formik, FormikValues, Form } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

// an interface defines the syntax that
// any entity must adhere to
interface Props {}

// mutation for graphql mutation
const SIGNUP_MUTATION = gql`
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

const initialValue = {
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("This field is required"),
  last_name: Yup.string(),
  username: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("It should be an email")
    .required("This field is required"),
  password: Yup.string().required("This field is required"),
});

function SignUp(props: Props) {
  // [function that trigger http req,{diff. state of mutation}]
  const [signup, { loading }] = useMutation(SIGNUP_MUTATION);

  const history = useHistory();

  const signupHandler = (values: FormikValues) => {
    //console.log(values);
    signup({ variables: values })
      .then(({ errors }) => {
        if (errors) {
          console.log(errors);
        } else {
          history.push("/signin");
        }
      })
      .catch(console.log);
  };

  const signupForm = () => {
    return (
      <>
        <Typography variant="h6">Sign Up</Typography>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={signupHandler}
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
                label="First Name"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                error={!!(errors.first_name && touched.first_name)}
                helperText={
                  errors.first_name && touched.first_name && errors.first_name
                }
                margin="normal"
              />
              <TextField
                label="Last Name"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                error={!!(errors.last_name && touched.last_name)}
                helperText={
                  errors.last_name && touched.last_name && errors.last_name
                }
                margin="normal"
              />
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
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                error={!!(errors.email && touched.email)}
                helperText={errors.email && touched.email && errors.email}
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
                disabled={!isValid || !!isInitialValid || loading}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </>
    );
  };
  return <div>{signupForm()}</div>;
}

export default SignUp;
