import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "./../../components/FormField";
import { icons } from "../../constants";
import CustomButton from '../../components/CustomButtons';

const Create = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    image: "",
  });

  const submit = () => {
    // Your submit logic here
  };

  return (
    <SafeAreaView className="bg-black px-2 flex-1">
      <ScrollView className="flex-grow">
        <View className="my-6">
          <Text className="text-2xl text-white font-psemibold">Create Post</Text>
          
          <FormField
            title='Title'
            value={form.title}
            placeholder="Title"
            handleChangeText={(e) => setForm({ ...form, title: e })}
            otherStyle="mt-10"
          />

          <FormField
            title='Description'
            value={form.content}
            placeholder="Description"
            handleChangeText={(e) => setForm({ ...form, content: e })}
            otherStyle="mt-10"
          />

          <View className="mt-7 space-y-2">
            <Text className="text-base text-gray-100 font-pmedium">Upload Image</Text>
            <TouchableOpacity>
              <View className="w-full h-52 px-4 bg-black-100 rounded-2xl justify-center items-center">
                <View className="w-14 h-14 border border-dashed border-secondary-100 justify-center items-center">
                  <Image
                    source={icons.upload}
                    resizeMode="contain"
                    className="w-1/2 h-1/2"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <CustomButton title='Create' handlePress={submit} containerStyles='mt-9'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
