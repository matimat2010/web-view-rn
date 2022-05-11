import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";

function Navigation({ onBackPress, onForwardPress, canGoBack, canGoForward }) {
  return (
    <View
      style={[styles.container, !canGoBack && !canGoForward && styles.$hide]}>
      {canGoBack && (
        <TouchableOpacity style={styles.button} onPress={onBackPress}>
          <Text style={styles.buttonTitle}>Back</Text>
        </TouchableOpacity>
      )}
      {canGoForward && (
        <TouchableOpacity style={styles.button} onPress={onForwardPress}>
          <Text style={styles.buttonTitle}>Forward</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  $hide: { display: "none" },

  container: {
    height: 60,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {},
  buttonTitle: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Navigation;
