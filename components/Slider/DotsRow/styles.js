import { colorGreyLight1, colorPrimaryDark } from "../../../assets/base";

export const styles = {
  activeDot: {
    position: "absolute",
    zIndex: 100,
    width: 16,
    height: 16,
    borderRadius: 50,
    backgroundColor: colorPrimaryDark,
    elevation: 5,
    opacity: 0.9,
    transform: [{ translateY: -0.5 }, { translateX: -0.5 }]
  },
  dot: {
    height: 15,
    width: 15,
    borderRadius: 50,
    backgroundColor: colorGreyLight1,
    marginRight: 10
  },

  dotsRow: {
    position: "absolute",
    top: 50,
    left: 30,
    flexDirection: "row"
  }
};
