import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./Styles";

const AppBar: React.FC = () => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.titlehead}>LISTIFY</Text>
    </View>
  );
};



export default AppBar;