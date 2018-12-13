import { colorGreyLight1 } from "../../../assets/base";
import { Dimensions } from "react-native";

export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const styles = {
  colorGreyLight1: {
    color: colorGreyLight1
  },
  viewPager: {
    height: SCREEN_HEIGHT
  },
  reload: {
    position: "absolute",
    top: 10,
    right: 60,
    borderRadius: 50,
    width: 50,
    height: 50
  },
  dots: {
    position: "absolute",
    top: 10,
    right: 15,
    borderRadius: 50,
    width: 50,
    height: 50
  }
};
