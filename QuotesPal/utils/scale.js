import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const widthScale = (size) => (width / guidelineBaseWidth) * size;
const heightScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (widthScale(size) - size) * factor;

export { widthScale, heightScale, moderateScale };
