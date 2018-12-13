import React, { PureComponent } from "react";
import { ViewPagerAndroid, View, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { colorGreyLight1 } from "../../assets/base";

import CategoryItem from "./CategoryItem";
import DotsRow from "./DotsRow";

const SCREEN_HEIGHT = Dimensions.get("window").height;

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
          color={colorGreyLight1}
          onPress={this.fetchFreshNews}
        />
        <Icon
          containerStyle={styles.dots}
          name="dots-three-vertical"
          color={colorGreyLight1}
          type="entypo"
          onPress={() => this.props.navigation("settings")}
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

var styles = {
  viewPager: {
    height: SCREEN_HEIGHT
  },
  reload: {
    position: "absolute",
    top: 10,
    right: 60,
    borderRadius: 50,
    width: 50,
    height: 50
  },
  dots: {
    position: "absolute",
    top: 10,
    right: 15,
    borderRadius: 50,
    width: 50,
    height: 50
  }
};
