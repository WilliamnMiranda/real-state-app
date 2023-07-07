import { View, Text } from "react-native";
import React from "react";
import * as C from "./style";
import Facebook from "../../assets/icons/Facebook.svg";
import Google from "../../assets/icons/Google.svg";
const BottomLogin = () => {
  return (
    <C.ContainerSocialsLogin>
      <C.TemplateButtonSocial>
        <C.IconSocial>
          <Facebook />
        </C.IconSocial>
        <C.NameSocial>Continuar com Facebook</C.NameSocial>
      </C.TemplateButtonSocial>
      <C.TemplateButtonSocial>
        <C.IconSocial>
          <Google />
        </C.IconSocial>
        <C.NameSocial>Continuar com Facebook</C.NameSocial>
      </C.TemplateButtonSocial>
    </C.ContainerSocialsLogin>
  );
};

export default BottomLogin;
