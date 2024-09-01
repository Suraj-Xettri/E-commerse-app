import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import CustomButtons from "../../components/CustomButtons";
const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text className="text-white">Posts Here</Text>}
        ListHeaderComponent={() => (
          <View>
            <View className="space-y-2 px-5">
              <View className="flex-row items-center justify-between mt-10 space-y-2">
                <Image
                  source={icons}
                  className="w-16 h-16 rounded-full bg-white"
                  resizeMode="contain"
                />
                <View className="flex-row space-x-10 mr-3">
                  <View className="items-center">
                    <Text className="text-white">10</Text>
                    <Text className="text-white">Posts</Text>
                  </View>
                  <View className="items-center">
                    <Text className="text-white">100k</Text>
                    <Text className="text-white">Followers</Text>
                  </View>
                  <View className=" items-center">
                    <Text className="text-white">0</Text>
                    <Text className="text-white">following</Text>
                  </View>
                </View>
              </View>

              <View className="">
                <Text className="text-sm font-pmedium text-white">
                  Suraj Thapa
                </Text>
                <Text className="text-xs font-pregular text-zinc-100">
                  "Die with Memories, Not Dreams"
                </Text>
              </View>
            </View>

            <View className="flex-row">
              <CustomButtons
                title={"Edit Profile"}
                handlePress={() => router.push("./edit")}
                containerStyles="w-full my-5 bg-zinc-600"
                textStyles = "text-gray-100"
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
