import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButtons from "../../components/CustomButtons";
import { Link, router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../redux/authSlice";
const SignUp = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch()

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
      setLoading(true)
      // Create a new FormData object
      const formData = new FormData();

      // Append form fields to FormData
      formData.append("username", form.username);
      formData.append("email", form.email);
      formData.append("password", form.password);

      // Append image if selected
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
        "http://192.168.1.121:3000/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        dispatch(setAuthUser(response.data.activeUser))
        router.replace("/home");
      } else {
        setError(
          response.data.message || "An error occurred during registration."
        );
      }

      setLoading(false)
    } catch (error) {
      setError(error.message || "Network error. Please try again.");
    } 
  };

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="w-full min-h-[90vh] items-center justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white text-semibold mt-5 font-psemibold">
            Register to AniHub
          </Text>

          <TouchableOpacity
            className="mt-8 items-center justify-center space-y-3"
            onPress={onImageClick}
          >
            {!image ? (
              <Image
                source={images.profile}
                resizeMode="cover"
                className="w-[100px] h-[100px] rounded-full"
              />
            ) : (
              <Image
                source={{ uri: image }}
                resizeMode="cover"
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
            )}
            <Text className="text-zinc-300 text-lg font-psemibold">
              Select Profile Pic
            </Text>
          </TouchableOpacity>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => handleInput("username", e)}
            otherStyle="mt-7"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => handleInput("email", e)}
            otherStyle="mt-7"
            keyBoardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => handleInput("password", e)}
            otherStyle="mt-7"
          />

          {error && <Text className="text-red-600 mt-3">{error}</Text>}

          <CustomButtons
            title={ loading ? "Registering..." : "Sign Up"}
            handlePress={Submit}
            isLoading={loading}
            containerStyles="w-full mt-10"
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already Have an account?
            </Text>

            <Link
              href={"/sign-in"}
              className="text-lg font-psemibold text-primary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
