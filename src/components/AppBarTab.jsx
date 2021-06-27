import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Subheading from "./Subheading";

const styles = StyleSheet.create({
  tab: {
    paddingRight: 15,
  },
});

const AppBarTab = ({ children, link }) => (
  <Link to={link} component={Pressable} activeOpacity={0.8}>
    <Subheading style={styles.tab} color="textLight">
      {children}
    </Subheading>
  </Link>
); 

export default AppBarTab;