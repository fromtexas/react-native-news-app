import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import SelectedItem from "../Select/SelectedItem";
import SelectedList from "../Select/SelectedList";
import { styles as style } from "./styles";

export default class Baned extends PureComponent {
  renderList = () => {
    const banedKeys = Object.keys(this.props.ban);
    return banedKeys.map(item => {
      return <SelectedItem remove={this.props.unban} item={item} key={item} />;
    });
  };

  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.ban.length ? "Baned by You:" : ""}
        </Text>
        <SelectedList>{this.renderList()}</SelectedList>
      </View>
    );
  }
}

Baned.propTypes = {
  ban: PropTypes.object,
  unban: PropTypes.func
};

const styles = StyleSheet.create(style);
