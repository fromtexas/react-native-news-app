import React, {Component} from 'react';
import {View, Text} from 'react-native';
import BanedItem from './BanedItem';
import {colorGreyLight1} from '../../assets/base';

export default class BanedList extends Component {

    renderList = () => {
        return this.props.ban.map((item) => {
            return <BanedItem unban={this.props.unban} title={item} key={item}/>;
        });
    }

    render () {
        return (
        <View>
        <Text style={styles.text}>{this.props.ban.length ? 'Baned by You:' : ''}</Text>
        <View style={styles.container}>
        {this.renderList()}
        </View>
        </View>);;
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5
    },
    text: {
        textAlign: 'center',
        color: colorGreyLight1,
        paddingBottom: 5
    }
}