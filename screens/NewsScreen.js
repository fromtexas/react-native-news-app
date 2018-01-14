import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class NewsScreen extends Component{
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
    render () {
        return (
            <View>
                <Text>News</Text>
            </View>
        );
    }
}