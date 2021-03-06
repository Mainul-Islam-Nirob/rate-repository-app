import { Formik } from "formik";
import React from 'react';

import { StyleSheet, View } from "react-native";
import { useHistory } from "react-router-native";
import * as yup from "yup";
import theme from "../theme";
import SignInForm from "./SignInForm";
import { useSignIn } from "../hooks/useSignIn";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.backgroundLight,
    padding: 15,
  },
});

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password});
      console.log(data);
      
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.formContainer}>
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;