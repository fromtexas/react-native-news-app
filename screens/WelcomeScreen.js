import React, { PureComponent } from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  ViewPagerAndroid,
  Image,
  AsyncStorage
} from "react-native";
import { Icon, Button } from "react-native-elements";
import { connect } from "react-redux";
import { colorGreyDark1, colorGreyLight1, colorPrimary } from "../assets/base";
import Select from "../components/Select/Select";
import NavigationStateNotifier from "../utils/NavigationStateNotifier";
import { addCategory, removeCategory } from "../actions/CategoryActions";
import { addCountry, removeCountry } from "../actions/CountryActions";
import { settingsUpdated } from "../actions/SettingsActions";
import ViewPagerContainer from "../components/ViewPagerContainer";
import Warning from "../components/Warning";
import { options } from "../options";

const { categories, country } = options;

class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props);

    NavigationStateNotifier.newListener(this, this.onEnter, this.onExit);
  }

  onEnter = () => {
    this.setState({ activeScreen: true });
  };

  onExit = () => {
    this.setState({ activeScreen: false });
  };

  state = {
    activeScreen: true
  };

  checkSubmit = () => {
    const { category, country } = this.props;
    const categoryKeys = Object.keys(category);
    const countryKeys = Object.keys(country);

    if (categoryKeys.length && countryKeys.length) {
      return false;
    }

    return true;
  };

  componentWillMount = async () => {
    let root = await AsyncStorage.getAllKeys();

    const { category, country } = this.props;
    const categoryKeys = Object.keys(category);
    const countryKeys = Object.keys(country);

    if (categoryKeys.length && countryKeys.length && root) {
      this.props.navigation.navigate("news");
    }
  };

  render() {
    return !this.state.activeScreen ? null : (
      <View style={styles.screenContainer}>
        <ViewPagerContainer style={{ flex: 1 }}>
          <ViewPagerAndroid ref="pages" style={styles.viewPager}>
            <View style={{ flex: 1 }} key="1">
              <Image
                style={{ width: 300, height: 300, alignSelf: "center" }}
                source={require("../assets/meh_img.png")}
              />
              <Text style={styles.screenTitle}>
                Get breaking news headlines with short description filtered by
                your interests and country preferences.
              </Text>
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Button
                  large
                  iconRight={{ name: "arrow-forward" }}
                  title="NEXT"
                  buttonStyle={{
                    backgroundColor: colorPrimary,
                    borderRadius: 3
                  }}
                  onPress={() => this.refs.pages.setPage(1)}
                />
              </View>
            </View>

            <View key="2">
              <ScrollView>
                <Warning
                  country={this.props.country}
                  category={this.props.category}
                />
                <Icon
                  name="settings"
                  color={colorGreyLight1}
                  size={48}
                  containerStyle={styles.iconContainer}
                />

                <Text style={styles.screenParagraph}>
                  Put your interests here:{" "}
                </Text>
                <Select
                  add={this.props.addCategory}
                  remove={this.props.removeCategory}
                  items={this.props.category}
                  style={{ marginTop: 10, marginBottom: 10 }}
                  type="CATEGORY"
                  options={categories}
                  icon="call-received"
                />

                <Text style={styles.screenParagraph}>
                  Select one or several countries:{" "}
                </Text>
                <Select
                  add={this.props.addCountry}
                  remove={this.props.removeCountry}
                  items={this.props.country}
                  style={{ marginTop: 5, marginBottom: 20 }}
                  type="COUNTRY"
                  options={country}
                  icon="map"
                />

                <Button
                  disabled={this.checkSubmit()}
                  buttonStyle={{
                    backgroundColor: colorGreyLight1,
                    borderRadius: 3
                  }}
                  color={colorGreyDark1}
                  icon={{ name: "check", color: colorGreyDark1 }}
                  title="DONE"
                  onPress={() => this.props.navigation.navigate("news")}
                />
              </ScrollView>

              <Text
                style={{
                  alignSelf: "flex-end",
                  color: colorGreyLight1,
                  fontSize: 8
                }}
              >
                App was developed with newsapi.org
              </Text>
            </View>
          </ViewPagerAndroid>
        </ViewPagerContainer>
      </View>
    );
  }
}

const mapStateToProps = ({ category, country }) => ({
  category,
  country
});

export default connect(
  mapStateToProps,
  { addCategory, removeCategory, addCountry, removeCountry, settingsUpdated }
)(WelcomeScreen);

const styles = {
  viewPager: {
    flex: 1
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colorGreyDark1,
    paddingBottom: 20,
    paddingTop: StatusBar.currentHeight
  },
  screenTitle: {
    textAlign: "center",
    color: colorGreyLight1,
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10
  },
  screenParagraph: {
    textAlign: "center",
    color: colorGreyLight1
  },
  iconContainer: {
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10
  }
};
