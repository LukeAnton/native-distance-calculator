import React from "react";
import { Text, View } from "react-native";

const Values = ({ distance, duration }) => {
  const dur = Math.round(duration);

  return (
    <View
      style={{
        position: "absolute",
        color: "white",
        left: 10,
        top: 50,
        fontSize: 20,
        paddingTop: 10,
        borderRadius: 100,
        backgroundColor: "#fb9120",
        width: 130,
        height: 40,
        borderRadius: 100
      }}
    >
      <Text
        style={{
          position: "relative",
          color: "white",
          left: 30,
          top: 38,
          fontSize: 20,
          paddingTop: 10,
          borderRadius: 100,
          width: 150
        }}
      >
        {distance} Km
      </Text>
      <View
        style={{
          color: "white",
          left: 13,
          top: 63,
          fontSize: 20,
          paddingTop: 10,
          borderRadius: 100,
          backgroundColor: "#fb9120",
          width: 130,
          height: 40,
          borderRadius: 100
        }}
      >
        <Text
          style={{
            position: "relative",
            color: "white",
            left: 30,
            top: 90,
            fontSize: 20,
            paddingTop: 10,
            borderRadius: 100,
            width: 150,
            height: 60
          }}
        >
          {dur} Mins
        </Text>
      </View>
    </View>
  );
};

export default Values;
