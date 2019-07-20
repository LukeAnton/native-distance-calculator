import React, { useState } from "react";
import {
  TextInput,
  Modal,
  Portal,
  Text,
  Button,
  Provider
} from "react-native-paper";

const WalkForm = () => {
  const [visible, setVisible] = useState(false);
  const [qty, setQty] = useState("");
  const dogAmount = parseInt(qty);

  _showModal = () => setVisible(true);
  _hideModal = () => setVisible(false);
  console.log(qty);
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
          <Text>FORM</Text>
          <TextInput
            mode="flat"
            type="number"
            label="How many dogs?..."
            underlineColor="white"
            value={qty}
            style={{ backgroundColor: "white", opacity: ".9" }}
            onChangeText={qty => setQty(qty)}
          />
        </Modal>
        {visible === true ? (
          <Button
            icon="clear"
            size={10}
            mode="contained"
            onPress={_hideModal}
            style={{
              position: "absolute",
              bottom: 78,
              left: 10,
              paddingTop: 10,
              paddingLeft: 15,
              height: 50,
              width: 50,
              borderRadius: 100,
              backgroundColor: "#fb9120"
            }}
          />
        ) : (
          <Button
            icon="add"
            size={10}
            mode="contained"
            onPress={_showModal}
            style={{
              position: "absolute",
              bottom: 78,
              left: 10,
              paddingTop: 10,
              paddingLeft: 15,
              height: 50,
              width: 50,
              borderRadius: 100,
              backgroundColor: "#fb9120"
            }}
          />
        )}
      </Portal>
    </Provider>
  );
};

export default WalkForm;
