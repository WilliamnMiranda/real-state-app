import { Text, Dimensions, ImageBackground, View } from "react-native";
import data from "./dataTest";
import React from "react";
import * as C from "./style";
const IntroSlider = () => {
  const window = Dimensions.get("window");
  console.log(window.width);
  console.log(window.width - 15);
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
              <View style={{ width: "75%" }}>
                <C.TittleIntro>
                  {item.tittle} <C.Flag>{item.flag}</C.Flag>
                </C.TittleIntro>
              </View>
              <C.ContainerImage></C.ContainerImage>
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
