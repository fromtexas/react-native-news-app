import React, { Component } from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";
import { fetchNews, settingsUpdated, banResourse } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavigationStateNotifier from "../utils/NavigationStateNotifier";
import CategorySlider from "../components/Slider";
import { colorPrimaryDark, colorGreyDark1 } from "../assets/base";

class NewsScreen extends Component {
  componentDidMount() {
    const onEnter = async () => {
      if (this.props.settings) {
        await this.props.fetchNews();
        this.props.settingsUpdated(false);
        this.setState({ activeScreen: true });
      }
    };

    const onExit = () => {};

    NavigationStateNotifier.newListener(this, onEnter, onExit);
  }

  componentWillReceiveProps(props) {
    if (props.settings !== this.props.settings) {
      this.setState((prevState, props) => {
        return {
          activeScreen: !props.settings
        };
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.settings === this.props.settings) {
      return false;
    }
    return true;
  }

  state = {
    activeScreen: false
  };

  renderScreen = () => {
    if (this.state.activeScreen) {
      return (
        <View
          style={{
            paddingTop: StatusBar.currentHeight,
            backgroundColor: colorGreyDark1
          }}
        >
          <CategorySlider
            banAction={this.props.banResourse}
            baned={this.props.ban}
            news={this.props.news}
            category={this.props.category}
            navigation={this.props.navigation.navigate}
            reload={this.props.fetchNews}
            preloader={this.props.settingsUpdated}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colorGreyDark1
          }}
        >
          <ActivityIndicator size="large" color={colorPrimaryDark} />
        </View>
      );
    }
  };

  render() {
    return this.renderScreen();
  }
}

NewsScreen.propTypes = {
  news: PropTypes.object,
  category: PropTypes.object,
  ban: PropTypes.object,
  settings: PropTypes.bool,
  fetchNews: PropTypes.func,
  banResourse: PropTypes.func,
  settingsUpdated: PropTypes.func
};

const mapStateToProps = ({ news, category, ban, settings }) => ({
  news,
  category,
  ban,
  settings
});

export default connect(
  mapStateToProps,
  { fetchNews, banResourse, settingsUpdated }
)(NewsScreen);
