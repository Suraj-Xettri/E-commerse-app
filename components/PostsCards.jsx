import { View, TouchableOpacity, Text, Image } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { icons } from "../constants";
import axios from "axios";
const PostsCards = ({ items, user,follow, unfollow,Delete }) => {
  const handleLike = () => {};
  const handleComment = () => {};
  const [option, setOption] = useState(false);

  const handleOption = () => {
    setOption((p) => !p);
  };


  return (
    <View className="flex-col items-center px-2 mb-10">
      <View className="relative flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <TouchableOpacity>
            <Link href={`./profile/${items.author._id}`}>
              <View className="w-[46px] h-[46px] rounded-lg border justify-center items-center p-0.5">
                <Image
                  source={{ uri: items.author.profilePicture }}
                  resizeMode="contain"
                  className="w-full h-full rounded-lg"
                />
              </View>
            </Link>
          </TouchableOpacity>

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
          <TouchableOpacity onPress={handleOption}>
            <Image
              source={icons.menu}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {option && (
          <View className="absolute right-0 bg-secondary z-20 py-5 w-[70%]">
            <View className="text-center items-center">
              <TouchableOpacity className="px-5 py-5">
                <Link href={`./profile/${items.author._id}`}>
                  <Text className="text-white text-xl font-pmedium">
                    View Profile
                  </Text>
                </Link>
              </TouchableOpacity>
              {items?.author?._id !== user?._id &&
              !user?.post?.includes(items?._id) &&
              items?.author?.followers?.includes(user?._id) ? (
                <TouchableOpacity
                  className="px-5 py-5"
                  onPress={() => unfollow(items?.author?._id)}
                >
                  <Text className="text-white text-xl font-pmedium">
                    UnFollow
                  </Text>
                </TouchableOpacity>
              ) : items?.author?._id !== user?._id ? (
                <TouchableOpacity
                  className="px-5 py-5"
                  onPress={() => follow(items?.author?._id)}
                >
                  <Text className="text-white text-xl font-pmedium">
                    Follow
                  </Text>
                </TouchableOpacity>
              ) : null}

              {user?.post?.includes(items?._id) && (
                <TouchableOpacity
                  className="px-5 py-5"
                  onPress={() => Delete(items._id)}
                >
                  <Text className="text-white text-xl font-pmedium">
                    Delete
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View className="w-8 h-8 absolute bg-primary rounded-r-xl">
              <TouchableOpacity
                onPress={handleOption}
                className="w-full h-full"
              ></TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      <View className="w-full h-60 rounded-xl border border-secondary-100 mt-3 justify-center items-center">
        <Image
          source={{ uri: items.image }}
          className="w-full h-full mt-3 rounded-xl"
          resizeMode="cover"
        />
      </View>

      <View className="text-white flex-row items-center p-2 w-full justify-between h-10">
        <View className="flex-row space-x-4">
          <TouchableOpacity className="" onPress={handleLike}>
            <Text>{items?.likes?.length} Like</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleComment}>
            <Text>{items?.comments?.length} Comment</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>Save</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsCards;
