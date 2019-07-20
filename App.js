import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/buttons/EndWalk";
import Map from "./components/map/Map";
import WalkPage from "./components/Layout/WalkPage";
import WalkForm from "./components/forms/WalkForm";
import UserAvatar from "./components/user/UserAvatar";
const App = () => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <WalkPage />
      <Map />
      <UserAvatar />
      <Button />
      <WalkForm />
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
