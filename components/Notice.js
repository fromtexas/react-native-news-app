import React, {PureComponent} from 'react';
import {Text, Animated} from 'react-native';
import {Button} from 'react-native-elements';

export default class Notice extends PureComponent{
    state={
        show: false
    }

    componentWillReceiveProps (nextProp) {
        const currentBanArr =  Object.keys(this.props.baned);
        const nextBanArr =  Object.keys(nextProp);
        if(currentBanArr.length < nextBanArr){
            this.setState({show: true});
        }
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
            <Animated.View style={style.container}>
                <Text>All news from {this.props.source} will be ignored</Text>
                <Button
                onPress={this.changeVisibility()}
                title='Ok'
                />
                <Button
                onPress={this.changeVisibility(this.props.unban(this.props.source))}
                title='Cansel'
                />
            </Animated.View>
        )
    }
}

const style = {
    container: {
        flexDirection: 'collumn',
        position: 'absolute',
        width: '100%',
        bottom: 0
    }
}