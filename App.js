import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
  Button,
  Image
} from "react-native";
import { WebView } from "react-native-webview";
import { Modal, Appbar, Provider, Portal } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';


export default function App() {
  return (
    // <WebView style={styles.container} source={{ uri: "https://in.tradingview.com/chart/" }} />
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="DEPOSIT"/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#212121",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 100,
    alignContent: "center",
    backgroundColor: "#F5FCFF",
  },
  chart: {
    flex: 1,
  },
  textTitle: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    paddingLeft: "5%",
  },
  textValue: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    paddingRight: "5%",
  },
});
