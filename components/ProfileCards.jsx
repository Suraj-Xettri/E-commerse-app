import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "../constants";
const ProfileCards = ({ items }) => {
  return (
    <View className="flex items-center px-2 mb-14">
      

      <View className="w-[175px] h-72 rounded-xl border border-secondary-100 mt-3 justify-center items-center">
        <Image
          source={{uri: items.image}}
          className="w-full h-full mt-3 rounded-xl"
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default ProfileCards;
