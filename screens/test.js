import React, {Component} from 'react';
import {ViewPagerAndroid, View, Text, Dimensions} from 'react-native';
import TestContainer from './testcontainer'; 

export default class Test extends Component {
    state = {
        active: 0
    }

    rn = () => {
        return this.props.ar.map((item, index) => {
            return (
            <View style={{justifyContent: 'center', backgroundColor: `#33${index}`}} key={item}>
            <View style={{height: 70}}>
            <Text style={{textAlign: 'center', color: '#fff', zIndex: 100}}>{item}</Text>
            </View>
            </View>
            )
        })
    }

    change = ({nativeEvent}) => {
        this.setState({
            active: nativeEvent.positon
        })
    }

    render () {
        return (
            <TestContainer style={{ flex: 1 }}>
                <ViewPagerAndroid onPageSelected={this.change} style={{backgroundColor: '#444', flex: 1}}>
                    {this.rn()}
                </ViewPagerAndroid>
            </TestContainer>    
        )
    }
}