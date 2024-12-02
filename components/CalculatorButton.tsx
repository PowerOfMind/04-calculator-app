import { View, Text, Pressable } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import { Colors } from "@/constants/Colors";

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blacktext?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blacktext = false,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}
      onPress={onPress}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blacktext ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
