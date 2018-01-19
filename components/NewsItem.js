import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class NewsItem extends Component {
    render () {
        return (
            <View>
                <Image style={{width: 50, height: 50}} source={{uri: this.props.urlToImage}}/>
                <Text>{this.props.title}</Text>
                <Text>{this.props.description}</Text>
                <Text>{this.props.author}</Text>
                <Text>{this.props.publishedAt}</Text>
                <Text>{this.props.source.name}</Text>
            </View>
        );
    }
}