import React, {PureComponent} from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {fetchNews} from '../actions/NewsActions';
import {activeCategory} from '../actions/ActiveCategory';
import {settingsUpdated} from '../actions/SettingsActions';
import {banResourse} from '../actions/ResourceActions';
import {connect} from 'react-redux';
import NavigationStateNotifier from '../utils/NavigationStateNotifier';
import CategorySlider from '../components/Slider/CategorySlider';



class NewsScreen extends PureComponent{
    constructor (props) {
        super(props);
        const onEnter = async () => {
            console.log(this.props.settings);
            if(this.props.settings){
                await this.props.fetchNews();
                this.props.settingsUpdated(false);
            }   
            this.setState({activeScreen: true});       
        };

        const onExit = () => {
            //this.setState({activeScreen: false});
        };

        NavigationStateNotifier.newListener(this, onEnter, onExit);
        
    }
    

    state = {
        activeScreen: false
    }

    renderScreen = () => {
        if(this.state.activeScreen){
            return (
            <View style={{paddingTop: StatusBar.currentHeight}}>
                <CategorySlider 
                banAction={this.props.banResourse} 
                baned={this.props.ban} news={this.props.news}  
                category={this.props.category}
                navigation={this.props.navigation.navigate}
                reload={this.props.fetchNews}
                />
            </View>
            );
        } else {
            return (
                <View>
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