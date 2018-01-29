import React, {Component} from 'react';
import {View, Text, Image, Linking} from 'react-native';
import moment from 'moment';
import {Icon} from 'react-native-elements';
import {colorGreyDark1, colorGreyLight1, colorGreyDark2, colorPrimaryLight, colorPrimaryDark} from '../../assets/base';

export default class NewsItem extends Component {
    render () {
        return (
            <View style={styles.container}>

            <Image
            source={require('../../assets/239H.png')}
            style={{height: 200, width: '100%', marginBottom: 30}}
            />

            <View style={styles.iconsRow}>
            {/* <Image 
            source={{uri: this.props.urlToImage}}
            style={styles.image}
            /> */}
            <Icon
            containerStyle={styles.icon}
            name='external-link'
            type='feather'
            color={colorGreyLight1}
            onPress={() => Linking.openURL(this.props.url)}
            />
            <Icon
            containerStyle={styles.icon}
            name='close'
            color={colorGreyLight1}
            onPress={()=> this.props.banAction(this.props.source.name)}
            />
            </View>
            
            <View>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
            <Text style={styles.author}>{this.props.author}</Text>
            <Text style={styles.publishedAt}>{moment.parseZone(this.props.publishedAt).fromNow()}</Text>
            <Text style={styles.name}>{this.props.source.name}</Text>
            </View>
            </View>
        );
    }
}

const styles = {
    iconsRow: {
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        top: 170
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: colorPrimaryLight,
        marginRight: 10
    },
    container: {
        padding: 20,
        marginBottom: 20,
        position: 'relative'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginRight: 10,
    },
    title: {
        color: colorGreyLight1, 
        fontSize: 18, 
        fontWeight: 'bold'
    },
    description: {
        color: colorGreyLight1, 
        fontSize: 16
    },
    author: {
        color: colorGreyLight1
    },
    publishedAt: {
        color: colorGreyLight1
    },
    name: {
        color: colorGreyLight1, 
        fontStyle: 'italic'
    }
}