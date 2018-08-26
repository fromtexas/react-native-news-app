import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import {
  colorPrimary,
  colorGreyLight1,
  colorGreyDark1
} from "../../assets/base";

export default class BanedItem extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <Icon
          name="close"
          color="#fff"
          containerStyle={styles.iconContainer}
          onPress={() => this.props.unban(this.props.title)}
        />
      </View>
    );
  }
}

const styles = {
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
    marginRight: -0.3,
    borderRadius: 50,
    backgroundColor: colorPrimary
  }
};
