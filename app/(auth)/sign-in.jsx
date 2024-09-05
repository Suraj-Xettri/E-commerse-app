import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButtons from "../../components/CustomButtons";
import { Link, router } from "expo-router";
import axios from "axios";

const SignIn = () => {
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleInput = (name, value) => {
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        dispatch(setAuthUser(response.data.activeUser));
        router.replace("/home");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(response.data.message);
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

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to AniHub
          </Text>

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
          {error && <Text>{error}</Text>}

          <CustomButtons
            title="Sign in"
            handlePress={Submit}
            containerStyles="w-full mt-10"
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>

            <Link
              href={"/sign-up"}
              className="text-lg font-psemibold text-primary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
