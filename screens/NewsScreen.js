import React, {Component} from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {fetchNews} from '../actions/NewsActions';
import {activeCategory} from '../actions/ActiveCategory';
import {connect} from 'react-redux';
import NavigationStateNotifier from '../utils/NavigationStateNotifier';
import CategorySlider from '../components/Slider/CategorySlider';


class NewsScreen extends Component{
    constructor (props) {
        super(props);
        const onEnter = async () => {
            await this.props.fetchNews();
            this.setState({activeScreen: true});  
        };

        const onExit = () => {
            this.setState({activeScreen: false});
        };

        NavigationStateNotifier.newListener(this, onEnter, onExit);
        
    }
    
    static navigationOptions = ({navigation}) => {
        return {
          headerRight: (
            <Button
              title='Settings'
              backgroundColor='rgba(0,0,0,0)'
              color = 'rgba(0,122,255,1)'
              onPress={() => navigation.navigate('settings')} />)
        }
    };

    state = {
        activeScreen: false
    }

    renderScreen = () => {
        if(this.state.activeScreen){
            return (
            <View style={{paddingTop: StatusBar.currentHeight}}>
                <CategorySlider news={this.props.news} activeCategory={this.props.activeCategory} category={this.props.category}/>
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


const mapStateToProps = ({news, category, activeCategory}) => ({
    news,
    category,
    activeCategoryItem: activeCategory
});


export default connect(mapStateToProps, {fetchNews, activeCategory})(NewsScreen);