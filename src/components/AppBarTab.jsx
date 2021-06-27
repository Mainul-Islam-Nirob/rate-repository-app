import React from "react";
import { Pressable } from "react-native";
import Subheading from "./Subheading";

const AppBarTab = ({ children }) => (
  <Pressable>  
    <Subheading color="textLight">{children}</Subheading>
  </Pressable>
);

export default AppBarTab;