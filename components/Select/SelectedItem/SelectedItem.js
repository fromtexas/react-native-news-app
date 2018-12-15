import React, { PureComponent } from "react";
import { Text, Animated, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { styles as style } from "./styles";

export default class SelectedItem extends PureComponent {
  state = {
    close: new Animated.ValueXY(0, 0),
    scale: new Animated.Value(0)
  };

  close = item => {
    return () => {
      this.props.update(true);
      Animated.spring(this.state.scale, {
        toValue: 0
      }).start(() => this.props.remove(item));
    };
  };

  open = () => {
    Animated.spring(this.state.scale, {
      toValue: 1
    }).start();
  };

  render() {
    const title =
      this.props.item.charAt(0).toUpperCase() + this.props.item.slice(1);
    return (
      <Animated.View
        onLayout={this.open}
        style={[styles.container, { transform: [{ scale: this.state.scale }] }]}
      >
        <Text style={styles.text}>{title}</Text>
        <Icon
          name="close"
          color="#fff"
          containerStyle={styles.iconContainer}
          onPress={this.close(this.props.item)}
        />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create(style);
