import React, {Component} from 'react';
import {ViewPagerAndroid, View, Text} from 'react-native';

export default class CategorySlider extends Component {

    renderCategories = () => {
        return this.props.category.map((item) => {
            return (
                <View style={styles.pageStyle} key={item}>
                    <Text>{item}</Text>
                </View>
            );
        })
    }

    

    getIndex = ({nativeEvent}) => {
        this.props.activeCategory(this.props.category[nativeEvent.position]);
    }

    render () {
        
        return (
            <ViewPagerAndroid
            onPageSelected={this.getIndex}
            style={styles.viewPager}
            >
            {this.renderCategories()}
            </ViewPagerAndroid>
        );
    }
}

var styles = {
    viewPager: {
      height: 50
    },
    pageStyle: {
      alignItems: 'center',
      padding: 20,
    }
  }