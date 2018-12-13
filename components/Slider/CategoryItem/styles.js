import {
  colorGreyDark1,
  colorGreyLight1,
  colorPrimaryLight
} from "../../../assets/base";

import { Dimensions } from "react-native";

export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SWIPE_THRESHOLD = 0.6 * SCREEN_HEIGHT;
export const SWIPE_OUT_DURATION = 250;

export const styles = {
  colorGreyDark1: {
    color: colorGreyDark1
  },
  colorGreyLight1: {
    color: colorGreyLight1
  },
  colorPrimaryLight: {
    color: colorPrimaryLight
  },
  image: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    backgroundColor: colorGreyDark1
  },
  viewPager: {
    height: SCREEN_HEIGHT
  },
  pageStyle: {
    flex: 1,
    backgroundColor: colorGreyDark1
  },
  pageTitile: {
    marginLeft: 28,
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "transparent",
    color: colorGreyLight1,
    zIndex: 10
  },
  itemTitle: {
    color: colorGreyLight1,
    fontWeight: "bold",
    fontSize: 26,
    backgroundColor: "transparent",
    textAlign: "left"
  },
  itemTime: {
    color: colorGreyLight1,
    marginBottom: 20,
    fontSize: 16
  },
  itemSource: {
    fontStyle: "italic",
    color: colorGreyLight1,
    fontSize: 16
  }
};
