import styled from "styled-components/native";
import {
  PADDING_CONTAINER_MAIN_PAGES,
  WIDTH_DEVICE,
} from "../../configs/responsiveConfigs";
import { RFPercentage } from "react-native-responsive-fontsize";

export const ContainerExplore = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 30px ${PADDING_CONTAINER_MAIN_PAGES} 10px
    ${PADDING_CONTAINER_MAIN_PAGES};
`;
export const ContainerPhotos = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;
export const Photo = styled.Image`
  width: ${WIDTH_DEVICE / 2 - 25 + "px"};
  height: 170px;
  border-radius: 20px;
`;
export const Tittle = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: ${RFPercentage(3) + "px"};
  font-family: "Lato_400Regular";
  color: black;
`;
export const BoldTittle = styled.Text`
  color: #0f3e5e;
  font-family: "Poppins_600SemiBold";
  font-size: ${RFPercentage(3) + "px"};
`;
export const ButtonLoginEmail = styled.TouchableOpacity`
  width: 278px;
  height: 54px;
  align-items: center;
  justify-content: center;
  background-color: #00a8e1;
  border-radius: 10px;
  flex-direction: row;
  gap: 10px;
`;
export const ContainerButtonLoginEmail = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const TextButtonLoginEmail = styled.Text`
  color: white;
  font-family: "Lato_700Bold";
`;
