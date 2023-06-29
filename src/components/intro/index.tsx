import { View, Text, TouchableHighlight, Dimensions } from "react-native";
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
          <Text>PULAR</Text>
        </C.ButtonSkip>
      </C.HeaderButtonSkip>
      <C.FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={[
          {
            id: 1,
            name: "williamaaaaaaaaa",
          },
          {
            id: 2,
            name: "izadoraaaaaaaa",
          },
        ]}
        renderItem={({ item }: any) => {
          return (
            <C.ContainerItem width={window.width} height={window.height}>
              <Text>{item.name}</Text>
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
