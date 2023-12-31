import { Text, FlatList } from "react-native";
import data from "./dataTest";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as C from "./style";
import useIntro from "../../hooks/useIntro";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../type/LoginType";
import { WIDTH_DEVICE, HEIGHT_DEVICE } from "../../configs/responsiveConfigs";
type ProfileProps = NativeStackScreenProps<RootStackParamList, "Intro">;
const IntroSlider = ({ navigation }: ProfileProps) => {
  const { nextIndex, prevIndex, flatListRef, currentIndex, momentumScrollEnd } =
    useIntro();
  console.log(navigation);
  return (
    <C.ContainerPageIntro>
      <C.HeaderButtonSkip>
        <C.ButtonSkip onPress={() => navigation.navigate("Explore")}>
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
        onMomentumScrollEnd={(e) => momentumScrollEnd(e)}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }: any) => {
          return (
            <C.ContainerItem width={WIDTH_DEVICE} height={HEIGHT_DEVICE}>
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
              currentIndex == 2
                ? () => navigation.navigate("Explore")
                : () => nextIndex()
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
