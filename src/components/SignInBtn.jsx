import React from "react";
import { StyleSheet, Pressable, View } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  btnContainer: {
    display: "flex",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  },
  signInBtn: {
    padding: 15,
    alignSelf: "center",
  },
});

const SignInBtn = ({ onSubmit }) => (
  <View style={styles.btnContainer}>
    <Pressable onPress={onSubmit}>
      <Text color="textLight" fontWeight="bold" style={styles.signInBtn}>
        Sign in
      </Text>
    </Pressable>
  </View>
);

export default SignInBtn;