import React, { PureComponent } from "react";
import { Text } from "react-native";
import { colorPrimary } from "../assets/base";

export default class Warning extends PureComponent {
  state = {
    warning: ""
  };

  componentWillReceiveProps(nextProps) {
    const { category, country } = nextProps;
    const categoryKeys = Object.keys(category);
    const countryKeys = Object.keys(country);

    if (!categoryKeys.length && !countryKeys.length) {
      return this.setState({
        warning: `Category and country can't be empty. Choose something.`
      });
    }
    if (!categoryKeys.length) {
      return this.setState({
        warning: `Category can't be empty. Choose something.`
      });
    }
    if (!countryKeys.length) {
      return this.setState({
        warning: `Country can't be empty. Choose something.`
      });
    }

    this.setState({ warning: "" });
  }

  render() {
    return (
      <Text style={{ textAlign: "center", color: colorPrimary }}>
        {this.state.warning}
      </Text>
    );
  }
}
