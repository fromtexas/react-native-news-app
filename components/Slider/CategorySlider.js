import React, {Component} from 'react';
import {ViewPagerAndroid, View, Animated, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {colorGreyDark1, colorGreyLight1, colorGreyDark2, colorPrimaryLight, colorPrimaryDark} from '../../assets/base';

import CategoryItem from './CategoryItem';


 const SCREEN_HEIGHT = Dimensions.get('window').height;


export default class CategorySlider extends Component {

    state = {
        activeDot: 0 ,
        dotPosition: new Animated.ValueXY(0,0),
    }

    renderCategories = () => {
        const {category, banAction, baned, news} = this.props;

        return category.map((item) => {
            return (
                <View style={{height: SCREEN_HEIGHT}} key={item}>
                <CategoryItem
                    key={item}
                    banAction = {banAction} 
                    baned = {baned}
                    news = {news}
                    item = {item}
                    />
                </View>
            );
        });
    }

    move = (activeDot) => {
        Animated.spring(this.state.dotPosition, {
            toValue: {
              x: 25*activeDot,
              y: 0
            }
          }).start();
    }

    fetchFreshNews = async () => {
        this.props.preloader(true);
        await this.props.reload();
        this.props.preloader(false);
    }

    renderDotsRow = () => {
        return this.props.category.map((item, i) => {
            return (
                <View key={item} style={{
                    height: 15,
                    width: 15,
                    borderRadius: 50,
                    backgroundColor: colorGreyLight1,
                    marginRight: 10
                }}>   
                </View>
            );
        });
    }


    getIndex = ({nativeEvent}) => {
        this.move(nativeEvent.position);
    }

    render () {
        
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
            name='update'
            color={colorGreyLight1}
            onPress={this.fetchFreshNews}
            />
            <Icon 
            containerStyle={styles.dots}
            name='dots-three-vertical'
            color={colorGreyLight1}
            type='entypo'
            onPress={() => this.props.navigation('settings')}
            />
            <View style={styles.dotsRow}>
            <Animated.View
            style={[this.state.dotPosition.getLayout(), styles.activeDot]}
            >
            </Animated.View>
            {this.renderDotsRow()}
            </View>
            </View>
        );
    }
}

var styles = {
    activeDot:{
        position: 'absolute',
        zIndex: 100,
        width: 16,
        height: 16,
        borderRadius: 50,
        backgroundColor: colorPrimaryDark,
        elevation: 5,
        opacity: 0.9,
        transform: [{translateY: -0.5}, {translateX: -0.5}]
    },
    viewPager: {
      height: SCREEN_HEIGHT,
    },
    reload: {
        position: 'absolute',
        top: 10,
        right: 60,
        borderRadius: 50,
        width: 50,
        height: 50
    },
    dots: {
        position: 'absolute',
        top: 10,
        right: 15,
        borderRadius: 50,
        width: 50,
        height: 50
    },
    dotsRow: {
        position: 'absolute',
        top: 50,
        left: 30,
        flexDirection: 'row'
    }
  }