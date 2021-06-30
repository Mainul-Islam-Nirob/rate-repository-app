import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Subheading from "./Subheading";

const styles = StyleSheet.create({
  tab: {
    paddingRight: 15,
  },
});

const AppBarTab = ({ children, link, onPress }) => (
  <Link onPress={onPress} to={link} component={Pressable} >
    <Subheading style={styles.tab} color="textLight">
      {children}
    </Subheading>
  </Link>
); 

export default AppBarTab;