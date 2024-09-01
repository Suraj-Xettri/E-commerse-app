import { View, Text, ImageBackground, FlatList } from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";

const TrendingPosts = ({ activeItem, item }) => {
  const zoomIn = {
    0: {
      scale: 0.9,
    },
    1: {
      scale: 1,
    },
  };
  const zoomOut = {
    0: {
      scale: 1,
    },
    1: {
      scale: 0.9,
    },
  };
  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item._id ? zoomIn : zoomOut}
      duration={500}
    >
      <View className="justify-center items-center">
        <ImageBackground
          source={{ uri: item.image }}
          className="rounded-[35px] overflow-x-hidden w-52 h-72 shadow-black/40 shadow-lg mt-5 border border-secondary-200"
          resizeMode="cover"
        />
      </View>
    </Animatable.View>
  );
};

const Trending = ({ posts }) => {
  const viewableItemsChanged = ({viewableItems}) => {
    if(viewableItems.length > 0){
      setactiveItem(viewableItems[0].key)
    }
  }
  const [activeItem, setactiveItem] = useState(posts[1]);
  return (
    <FlatList
      data={posts}
      onViewableItemsChanged={viewableItemsChanged}
      keyExtractor={(items) => items._id}
      renderItem={({ item }) => <TrendingPosts item={item}  activeItem={activeItem}/>}
      
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70
      }}
      contentOffset = {{x:170}}
      horizontal
    />
  );
};

export default Trending;
