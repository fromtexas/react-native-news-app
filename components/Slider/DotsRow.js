import React, {PureComponent} from 'react';
import { View, Animated} from 'react-native';
import {colorGreyLight1, colorPrimaryDark} from '../../assets/base';

export default class DotsRow extends PureComponent {

    state = {
        dotPosition: new Animated.ValueXY(0,0),
    }

    move = (activeDot) => {
        Animated.spring(this.state.dotPosition, {
            toValue: {
              x: 25*activeDot,
              y: 0
            }
        }).start();
    }

    renderDotsRow = () => {
        return this.props.category.map( item => {
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

    render () {
        return (
            <View style={styles.dotsRow}>
            <Animated.View
            style={[this.state.dotPosition.getLayout(), styles.activeDot]}
            >
            </Animated.View>
            {this.renderDotsRow()}
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
    dotsRow: {
        position: 'absolute',
        top: 50,
        left: 30,
        flexDirection: 'row'
    }
}