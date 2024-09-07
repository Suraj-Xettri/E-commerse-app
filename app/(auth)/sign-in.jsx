import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButtons from "../../components/CustomButtons";
import { Link, router } from "expo-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../redux/authSlice";

const SignIn = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleInput = (name, value) => {
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Submit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://192.168.1.121:3000/users/login", // Replace 'localhost' with your computer's IP address
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
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred.");
      }

      setLoading(false);
    } finally {
      setForm({ email: "", password: "" });
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
            title="email"
            value={form.email}
            handleChangeText={(e) => handleInput("email", e)}
            otherStyle="mt-7"
            keyBoardType="email-address"
          />
          <FormField
            title="password"
            value={form.password}
            handleChangeText={(e) => handleInput("password", e)}
            otherStyle="mt-7"
          />
          {error && <Text className="text-red-600 mt-3">{error}</Text>}

          <CustomButtons
            title={loading ? "Signing In ." : "Sign in"}
            handlePress={Submit}
            isLoading={loading}
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
