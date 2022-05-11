import React, { useState, useRef } from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import Navigation from "./Navigation";

function MyWeb() {
  const webViewRef = useRef();
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const handleBackPress = () => {
    webViewRef.current.goBack();
  };

  const handleForwardPress = () => {
    webViewRef.current.goForward();
  };

  return (
    <>
      <WebView
        ref={webViewRef}
        source={{ uri: "https://stlpinchhits.com" }}
        //originWhitelist navigates user away fromt the app and into the browser
        originWhitelist={["*"]}
        //style={{ width: 500, height: 500 }}
        onNavigationStateChange={(state) => {
          const back = state.canGoBack;
          const forward = state.canGoForward;
          setCanGoBack(back);
          setCanGoForward(forward);
        }}
      />
      <Navigation
        onBackPress={handleBackPress}
        onForwardPress={handleForwardPress}
        canGoBack={canGoBack}
        canGoForward={canGoForward}
      />
    </>
  );
}

export default MyWeb;
