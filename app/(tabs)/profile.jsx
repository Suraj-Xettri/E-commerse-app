import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import CustomButtons from "../../components/CustomButtons";
const Profile = () => {
  const [show, setShow] = useState(true);
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            {show ? (
              <Text className="text-white"> Post </Text>
            ) : (
              <Text className="text-white"> Saved </Text>
            )}
          </View>
        )}
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

            <View className="flex-row my-4 pl-4 pr-2 space-x-3 items-center">
              <TouchableOpacity
                onPress={() => router.push("./Edit")}
                className={`bg-zinc-700 flex-1 rounded-xl py-3 justify-center items-center"
                `}
              >
                <Text
                  className={`text-sm text-gray-100 text-center font-psemibold`}
                >
                  Edit Profile
                </Text>
              </TouchableOpacity>
              <Image source={icons.plus} className="w-10 h-10" />
            </View>

            <View className="flex-row space-x-2 px-4">
              <TouchableOpacity
                onPress={() => setShow(true)}
                className={`bg-zinc-700 flex-1 rounded-xl py-2 justify-center items-center"
                `}
              >
                <Text
                  className={`text-sm text-gray-100 text-center font-psemibold`}
                >
                  Posts
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setShow(false)}
                className={`bg-zinc-700 flex-1 rounded-xl justify-center items-center"
                `}
              >
                <Text
                  className={`text-sm text-gray-100 text-center font-psemibold`}
                >
                  Saved
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
