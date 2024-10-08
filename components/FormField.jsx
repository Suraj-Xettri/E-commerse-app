import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyle,
  ...props
}) => {
  const [showPassword, setshowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="border-2 flex-row items-center border-black w-full h-16 bg-secondary rounded-2xl focus:border-primary">
        <TextInput
          className="flex-1 text-white font-psemibold text-base px-2"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "password" && !showPassword}
        />

        {title === "password" && (
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                <Image source={showPassword ? icons.eyeHide : icons.eye} resizeMode="contain" className='w-7 h-7 mr-2' />
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
