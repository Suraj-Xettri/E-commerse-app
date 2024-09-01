import { View, Image, Text } from "react-native";
import React from "react";
import { images } from "../constants";
import { router } from "expo-router";
import CustomButtons from "./CustomButtons";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="font-pmedium text-xm text-gray-100">{subtitle}</Text>
      <Text className="font-psemibold text-2xl text-white">{title}</Text>

      <CustomButtons
        title={"Create Video"}
        handlePress={() => router.push("./create")}
        containerStyles = 'w-full my-5'
      />
    </View>
  );
};

export default EmptyState;
