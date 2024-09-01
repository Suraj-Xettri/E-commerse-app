import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
const SearchInput = ({
  title,
  value,
  handleChangeText,
}) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <View className="border-2 space-x-4 px-2 flex-row items-center border-black-200 w-full h-16 bg-black-100 rounded-2xl focus:border-secondary">
      <TextInput
        className="text-base flex-1 mt-0.5 font-pregular text-white"
        value={value}
        placeholder="Search for the video"
        placeholderTextColor="#7b7b8b"
        onChange={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="h-5 w-5" resizeMode="contain"/>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
