import {
  colorPrimaryDark,
  colorGreyLight1,
  colorGreyDark1
} from "../../../assets/base";

export const styles = {
  container: {
    borderRadius: 100,
    backgroundColor: colorGreyLight1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 30,
    marginLeft: 10,
    marginBottom: 10
  },
  text: {
    fontSize: 14,
    color: colorGreyDark1,
    marginLeft: 10
  },
  iconContainer: {
    height: 30,
    width: 30,
    marginLeft: 10,
    borderRadius: 50,
    backgroundColor: colorPrimaryDark,
    elevation: 3,
    transform: [{ translateX: 0.3 }]
  }
};
