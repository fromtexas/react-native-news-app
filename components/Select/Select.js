import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import SelectedList from "./SelectedList";
import SelectModal from "./SelectModal";
import SelectedItem from "./SelectedItem";
import { colorPrimaryDark } from "../../assets/base";
import { connect } from "react-redux";
import { settingsUpdated } from "../../actions/SettingsActions";

class Select extends Component {
  static defaultProps = {
    items: {}
  };

  showModal = () => {
    this.selectModal.changeVisibility();
  };

  shouldComponentUpdate(nextProps) {
    const currentPropsKeys = Object.keys(this.props.items);
    const nextPropsKeys = Object.keys(nextProps.items);
    return currentPropsKeys.length !== nextPropsKeys.length;
  }

  renderSelected = () => {
    const selectedKeys = Object.keys(this.props.items);
    return selectedKeys.map((item, index) => {
      return (
        <SelectedItem
          update={this.props.settingsUpdated}
          remove={this.props.remove}
          key={index}
          item={item}
        />
      );
    });
  };

  render() {
    return (
      <View style={this.props.style}>
        <SelectedList>{this.renderSelected()}</SelectedList>
        <Button
          onPress={this.showModal}
          title={this.props.type}
          buttonStyle={{ backgroundColor: colorPrimaryDark, borderRadius: 3 }}
          icon={{ name: this.props.icon }}
        />
        <SelectModal
          ref={instance => {
            this.selectModal = instance;
          }}
          update={this.props.settingsUpdated}
          options={this.props.options}
          add={this.props.add}
          remove={this.props.remove}
          checked={this.props.items}
        />
      </View>
    );
  }
}

Select.propTypes = {
  add: PropTypes.func,
  remove: PropTypes.func,
  items: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
  options: PropTypes.array,
  icon: PropTypes.string
};

export default connect(
  null,
  { settingsUpdated }
)(Select);
