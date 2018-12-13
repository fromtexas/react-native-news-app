import {
  colorGreyDark1,
  colorGreyLight1,
  colorPrimaryLight,
  colorGreyDark3
} from "../../../assets/base";

export const styles = {
  container: {
    backgroundColor: colorGreyLight1,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: colorGreyDark3,
    padding: 20
  },
  title: {
    color: colorGreyDark1,
    fontSize: 18,
    fontWeight: "bold"
  },
  description: {
    color: colorGreyDark1,
    fontSize: 16
  },
  author: {
    color: colorPrimaryLight
  },
  publishedAt: {
    color: colorGreyDark3
  },
  name: {
    color: colorPrimaryLight,
    marginRight: "auto",
    fontStyle: "italic"
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginLeft: 10
  },
  mainColors: {
    color: colorGreyDark3
  }
};
