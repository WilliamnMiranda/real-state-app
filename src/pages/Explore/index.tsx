import React from "react";
import { Text } from "react-native";
import * as C from "./style";
import Image1 from "../../assets/explorer/Rectangle8.png";
import Image3 from "../../assets/explorer/Rectangle9.png";
import Image4 from "../../assets/explorer/Rectangle10.png";
import Image2 from "../../assets/explorer/Rectangle11.png";
import { PADDING_CONTAINER_MAIN_PAGES } from "../../configs/responsiveConfigs";
import Email from "../../assets/icons/Email.svg";
import BottomLogin from "../../components/bottom_login";
function Explore() {
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
          <C.TextButtonLoginEmail>
            Continue com seu email
          </C.TextButtonLoginEmail>
        </C.ButtonLoginEmail>
      </C.ContainerButtonLoginEmail>

      <C.LineOr>
        <C.ContainerOr>
          <C.TextOr>OU</C.TextOr>
        </C.ContainerOr>
      </C.LineOr>

      <BottomLogin />
    </C.ContainerExplore>
  );
}

export default Explore;
