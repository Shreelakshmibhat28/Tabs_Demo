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

// const styles = StyleSheet.create({
//   appBar: {
//     backgroundColor: "#6200ee",
//     padding: 15,
//     alignItems: "center",
//   },
//   titlehead: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });

export default AppBar;