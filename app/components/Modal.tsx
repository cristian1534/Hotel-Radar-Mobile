import { View, Button, Modal } from "react-native";
import React, { useState } from "react";

export default function CustomModal({ children, buttonTitle }: any) {
  const [isVisible, setIsVisible] = useState(false);

  function open() {
    setIsVisible(true);
  }

  function close() {
    setIsVisible(false);
  }

  return (
    <>
      <Button title={String(buttonTitle)} color={"white"} onPress={() => open()} />
      <Modal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={isVisible}
        onRequestClose={() => close()}
      >
        <View className="flex-1 justify-center items-center bg-opacity-50 bg-black">
          <View className="bg-black w-72 h-48 rounded-lg items-center justify-center">
            {React.cloneElement(children, { close: close })}
          </View>
        </View>
      </Modal>
    </>
  );
}
