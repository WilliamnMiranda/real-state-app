import { Text, Dimensions, FlatList } from "react-native";
import data from "./dataTest";
import React, { useRef, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as C from "./style";
const IntroSlider = () => {
  const window = Dimensions.get("window");
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = () => {
    setCurrentIndex((currentIndex) => currentIndex + 1);
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: currentIndex + 1,
    });
  };

  const prevIndex = () => {
    setCurrentIndex((currentIndex) => currentIndex - 1);
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: currentIndex - 1,
    });
  };
  return (
    <C.ContainerPageIntro>
      <C.HeaderButtonSkip>
        <C.ButtonSkip>
          <C.TextSkip>pular</C.TextSkip>
        </C.ButtonSkip>
      </C.HeaderButtonSkip>
      <FlatList
        style={{
          flex: 1,
          gap: 20,
        }}
        horizontal
        ref={flatListRef}
        pagingEnabled
        onMomentumScrollEnd={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          const value = Number((x / window.width).toFixed(0));
          if (value == 3) return;
          setCurrentIndex(value);
          console.log(value);
        }}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }: any) => {
          return (
            <C.ContainerItem width={window.width} height={window.height}>
              <C.ContainerText>
                <C.TittleIntro>
                  {item.title} <C.Flag>{item.flag}</C.Flag>
                </C.TittleIntro>
                <C.AltText>{item.description}</C.AltText>
              </C.ContainerText>
              <C.ContainerImage source={item.image}></C.ContainerImage>
            </C.ContainerItem>
          );
        }}
      />
      <C.ContainerButtons currentIndex={0}>
        {currentIndex > 0 && (
          <C.ButtonPrev onPress={() => prevIndex()}>
            <Icon name="arrow-left" size={18} color="black" />
          </C.ButtonPrev>
        )}
        {currentIndex < 3 && (
          <C.ButtonNext
            onPress={
              currentIndex == 2 ? () => console.log("login") : () => nextIndex()
            }
          >
            <Text>Proximo</Text>
          </C.ButtonNext>
        )}
      </C.ContainerButtons>
    </C.ContainerPageIntro>
  );
};

export default IntroSlider;
