import React, {Component} from 'react';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';

export default class SelectItem extends Component {
    state = {
        checked: false
    }

    //temporary
    componentDidMount () {
        this.props.options.forEach(item => {
            if(item === this.props.item){
                this.setState({checked: true})
            }
        });
    }

    change = () => {
        if(this.state.checked){
            this.props.remove(this.props.item);
        } else{
            this.props.add(this.props.item);
        }   
        this.setState({checked: !this.state.checked});
    }
    render () {
        return (
            <CheckBox
            title={this.props.item}
            checked={this.state.checked}
            onPress={this.change}
            />
        );
    }
}