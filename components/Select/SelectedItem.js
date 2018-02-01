import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {colorPrimary, colorPrimaryDark, colorGreyDark2, colorGreyLight1, colorGreyDark1} from '../../assets/base';

export default class SelectedItem extends Component {

    remove = (item) => {
        return () => {
            this.props.remove(item);
        };
    }

    render () {
        const title = this.props.item.charAt(0).toUpperCase() + this.props.item.slice(1);
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                <Icon
                name='close'
                color='#fff'
                containerStyle={styles.iconContainer}
                onPress={this.remove(this.props.item)}
                />
            </View>
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
        marginRight: -0.3,
        borderRadius: 50,
        backgroundColor: colorPrimaryDark
    }
}