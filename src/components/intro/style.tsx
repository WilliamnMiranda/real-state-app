import styled from "styled-components/native";

export const ContainerPageIntro = styled.View`
  background-color: white;
  flex: 1;
  gap: 10px;
  padding: 15px;
  position: relative;
`;
export const HeaderButtonSkip = styled.View`
  width: 100%;
  background: white;
  align-items: flex-end;
`;
export const ButtonSkip = styled.TouchableOpacity`
  background-color: #dfdfdf;
  border-radius: 10px;
  padding: 5px 20px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;
export const FlatList = styled.FlatList`
  flex: 1;
  background-color: pink;
`;
export const ContainerButtons = styled.View`
  width: 100%;
  left: 15px;
  bottom: 7%;
  position: absolute;
  padding: 10px;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: red;
`;
export const ButtonNext = styled.TouchableOpacity`
  background-color: #00a8e1;
  width: 130px;
  align-items: center;
  justify-content: center;
  height: 45px;
`;
export const ButtonPrev = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
