import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
export default class CategoryItem extends Component {

    
    render () {
        
        return (
            <View style={styles.sliderItem}>
                <Text>{this.props.item}</Text>
            </View>
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