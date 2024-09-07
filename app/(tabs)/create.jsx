import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "./../../components/FormField";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButtons";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { router } from "expo-router";

const Create = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleInput = (name, value) => {
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onImageClick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    setImage(result?.assets[0].uri);
  };

  const Submit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("content", form.content);

      if (image) {
        const fileName = image.split("/").pop(); // Get image file name
        const fileType = fileName.split(".").pop(); // Get image file type

        formData.append("image", {
          uri: image,
          name: fileName,
          type: `image/${fileType}`,
        });
      }

      // Send the formData in the request
      const response = await axios.post(
        "http://192.168.1.121:3000/posts/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setForm({
          title: "",
          content: "",
        });

        setImage(null);
        setError("");
        router.replace("/home");
      } else {
        setError(
          response.data.message || "An error occurred during registration."
        );
      }

      setLoading(false);
    } catch (error) {
      setError(error.message || "Network error. Please try again.");
      setLoading(false)
    }
  };

  return (
    <SafeAreaView className="bg-black px-2 flex-1">
      <ScrollView className="flex-grow">
        <View className="my-6">
          <Text className="text-2xl text-white font-psemibold">
            Create Post
          </Text>

          <FormField
            title="Title"
            value={form.title}
            placeholder="Title"
            handleChangeText={(e) => handleInput("title", e)}
            otherStyle="mt-10"
          />

          <FormField
            title="Content"
            value={form.content}
            placeholder="Content"
            handleChangeText={(e) => handleInput("content", e)}
            otherStyle="mt-10"
          />

          <View className="mt-7 space-y-2">
            <Text className="text-base text-gray-100 font-pmedium">
              Upload Image
            </Text>
            <TouchableOpacity onPress={onImageClick}>
              <View
                className={`w-full h-52 px-4 bg-black-100 rounded-2xl justify-center items-center`}
              >
                <View
                  className={`${
                    image ? "w-full h-full" : "w-14 h-14"
                  } border border-dashed border-secondary-100 justify-center items-center`}
                >
                  {image ? (
                    <Image
                      source={{ uri: image }}
                      resizeMode="contain"
                      className="w-full h-full"
                    />
                  ) : (
                    <Image
                      source={icons.upload}
                      resizeMode="contain"
                      className="w-1/2 h-1/2"
                    />
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {error && <Text className="text-red-600"> {error}</Text>}
          <CustomButton
            title={loading ? "Posting" : "Create"}
            handlePress={Submit}
            isLoading={loading}
            containerStyles="mt-9"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
