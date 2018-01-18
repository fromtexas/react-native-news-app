import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {fetchNews} from '../actions/NewsActions';
import {connect} from 'react-redux';

class NewsScreen extends Component{
    static navigationOptions = ({navigation}) => {
        return {
          title: 'Your news collection',
          headerRight: (
            <Button
              title='Settings'
              backgroundColor='rgba(0,0,0,0)'
              color = 'rgba(0,122,255,1)'
              onPress={() => navigation.navigate('settings')} />)
        }
      };

    fetch = () => {
        this.props.fetchNews();
    }

    componentDidMount (){
        console.log('mounted');
        
    }

    render () {
        return (
            <View>
                <Text>News</Text>
                <Button title='get' onPress={this.fetch}/>
            </View>
        );
    }
}


const mapStateToProps = ({news}) => ({
    news
});


export default connect(mapStateToProps, {fetchNews})(NewsScreen);