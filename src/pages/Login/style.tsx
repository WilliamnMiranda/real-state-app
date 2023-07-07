import { RFPercentage } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";
import { PADDING_CONTAINER_MAIN_PAGES } from "../../configs/responsiveConfigs";
export const ContainerLogin = styled.TouchableOpacity`
  flex: 1;
  background-color: #f5f5f5;
  padding: 30px ${PADDING_CONTAINER_MAIN_PAGES} 10px
    ${PADDING_CONTAINER_MAIN_PAGES};
`;
export const Tittle = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: ${RFPercentage(3) + "px"};
  font-family: "Lato_400Regular";
  color: black;
  margin-top: 20px;
  margin-bottom: 15px;
`;
export const BoldTittle = styled.Text`
  color: #0f3e5e;
  font-family: "Poppins_600SemiBold";
  font-size: ${RFPercentage(3) + "px"};
`;

export const AltText = styled.Text`
  width: 75%;
  font-family: "Lato_400Regular";
  color: #53587a;
  margin-bottom: 20px;
`;
export const ContainerInputs = styled.View`
  gap: 20px;
`;
