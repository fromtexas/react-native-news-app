import React, {PureComponent} from 'react';
import {Text, Animated, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import {colorPrimaryDark, colorGreyLight1, colorGreyDark1} from '../../assets/base';

export default class SelectedItem extends PureComponent {

    state = {
        close: new Animated.ValueXY(0,0),
        scale: new Animated.Value(0)
    }

    remove = (item) => {
        return () => {
            Animated.spring(this.state.close, {
                toValue:{
                    x: Dimensions.get('window').width,
                    y: 0
                }
            }).start(() => this.props.remove(item));
        } 
    }

    close = (item) => {
        return () => {
            Animated.spring(this.state.scale, {
                toValue: 0
            }).start(() => this.props.remove(item));
        }
    }

    open = () => {
        Animated.spring(this.state.scale, {
            toValue: 1
        }).start();
    }

    getSize = ({nativeEvent}) => {
        const {width} = nativeEvent.layout;
        this.state.close.setValue(width);
    }

    render () {
        const title = this.props.item.charAt(0).toUpperCase() + this.props.item.slice(1);
        return (
            <Animated.View onLayout={this.open} style={[styles.container, {transform: [{scale: this.state.scale}]}]}>
                <Text style={styles.text}>{title}</Text>
                <Icon
                name='close'
                color='#fff'
                containerStyle={styles.iconContainer}
                onPress={this.close(this.props.item)}
                />
            </Animated.View>
        );
    }
}

const styles = {
    container: {
        borderRadius: 100,
        backgroundColor: colorGreyLight1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30,
        marginLeft: 10,
        marginBottom: 10
    },
    text: {
        fontSize: 14,
        color: colorGreyDark1,
        marginLeft: 10
    },
    iconContainer: {
        height: 30,
        width: 30,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: colorPrimaryDark,
        elevation: 3,
        transform: [{translateX: 0.3}]
    }
}