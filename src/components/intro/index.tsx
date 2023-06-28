import { View, Text } from "react-native";
import React from "react";
import * as C from "./style";
const IntroSlider = () => {
  return (
    <C.ContainerPageIntro>
      <C.HeaderButtonSkip>
        <C.ButtonSkip>
          <Text>PULAR</Text>
        </C.ButtonSkip>
      </C.HeaderButtonSkip>
      <C.FlatList />
      <C.ContainerButtons>
        <C.ButtonPrev>
          <Text>O-</Text>
        </C.ButtonPrev>
        <C.ButtonNext>
          <Text>Proximo</Text>
        </C.ButtonNext>
      </C.ContainerButtons>
    </C.ContainerPageIntro>
  );
};

export default IntroSlider;
