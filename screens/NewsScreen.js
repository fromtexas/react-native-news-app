import React, {PureComponent} from 'react';
import {View, Text, Button, StatusBar, ActivityIndicator} from 'react-native';
import {fetchNews} from '../actions/NewsActions';
import {settingsUpdated} from '../actions/SettingsActions';
import {banResourse} from '../actions/ResourceActions';
import {connect} from 'react-redux';
import NavigationStateNotifier from '../utils/NavigationStateNotifier';
import CategorySlider from '../components/Slider/CategorySlider';
import {colorPrimaryDark, colorGreyDark1} from '../assets/base';



class NewsScreen extends PureComponent{
    constructor (props) {
        super(props);
        const onEnter = async () => {
            if(this.props.settings){
                await this.props.fetchNews();
                this.props.settingsUpdated(false);
                this.setState({activeScreen: true});
            }

        };

        const onExit = () => {
            //this.setState({activeScreen: false});
        };

        NavigationStateNotifier.newListener(this, onEnter, onExit);
        
    }
    
    componentWillReceiveProps () {
        this.setState((prevState, props)=>{
            return {
                activeScreen: !props.settings
            };
            // if(props.settings){
            // }   
        });
    }

    state = {
        activeScreen: false
    }

    renderScreen = () => {
        if(this.state.activeScreen){
            return (
            <View style={{paddingTop: StatusBar.currentHeight, backgroundColor: colorGreyDark1}}>
                <CategorySlider 
                banAction={this.props.banResourse} 
                baned={this.props.ban} news={this.props.news}  
                category={this.props.category}
                navigation={this.props.navigation.navigate}
                reload={this.props.fetchNews}
                preloader={this.props.settingsUpdated}
                />
            </View>
            );
        } else {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colorGreyDark1}}>
                <ActivityIndicator size="large" color={colorPrimaryDark} />
                </View>
            );
        }
    }

    render () {
        return this.renderScreen();
    }
}


const mapStateToProps = ({news, category, ban, settings}) => ({
    news,
    category,
    ban,
    settings
});


export default connect(mapStateToProps, {fetchNews, banResourse, settingsUpdated})(NewsScreen);