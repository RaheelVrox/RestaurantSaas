import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const CustomImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserInteracting) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isUserInteracting, images.length]);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: currentIndex,
        animated: true,
      });
    }
  }, [currentIndex]);

  const handleScrollBegin = () => {
    setIsUserInteracting(true);
  };

  const handleScrollEnd = () => {
    setIsUserInteracting(false);
  };

  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        extraData={currentIndex}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        scrollEnabled={true}
        onScrollBeginDrag={handleScrollBegin}
        onScrollEndDrag={handleScrollEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "4%",
  },
  slide: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "89%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 20,
    borderWidth: 1,
  },
  flatList: {
    alignItems: "center",
  },
});

export default CustomImageSlider;
