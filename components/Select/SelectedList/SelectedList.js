import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { styles as style } from "./styles";

export default class SelectList extends PureComponent {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create(style);
