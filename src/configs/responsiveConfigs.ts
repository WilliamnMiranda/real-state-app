import { Text, Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const scale = PixelRatio.getFontScale();

const paddingRatio = 0.05; // Proporção do padding em relação à largura da tela

export const WIDTH_DEVICE = width;
export const HEIGHT_DEVICE = height;
export const PADDING_CONTAINER_MAIN_PAGES = Math.round(
  width * paddingRatio * scale
)
  .toString()
  .concat("px"); // retorna 20 de padding de acordo com os pixels da tela
