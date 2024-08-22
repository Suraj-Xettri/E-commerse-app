import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import {images} from "../constants"
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain"/>
          
          <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMethod="contain"/>
          
          <View className="mt-4">
            <Text className="text-white font-pbold text-2xl text-center">
              Discover Endless Possibilities with <Text className="text-secondary-200 font-pbold">Aora</Text>
            </Text>

            <Text className="text-gray-100 font-pmedium text-center mt-4">Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora</Text>
          </View>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
