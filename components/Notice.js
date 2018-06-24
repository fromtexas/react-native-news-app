import React, {PureComponent} from 'react';
import {Text, Animated} from 'react-native';
import {Button} from 'react-native-elements';

export default class Notice extends PureComponent{
    state={
        show: false
    }

    changeVisibility = (callback) => {
        return () => {
            this.setState({
                show: !this.state.show
            });
            if(callback){
                callback()
            }
        }
    }

    render () {
        return !this.state.show ? null : (
            <Animated.View>
                <Text>All news from {this.props.resource} will be ignored</Text>
                <Button
                onPress={this.changeVisibility()}
                title='Ok'
                />
                <Button
                onPress={this.changeVisibility(this.props.unban(this.props.recource))}
                title='Cansel'
                />
            </Animated.View>
        )
    }
}