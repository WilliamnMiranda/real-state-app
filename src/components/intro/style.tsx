import styled from "styled-components/native";

interface ItemIntro {
  width: number;
}
export const ContainerPageIntro = styled.View`
  background-color: white;
  flex: 1;
  gap: 10px;
  padding: 15px 20px;
  position: relative;
`;
export const HeaderButtonSkip = styled.View`
  width: 100%;
  background: white;
  align-items: flex-end;
`;
export const ButtonSkip = styled.TouchableOpacity`
  background-color: #00a8e1;
  border-radius: 15px;
  padding: 7px 26px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;
export const TextSkip = styled.Text`
  font-family: "Poppins_400Regular";
  font-size: 15;
  color: white;
`;
export const FlatList = styled.FlatList`
  flex: 1;
`;
export const ContainerButtons = styled.View`
  width: 100%;
  left: 20px;
  bottom: 5%;
  position: absolute;
  padding: 10px 30px;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonNext = styled.TouchableOpacity`
  background-color: #00a8e1;
  width: 190px;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  height: 54px;
`;
export const ButtonPrev = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
export const ContainerItem = styled.View`
  padding-top: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${({ width }: { width: number }) => width - 40};
  height: 100%;
  gap: 40px;
`;
export const TittleIntro = styled.Text`
  font-family: "Lato_400Regular";
  font-size: 20;
  line-height: 35;
  letter-spacing: 1px;
  width: 100%;
`;
export const ContainerImage = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 50px;
  background-color: orange;
`;
export const Flag = styled.Text`
  color: #0f3e5e;
  font-family: "Lato_900Black";
`;
