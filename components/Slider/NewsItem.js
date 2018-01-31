import React, {Component} from 'react';
import {View, Text, Image, Linking, Animated} from 'react-native';
import moment from 'moment';
import {Icon} from 'react-native-elements';
import {colorGreyDark1, colorGreyLight1, colorGreyDark2, colorPrimaryLight, colorPrimaryDark} from '../../assets/base';



export default class NewsItem extends Component {
    state = {
        size: new Animated.Value(),
        scale: new Animated.Value(1),
        maxHeight: 0
    }

    resize = () => {
        this.state.size.setValue(this.state.maxHeight);
        Animated.sequence([
            Animated.spring(this.state.scale, {
                toValue: 0
            }),
            Animated.timing(this.state.size, {
                toValue: 0
            })
        ]).start(() => {
            this.props.banAction(this.props.source.name);
        });
    }

    setMaxHeight = ({nativeEvent}) => {
        this.setState({
            maxHeight: nativeEvent.layout.height
        });
    }

    render () {
        //performance issues && works shitty
        return (
            <Animated.View style={[styles.container, {height: this.state.size}]}>
            <View style={styles.iconsRow}>
            <Animated.View style={{transform:[{scale: this.state.scale}]}}>
            <Icon
            containerStyle={[styles.icon]}
            name='external-link'
            type='feather'
            color={colorGreyLight1}
            onPress={() => Linking.openURL(this.props.url)}
            />
            </Animated.View>
            <Animated.View style={{transform:[{scale: this.state.scale}]}}>
            <Icon
            containerStyle={[styles.icon]}
            name='close'
            color={colorGreyLight1}
            onPress={this.resize}
            />
            </Animated.View>
            </View>
            
            <View onLayout={this.setMaxHeight}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
            <Text style={styles.author}>{this.props.author}</Text>
            <Text style={styles.publishedAt}>{moment.parseZone(this.props.publishedAt).fromNow()}</Text>
            <Text style={styles.name}>{this.props.source.name}</Text>
            </View>
            </Animated.View>
        );
    }
}

const styles = {
    iconsRow: {
        flexDirection: 'row',

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