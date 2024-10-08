import { Dimensions, Platform, StatusBar, PixelRatio } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
let { width, height } = Dimensions.get("window");

if (Platform.OS === "android") {
  height = height + StatusBar.currentHeight;
}

const guidelineBaseWidth = 430;
const guidelineBaseHeight = 932;

const widthScale = (size) => (width / guidelineBaseWidth) * size;
const heightScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (widthScale(size) - size) * factor;

export { widthScale, heightScale, moderateScale };
