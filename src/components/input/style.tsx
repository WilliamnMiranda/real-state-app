import { RFPercentage } from "react-native-responsive-fontsize";
import { styled } from "styled-components/native";

export const Input = styled.TextInput`
  background-color: white;
  height: 50px;
  width: 100%;
  padding: 0px 10px;
  border-radius: 10px;
  font-size: ${RFPercentage(2) + "px"};
  font-family: "Lato_400Regular";
`;
