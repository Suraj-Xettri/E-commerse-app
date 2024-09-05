import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "../constants";
const ProfileCards = ({ items }) => {
  return (
    <View className="flex-col items-center px-2 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="pt-2 items-end w-full">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>

      <View className="w-full h-60 rounded-xl border border-secondary-100 mt-3 justify-center items-center">
        <Image
          source={icons}
          className="w-full h-full mt-3 rounded-xl"
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default ProfileCards;
