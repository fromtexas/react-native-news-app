import React, {Component} from 'react';
import {View, Text, ScrollView, Button, Dimensions} from 'react-native';


const SCREEN_WIDTH = Dimensions.get('window').width;
export default class CategorySlider extends Component {

    renderCategories = () => {
        return this.props.category.map((item) => {
            return (
                <View style={styles.sliderItem} key={item}>
                    <Text>{item}</Text>
                </View>
            );
        });
    }

    render () {
        return (
            <ScrollView
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={{height: 50}}
            >
            {this.renderCategories()}
            </ScrollView>
        );
    }
}

const styles = {
    sliderItem: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
    }
}