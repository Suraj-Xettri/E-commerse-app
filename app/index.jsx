import { Image, ScrollView, Text, View } from "react-native";
import { Redirect , router} from "expo-router";
import CustomButtons from "../components/CustomButtons"
import {images} from "../constants"
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
export default function Index() {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center min-h-[100vh] px-4">
          
          <Image source={images.cards} className="max-w-[280px] w-full h-[400px] rounded-xl" resizeMethod="contain"/>
          
          <View className="mt-4">
            <Text className="text-white font-pbold text-2xl text-center">
              Discover Endless Anime News with <Text className="text-primary font-pbold">AniHub</Text>
            </Text>

            <Text className="text-gray-100 font-pmedium text-center mt-6">See the latest news on anime and also share what you have got to share.</Text>
          </View>

          <CustomButtons title="Lets Go" handlePress={()=> router.push('/sign-in')} containerStyles="w-full mt-10"/>

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
