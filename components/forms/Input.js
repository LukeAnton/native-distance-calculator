import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import {
  TextInput,
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  Alert
} from "react-native-paper";

const Input = ({ distance }) => {
  const [visible, setVisible] = useState(false);
  const [qty, setQty] = useState("");
  const [dist, setDist] = useState("");
  const [dur, setDur] = useState("");
  const [note, setNote] = useState("");
  const [stop, setStop] = useState("");
  const [avatar, setAvatar] = useState("");
  let dogAmount = parseInt(qty);
  let drop = [];

  for (let i = 0; i < dogAmount; i++) {
    drop.push(i);
    console.log(drop);
  }
  console.log(drop);
  _showModal = () => setVisible(true);
  _hideModal = () => setVisible(false);
  console.log(drop.length);
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
          <TextInput
            mode="flat"
            type="number"
            label="Multiple Dogs?.... "
            underlineColor="white"
            value={qty}
            style={{ backgroundColor: "white", opacity: ".9" }}
            onChangeText={qty => setQty(qty)}
          />

          <TextInput
            mode="flat"
            type="text"
            label="Walk Distance...."
            underlineColor="white"
            value={dist}
            style={{ backgroundColor: "white", opacity: ".9" }}
            onChangeText={dist => setDist(dist)}
          />
          <TextInput
            mode="flat"
            type="number"
            label="Walk Duration..."
            underlineColor="white"
            value={dur}
            style={{ backgroundColor: "white", opacity: ".9" }}
            onChangeText={dur => setDur(dur)}
          />

          <TextInput
            mode="flat"
            type="number"
            label="Notes..."
            underlineColor="white"
            value={note}
            style={{ backgroundColor: "white", opacity: ".9" }}
            onChangeText={note => setNote(note)}
          />
          {drop.map(dog => (
            <TextInput
              key={uuid()}
              dog={dog}
              mode="flat"
              type="number"
              label="Stops..."
              underlineColor="white"
              value={stop}
              style={{ backgroundColor: "white", opacity: ".9" }}
              onChangeText={stop => setStop(stop)}
            />
          ))}
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

export default Input;
