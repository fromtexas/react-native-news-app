import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Linking, Animated} from 'react-native';
import moment from 'moment';
import {Icon} from 'react-native-elements';
import {colorGreyDark1, colorGreyLight1, colorPrimaryLight, colorGreyDark3} from '../../assets/base';



class NewsItem extends Component {
    state = {
        close: new Animated.Value(1),
        baned: false,
    }

    banItem = () => {
        // Animated.spring(this.state.close, {
        //     toValue: 0
        // }).start(() => this.props.banAction(this.props.source.name));
        this.props.banAction(this.props.source.name);
    }

    componentWillMount () {
        this.ban(this.props.ban);
    }

    componentWillReceiveProps (nextProps){
        this.ban(nextProps.ban);
    }

    shouldComponentUpdate (nextProps){

        if(nextProps.ban[this.props.source.name] && !this.state.baned){
            return true;
        }
        else if(!nextProps.ban[this.props.source.name] && this.state.baned){
            return true;
        }
        else {
            return false;
        }
    }

    ban = (banlist) => {

        if(banlist[this.props.source.name]){
            this.setState({
                baned: true
            });
        }

        if(!banlist[this.props.source.name] && this.state.baned !== false){
            this.setState({
                baned: false
            });
        }
    }

    render () {
        if(this.state.baned && !this.state.justBaned){
            return null;
        }
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

const mapStateToProps = ({ban}) => ({
    ban
});


export default connect(mapStateToProps)(NewsItem);

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

