import React, { PureComponent } from "react";
import { View } from "react-native";
import SelectedItem from "./SelectedItem";

export default class SelectList extends PureComponent {
  renderSelectedList = () => {
    const selectedKeys = Object.keys(this.props.selected);
    return selectedKeys.map((item, index) => {
      return (
        <SelectedItem
          update={this.props.update}
          remove={this.props.remove}
          key={index}
          item={item}
        />
      );
    });
  };
  render() {
    return <View style={styles.container}>{this.renderSelectedList()}</View>;
  }
}

const styles = {
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5
  }
};
