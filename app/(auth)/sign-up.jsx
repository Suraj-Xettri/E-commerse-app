import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButtons from "../../components/CustomButtons"
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    username:"",
    email: "",
    password: "",
  });

  const Submit = () => {

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[90vh] items-center justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Register to Aora
          </Text>


          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyle = 'mt-7'
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyle = 'mt-7'
            keyBoardType = "email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyle = 'mt-7'
          />

          <CustomButtons title="Sign Up" handlePress={Submit} containerStyles="w-full mt-10"/>

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
             Already Have an account?
            </Text>

            <Link href={"/sign-in"} className="text-lg font-psemibold text-secondary">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
