import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { isLoading } from "expo-font";

const CustomButtons = ({title, handlePress,textStyles, isLoading, containerStyles}) => {
  return (
    <TouchableOpacity onPress={handlePress} className={`bg-primary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading && 'opacity-50'}`}>
      <Text className={`text-lg text-black font-psemibold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtons;
