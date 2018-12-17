import React, { PureComponent } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { Icon, Button } from "react-native-elements";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addCategory,
  removeCategory,
  addCountry,
  removeCountry,
  unbanResourse
} from "../actions";
import { colorGreyDark1, colorGreyLight1 } from "../assets/base";
import Select from "../components/Select";
import Baned from "../components/Baned";
import Warning from "../components/Warning";
import { categories, country } from "../constants";

class SettingsScreen extends PureComponent {
  checkSubmit = () => {
    const { category, country } = this.props;
    const categoryKeys = Object.keys(category);
    const countryKeys = Object.keys(country);

    if (categoryKeys.length && countryKeys.length) {
      return false;
    }

    return true;
  };

  render() {
    return (
      <View
        style={{
          paddingTop: StatusBar.currentHeight,
          backgroundColor: colorGreyDark1,
          flex: 1
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 60,
            alignItems: "center"
          }}
        >
          <Icon
            name="arrow-back"
            color={colorGreyLight1}
            size={32}
            containerStyle={{ marginLeft: 20, borderRadius: 50 }}
            onPress={() =>
              !this.checkSubmit()
                ? this.props.navigation.navigate("news")
                : console.log("warning")
            }
          />
          <Text
            style={{
              color: colorGreyLight1,
              fontSize: 22,
              fontWeight: "bold",
              paddingLeft: 20
            }}
          >
            Settings
          </Text>
        </View>

        <Warning category={this.props.category} country={this.props.country} />

        <ScrollView>
          <Select
            add={this.props.addCategory}
            remove={this.props.removeCategory}
            items={this.props.category}
            style={{ marginTop: 10, marginBottom: 10 }}
            type="CATEGORY"
            options={categories}
            icon="call-received"
          />

          <Select
            add={this.props.addCountry}
            remove={this.props.removeCountry}
            items={this.props.country}
            style={{ marginTop: 5, marginBottom: 20 }}
            type="COUNTRY"
            options={country}
            icon="map"
          />

          <Baned unban={this.props.unbanResourse} ban={this.props.ban} />

          <Button
            disabled={this.checkSubmit()}
            buttonStyle={{ backgroundColor: colorGreyLight1, borderRadius: 3 }}
            color={colorGreyDark1}
            icon={{ name: "check", color: colorGreyDark1 }}
            title="DONE"
            onPress={() => this.props.navigation.navigate("news")}
          />
        </ScrollView>
      </View>
    );
  }
}

SettingsScreen.propTypes = {
  category: PropTypes.object,
  country: PropTypes.object,
  ban: PropTypes.object,
  addCategory: PropTypes.func,
  removeCategory: PropTypes.func,
  addCountry: PropTypes.func,
  removeCountry: PropTypes.func,
  unbanResourse: PropTypes.func
};

const mapStateToProps = ({ category, country, ban }) => ({
  category,
  country,
  ban
});

export default connect(
  mapStateToProps,
  { addCategory, removeCategory, addCountry, removeCountry, unbanResourse }
)(SettingsScreen);
