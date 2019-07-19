import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/buttons/EndWalk";
import Map from "./components/map/Map";
import WalkPage from "./components/Layout/WalkPage";
const App = () => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <WalkPage />
      <Map />
      <Button />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default App;
