import { Text, Dimensions, ImageBackground, View, Image } from "react-native";
import data from "./dataTest";
import React from "react";
import Rectangle6 from "../../assets/intro/Rectangle6.svg";
import * as C from "./style";
const IntroSlider = () => {
  const window = Dimensions.get("window");
  console.log(Rectangle6 + "aa");
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
              </C.ContainerText>
              <C.ContainerImage source={item.image}></C.ContainerImage>
            </C.ContainerItem>
          );
        }}
      />
      <C.ContainerButtons>
        <C.ButtonPrev>
          <Text>O--</Text>
        </C.ButtonPrev>
        <C.ButtonNext>
          <Text>Proximo</Text>
        </C.ButtonNext>
      </C.ContainerButtons>
    </C.ContainerPageIntro>
  );
};

export default IntroSlider;
