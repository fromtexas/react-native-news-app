import React, { PureComponent } from "react";
import { CheckBox } from "react-native-elements";
import PropTypes from "prop-types";
import { colorPrimaryDark, colorGreyLight1 } from "../../assets/base";

export default class SelectItem extends PureComponent {
  state = {
    checked: false
  };

  componentDidMount() {
    if (this.props.options[this.props.item]) {
      this.setState({ checked: true });
    }
  }

  change = () => {
    const { update, remove, add, item } = this.props;
    const { checked } = this.state;
    update(true);
    checked ? remove(item) : add(item);
    this.setState({ checked: !checked });
  };

  render() {
    const title =
      this.props.item.charAt(0).toUpperCase() + this.props.item.slice(1);
    return (
      <CheckBox
        uncheckedColor={colorGreyLight1}
        textStyle={{
          color: colorGreyLight1,
          fontSize: 16,
          fontWeight: "normal"
        }}
        checkedColor={colorPrimaryDark}
        title={title}
        checked={this.state.checked}
        onPress={this.change}
        containerStyle={{
          borderRadius: 0,
          backgroundColor: "transparent",
          borderColor: "transparent"
        }}
      />
    );
  }
}

SelectItem.propTypes = {
  update: PropTypes.func,
  add: PropTypes.func,
  remove: PropTypes.func,
  item: PropTypes.string,
  options: PropTypes.object
};
