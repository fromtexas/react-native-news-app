import React, { PureComponent } from "react";
import {
  View,
  Text,
  Animated,
  Image,
  PanResponder,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import { Icon } from "react-native-elements";
import moment from "moment";
import {
  styles as style,
  SCREEN_HEIGHT,
  SWIPE_OUT_DURATION,
  SWIPE_THRESHOLD
} from "./styles";
import NewsList from "../NewsList";

export default class CategoryItem extends PureComponent {
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      this.imagePosition.setValue({ y: gesture.dy });
      this.getScale(gesture.dy);
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dy < -SWIPE_THRESHOLD) {
        this.forceSwipe();
      } else {
        this.resetPosition();
        this.resetScale();
      }
    },
    onShouldBlockNativeResponder: () => false
  });

  imagePosition = new Animated.ValueXY(0, 0);

  state = {
    imagePosition: this.imagePosition,
    panResponder: this.panResponder,
    scale: new Animated.Value(1)
  };

  resetPosition = () => {
    Animated.spring(this.state.imagePosition, {
      toValue: { x: 0, y: 0 }
    }).start();
  };

  forceSwipe = () => {
    Animated.timing(this.state.imagePosition, {
      toValue: { x: 0, y: -SCREEN_HEIGHT },
      duration: SWIPE_OUT_DURATION
    }).start();
  };

  getScale = dY => {
    let scale = Math.round(dY);
    if (scale > 0) {
      scale = 1 + scale / 2500;
    } else {
      scale = 1 + (-1 * scale) / 2500;
    }
    this.state.scale.setValue(scale);
  };

  resetScale = () => {
    Animated.spring(this.state.scale, {
      toValue: 1
    }).start();
  };

  render() {
    const splash = this.props.news[this.props.item].find(item => {
      if (!this.props.baned[item.source.name]) {
        return item;
      }
    });

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 75,
            backgroundColor: "transparent",
            zIndex: 9,
            paddingBottom: 60
          }}
        >
          <Text style={styles.pageTitile}>{this.props.item.toUpperCase()}</Text>
        </View>
        <Animated.View
          style={[
            this.state.imagePosition.getLayout(),
            {
              flex: 1,
              position: "absolute",
              width: "100%",
              height: SCREEN_HEIGHT,
              zIndex: 5,
              backgroundColor: styles.colorGreyDark1.color
            }
          ]}
          {...this.state.panResponder.panHandlers}
        >
          <Image
            ref="blurImage"
            source={{ uri: splash.urlToImage }}
            style={[styles.image]}
          />
          <View
            style={{
              flex: 1,
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(51, 51, 51, 0.5)",
              zIndex: 2
            }}
          />

          <Animated.View
            style={{
              zIndex: 3,
              padding: 35,
              flex: 1,
              justifyContent: "flex-end",
              transform: [{ scale: this.state.scale }]
            }}
          >
            <View>
              <View
                style={{
                  width: 5,
                  height: "90%",
                  position: "absolute",
                  left: -10,
                  backgroundColor: styles.colorPrimaryLight.color
                }}
              />
              <Text style={styles.itemSource}>{splash.source.name}</Text>
              <Text style={styles.itemTitle}>{splash.title}</Text>
              <Text style={styles.itemTime}>
                {moment.parseZone(splash.publishedAt).fromNow()}
              </Text>
            </View>
            <Icon
              size={35}
              containerStyle={{ alignSelf: "center", marginBottom: 20 }}
              color={styles.colorGreyLight1.color}
              name="keyboard-arrow-up"
            />
          </Animated.View>
        </Animated.View>
        {/* rendering process of NewsList require attention */}
        <NewsList
          banAction={this.props.banAction}
          news={this.props.news[this.props.item]}
        />
      </View>
    );
  }
}

CategoryItem.propTypes = {
  banAction: PropTypes.func,
  baned: PropTypes.object,
  news: PropTypes.object,
  item: PropTypes.string
};

const styles = StyleSheet.create(style);
