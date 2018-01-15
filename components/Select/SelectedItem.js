import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {colorPrimary, colorPrimaryDark} from '../../assets/base';

export default class SelectedItem extends Component {

    remove = (item) => {
        return () => {
            this.props.remove(item);
        };
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.item.toUpperCase()}</Text>
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
        backgroundColor: colorPrimary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginLeft: 5,
        marginBottom: 5
    },
    text: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 10
    },
    iconContainer: {
        height: 50,
        width: 50,
        marginLeft: 10,
        borderRadius: 50,
        backgroundColor: colorPrimaryDark
    }
}