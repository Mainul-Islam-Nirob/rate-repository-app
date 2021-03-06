import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import BodyText from "./BodyText";
import Subheading from "./Subheading";

const styles = StyleSheet.create({
  descriptionContainer: {
    display: "flex",
    flexShrink: 1,
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  subheading: {
    lineHeight: 26,
  },
  description: {
    lineHeight: 26,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 7,
    borderRadius: 7,
    marginTop: 5,
  },
});

const Description = ({ fullName, description, language }) => (
  <View style={styles.descriptionContainer}>
    <Subheading style={styles.subheading} color="textPrimary">
      {fullName}
    </Subheading>
    <BodyText style={styles.description} color="textSecondary">
      {description}
    </BodyText>

    <BodyText color="textLight" style={styles.language}>
      {language}
    </BodyText>
  </View>
);

export default Description;