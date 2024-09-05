import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { icons } from "../constants";
const PostsCards = ({ items }) => {
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={items.author.profilePicture}
              resizeMode="cover"
              className="w-full h-full rounded-lg"
            />
            <Link
              className="text-white w-full absolute"
              href={`profile/${items.author._id}`}
            ></Link>
          </View>

          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-zinc-300 font-psemibold text-sm"
              numberOfLines={1}
            >
              {items.title}
            </Text>

            <Text className="text-primary text-xs font-pregular">
              {items.author.username}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>

      <View className="w-full h-60 rounded-xl border border-secondary-100 mt-3 justify-center items-center">
        <Image
          source={{uri:items.image}}
          className="w-full h-full mt-3 rounded-xl"
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default PostsCards;
