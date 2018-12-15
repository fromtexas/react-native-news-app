import { StatusBar } from "react-native";
import {
  colorGreyDark1,
  colorGreyLight1,
  colorPrimary
} from "../../assets/base";

export const styles = {
  colorPrimary: {
    color: colorPrimary
  },
  colorGreyDark1: {
    color: colorGreyDark1
  },
  colorGreyLight1: {
    color: colorGreyLight1
  },
  viewPager: {
    flex: 1
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colorGreyDark1,
    paddingBottom: 20,
    paddingTop: StatusBar.currentHeight
  },
  screenTitle: {
    textAlign: "center",
    color: colorGreyLight1,
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10
  },
  screenParagraph: {
    textAlign: "center",
    color: colorGreyLight1
  },
  iconContainer: {
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10
  }
};
