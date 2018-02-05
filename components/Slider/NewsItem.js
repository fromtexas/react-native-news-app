import React, {Component} from 'react';
import {View, Text, Image, Linking, Animated} from 'react-native';
import moment from 'moment';
import {Icon} from 'react-native-elements';
import {colorGreyDark1, colorGreyLight1, colorGreyDark2, colorPrimaryLight, colorPrimaryDark, colorGreyDark3} from '../../assets/base';



export default class NewsItem extends Component {
    state = {
        close: new Animated.Value(1)
    }

    banItem = () => {
        Animated.spring(this.state.close, {
            toValue: 0
        }).start(() => this.props.banAction(this.props.source.name));
    }

    render () {
        return (
            <Animated.View style={[styles.container, this.props.style, {transform: [{scale: this.state.close}]}]}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
            <Text style={styles.author}>{this.props.author}</Text>
            <Text style={styles.publishedAt}>{moment.parseZone(this.props.publishedAt).fromNow()}</Text>
            
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text style={styles.name}>{this.props.source.name}</Text>
            <Icon
            containerStyle={[styles.icon]}
            name='external-link'
            type='feather'
            color={colorGreyDark3}
            onPress={() => Linking.openURL(this.props.url)}
            />
            <Icon
            containerStyle={[styles.icon]}
            name='close'
            color={colorGreyDark3}
            onPress={this.banItem}
            />
            </View>
            </Animated.View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: colorGreyLight1,
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: colorGreyDark3,
        padding: 20,
    },
    title: {
        color: colorGreyDark1,
        fontSize: 18, 
        fontWeight: 'bold'
    },
    description: {
        color: colorGreyDark1,
        fontSize: 16, 
    },
    author: {
        color: colorPrimaryLight
    },
    publishedAt: {
        color: colorGreyDark3
    },
    name: {
        color: colorPrimaryLight,
        marginRight: 'auto',
        fontStyle: 'italic'
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginLeft: 10
    }
};

