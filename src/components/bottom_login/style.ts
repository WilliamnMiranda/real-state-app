import styled from "styled-components/native";
import {
  PADDING_CONTAINER_MAIN_PAGES,
  WIDTH_DEVICE,
} from "../../configs/responsiveConfigs";
import { RFPercentage } from "react-native-responsive-fontsize";

export const ContainerSocialsLogin = styled.View`
  gap: 10px;
  margin-top: 30px;
`;
export const TemplateButtonSocial = styled.TouchableOpacity`
  width: 100%;
  height: 49px;
  border-radius: 100px;
  background-color: white;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
`;
export const NameSocial = styled.Text`
  font-family: "Lato_700Bold";
  align-items: center;
  position: relative;
  justify-content: center;
  font-size: ${RFPercentage(2) + "px"};
`;
export const IconSocial = styled.Text`
  width: 50px;
`;
