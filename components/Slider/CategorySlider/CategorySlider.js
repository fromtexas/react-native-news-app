import React, { PureComponent } from "react";
import { ViewPagerAndroid, View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";
import { styles as style, SCREEN_HEIGHT } from "./styles";

import CategoryItem from "../CategoryItem";
import DotsRow from "../DotsRow";

export default class CategorySlider extends PureComponent {
  renderCategories = () => {
    const { category, banAction, baned, news } = this.props;
    const categoryKeys = Object.keys(category);
    return categoryKeys.map(item => {
      return (
        <View style={{ height: SCREEN_HEIGHT }} key={item}>
          <CategoryItem
            key={item}
            banAction={banAction}
            baned={baned}
            news={news}
            item={item}
          />
        </View>
      );
    });
  };

  fetchFreshNews = async () => {
    this.props.preloader(true);
    await this.props.reload();
    this.props.preloader(false);
  };

  getIndex = ({ nativeEvent }) => {
    this.dotsRow.move(nativeEvent.position);
  };

  navigateSettings = () => {
    this.props.navigation("settings");
  };

  render() {
    return (
      <View>
        <ViewPagerAndroid
          onPageSelected={this.getIndex}
          style={styles.viewPager}
        >
          {this.renderCategories()}
        </ViewPagerAndroid>
        <Icon
          containerStyle={styles.reload}
          name="update"
          color={styles.colorGreyLight1.color}
          onPress={this.fetchFreshNews}
        />
        <Icon
          containerStyle={styles.dots}
          name="dots-three-vertical"
          color={styles.colorGreyLight1.color}
          type="entypo"
          onPress={this.navigateSettings}
        />
        <DotsRow
          ref={instance => {
            this.dotsRow = instance;
          }}
          category={this.props.category}
        />
      </View>
    );
  }
}

CategorySlider.propTypes = {
  banAction: PropTypes.func,
  baned: PropTypes.object,
  news: PropTypes.object,
  category: PropTypes.object,
  navigation: PropTypes.func,
  reload: PropTypes.func,
  preloader: PropTypes.func
};

const styles = StyleSheet.create(style);
