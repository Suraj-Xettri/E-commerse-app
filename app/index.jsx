import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import {images} from "../constants"
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full h-full justify-center items-center px-4">
          <Image source={images.logo}/>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
