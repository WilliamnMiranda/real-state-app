import { Text, Dimensions, ImageBackground, View, Image } from "react-native";
import data from "./dataTest";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as C from "./style";
const IntroSlider = () => {
  const window = Dimensions.get("window");
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <C.ContainerPageIntro>
      <C.HeaderButtonSkip>
        <C.ButtonSkip>
          <C.TextSkip>pular</C.TextSkip>
        </C.ButtonSkip>
      </C.HeaderButtonSkip>
      <C.FlatList
        horizontal
        pagingEnabled
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
          <C.ButtonPrev>
            <Icon name="arrow-left" size={18} color="black" />
          </C.ButtonPrev>
        )}
        <C.ButtonNext>
          <Text>Proximo</Text>
        </C.ButtonNext>
      </C.ContainerButtons>
    </C.ContainerPageIntro>
  );
};

export default IntroSlider;
