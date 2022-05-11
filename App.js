import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import MyWeb from "./app/components/WebView";
import Constants from "expo-constants";
import Navigation from "./app/components/Navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MyWeb />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width: 300,
    // height: 500,
    paddingTop: Constants.statusBarHeight,
    justifyContent: "center",
  },
});
