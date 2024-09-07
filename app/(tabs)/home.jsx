import { View, Text, FlatList, RefreshControl, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import SearchInput from "../../components/SearchInput";
import axios from "axios";
import PostsCards from "../../components/PostsCards";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Home = () => {
  const [refresh, setRefresh] = useState(false);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const {user} = useSelector((store) => store.auth);

  console.log(user.username)
  const getPost = async () => {
    try {
      setLoading(true);
      const posts = await axios.get("http://192.168.1.121:3000/posts");
      setPosts(posts.data);
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch posts", error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const onRefresh = async () => {
    setRefresh(true);
    getPost();
    setRefresh(false);
  };
  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <PostsCards items={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-2">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-xm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="font-psemibold text-2xl text-primary">
                 {user?.username}
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  resizeMode="contain"
                  className="w-9 h-10"
                />
              </View>
            </View>

            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-primary text-lg mb-3 font-pregular">
                Latest Posts
              </Text>

              <Trending posts={posts} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos Found"
            subtitle="Be the first one to upload the video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
