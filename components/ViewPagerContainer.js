import React, { PureComponent } from "react";
import { View } from "react-native";
//fixin bug with ViewPager
export default class ViewPagerAndroidContainer extends PureComponent {
  state = {
    width: 0,
    height: 0
  };

  onLayoutChange = ({ nativeEvent }) => {
    const { width, height } = nativeEvent.layout;
    this.setState({ width, height });
  };

  render() {
    return (
      <View style={[this.props.style]} onLayout={this.onLayoutChange}>
        <View style={{ width: this.state.width, height: this.state.height }}>
          {this.props.children}
        </View>
      </View>
    );
  }
}
