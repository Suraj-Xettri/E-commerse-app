import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../../constants";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import ProfileCards from "../../../components/ProfileCards";
const Profile = () => {
  const { id } = useLocalSearchParams();
  const [show, setShow] = useState(true);
  const [profileUser, setProfileUser] = useState([]);
  const [loading, setLoding] = useState(false);

  const profileDetails = async () => {
    setLoding(true);
    try {
      const response = await axios.get(
        `http://192.168.1.121:3000/users/profile/${id}`
      );

      setProfileUser(response?.data?.userProfile);
      setLoding(false);
    } catch (error) {
      setLoding(false);
      console.error("Error fetching profile details:", error);
    }
  };

  useEffect(() => {
    profileDetails();
  }, [id]);

  if (!id)
    return (
      <SafeAreaView className="h-full bg-black justify-center items-center">
        <Text className="text-white font-psemibold text-xl">No user Found</Text>
      </SafeAreaView>
    );
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="mt-3">
          <View className="space-y-2 px-2">
            <View className="flex-row items-center justify-between mt-7 space-y-2">
              <Image
                source={{ uri: profileUser?.profilePic }}
                className="w-16 h-16 rounded-full bg-white"
                resizeMode="contain"
              />
              <View className="flex-row space-x-10 mr-3">
                <View className="items-center">
                  <Text className="text-white">
                    {profileUser?.post?.length}
                  </Text>
                  <Text className="text-white">Posts</Text>
                </View>
                <View className="items-center">
                  <Text className="text-white">
                    {profileUser?.followers?.length}
                  </Text>
                  <Text className="text-white">Followers</Text>
                </View>
                <View className=" items-center">
                  <Text className="text-white">
                    {profileUser?.following?.length}
                  </Text>
                  <Text className="text-white">following</Text>
                </View>
              </View>
            </View>

            <View className="">
              <Text className="text-sm font-pmedium text-primary">
                {profileUser.username}
              </Text>
              <Text className="text-xs font-pregular text-zinc-100">
                "Die with Memories, Not Dreams"
              </Text>
            </View>
          </View>

          <View className="flex-row my-4 px-2 space-x-3 items-center">
            <TouchableOpacity
              onPress={() => router.push("./Edit")}
              className={`bg-secondary flex-1 rounded-xl py-3 justify-center items-center"
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

          <View className="flex-row space-x-2 px-2">
            <TouchableOpacity
              onPress={() => setShow(true)}
              className={`bg-secondary flex-1 rounded-xl py-2 justify-center items-center"
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
              className={`bg-secondary flex-1 rounded-xl justify-center items-center"
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

        {profileUser?.post?.length > 0 ? (
          profileUser.post.map((post, index) => (
            <ProfileCards key={index} items={post} />
          ))
        ) : (
          <Text className="text-white">No posts available</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
