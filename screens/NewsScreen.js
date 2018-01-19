import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {fetchNews} from '../actions/NewsActions';
import {connect} from 'react-redux';
import NavigationStateNotifier from '../utils/NavigationStateNotifier';
import NewsList from '../components/NewsList';
import CategorySlider from '../components/CategorySlider';

class NewsScreen extends Component{
    constructor (props) {
        super(props);
        const onEnter = () => {
            this.setState({activeScreen: true});
            this.props.fetchNews();  
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

    render () {
        return (
            <View>
                <CategorySlider category={this.props.category}/>
                <NewsList news={this.props.news}/>
            </View>
        );
    }
}


const mapStateToProps = ({news, category}) => ({
    news,
    category
});


export default connect(mapStateToProps, {fetchNews})(NewsScreen);