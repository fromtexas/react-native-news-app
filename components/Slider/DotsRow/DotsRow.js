import React, { PureComponent } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { styles as style } from "./styles";

export default class DotsRow extends PureComponent {
  state = {
    dotPosition: new Animated.ValueXY(0, 0)
  };

  move = activeDot => {
    Animated.spring(this.state.dotPosition, {
      toValue: {
        x: 25 * activeDot,
        y: 0
      }
    }).start();
  };

  renderDotsRow = () => {
    const categoryKeys = Object.keys(this.props.category);
    return categoryKeys.map(item => {
      return <View key={item} style={styles.dot} />;
    });
  };

  render() {
    return (
      <View style={styles.dotsRow}>
        <Animated.View
          style={[this.state.dotPosition.getLayout(), styles.activeDot]}
        />
        {this.renderDotsRow()}
      </View>
    );
  }
}

const styles = StyleSheet.create(style);
