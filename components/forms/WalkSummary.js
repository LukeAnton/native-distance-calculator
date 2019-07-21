import React, { useState, useEffect, Fragment } from "react";
import Avatar from "../user/UserAvatar";
import {
  View,
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  TextInput
} from "react-native-paper";
import EndWalk from "../buttons/EndWalk";
const WalkSummary = ({ data, displayData, hideWalkMod }) => {
  const [visible, setVisible] = useState(false);

  _showModal = () => setVisible(true);
  _hideModal = () => setVisible(false);
  const { noteSub } = data;
  console.log(noteSub);

  return (
    <Provider>
      <Portal
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fffff"
        }}
      >
        <Modal visible={visible} onDismiss={_hideModal}>
          <Text
            style={{
              backgroundColor: "white",
              height: "auto"
            }}
          >
            {noteSub}kadkjsakdjasksdjksjdkjaskdj
          </Text>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default WalkSummary;
