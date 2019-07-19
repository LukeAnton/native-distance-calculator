import React from "react";
import { Button } from "react-native-paper";

const EndWalk = () => {
  return (
    <Button
      style={{
        color: "white",
        width: "100%",
        height: 50,
        paddingTop: 10,
        position: "absolute",
        bottom: 0
      }}
      color="#fb9120"
      mode="contained"
      onPress={() => console.log("Pressed")}
    >
      END WALK
    </Button>
  );
};

export default EndWalk;
