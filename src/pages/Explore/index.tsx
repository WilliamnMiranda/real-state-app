import React from "react";
import * as C from "./style";
import Image1 from "../../assets/explorer/Rectangle8.png";
import Image3 from "../../assets/explorer/Rectangle9.png";
import Image4 from "../../assets/explorer/Rectangle10.png";
import Image2 from "../../assets/explorer/Rectangle11.png";
import { PADDING_CONTAINER_MAIN_PAGES } from "../../configs/responsiveConfigs";
import Email from "../../assets/icons/Email.svg";
import BottomLogin from "../../components/bottom_login";
import { RootStackParamList } from "../../type/LoginType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import LineOr from "../../components/lineOr";
type ProfileProps = NativeStackScreenProps<RootStackParamList, "Explore">;
function Explore({ navigation }: ProfileProps) {
  console.log(PADDING_CONTAINER_MAIN_PAGES);
  return (
    <C.ContainerExplore>
      <C.ContainerPhotos>
        <C.Photo source={Image1}></C.Photo>
        <C.Photo source={Image2}></C.Photo>
        <C.Photo source={Image3}></C.Photo>
        <C.Photo source={Image4}></C.Photo>
      </C.ContainerPhotos>
      <C.Tittle>
        Pronto para <C.BoldTittle> explorar? </C.BoldTittle>
      </C.Tittle>
      <C.ContainerButtonLoginEmail>
        <C.ButtonLoginEmail>
          <Email />
          <C.TextButtonLoginEmail onPress={() => navigation.navigate("Login")}>
            Continue com seu email
          </C.TextButtonLoginEmail>
        </C.ButtonLoginEmail>
      </C.ContainerButtonLoginEmail>
      <LineOr />
      <BottomLogin />
    </C.ContainerExplore>
  );
}

export default Explore;
