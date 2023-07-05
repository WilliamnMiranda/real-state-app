import { useRef, useState } from "react";
import { FlatList } from "react-native";
import { WIDTH_DEVICE } from "../configs/responsiveConfigs";
const useIntro = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = () => {
    setCurrentIndex((currentIndex) => currentIndex + 1);
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: currentIndex + 1,
    });
  };
  const momentumScrollEnd = (e: any) => {
    const x = e.nativeEvent.contentOffset.x;
    const value = Number((x / WIDTH_DEVICE).toFixed(0));
    if (value == 3) return;
    setCurrentIndex(value);
  };
  const prevIndex = () => {
    setCurrentIndex((currentIndex) => currentIndex - 1);
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: currentIndex - 1,
    });
  };
  return {
    nextIndex,
    prevIndex,
    flatListRef,
    setCurrentIndex,
    currentIndex,
    momentumScrollEnd,
  };
};

export default useIntro;
