import React, {Component} from 'react';
import {View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {colorPrimaryDark, colorGreyDark2, colorGreyLight1} from '../../assets/base';

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
        const title = this.props.item.charAt(0).toUpperCase() + this.props.item.slice(1);
        
        return (
            <CheckBox
            uncheckedColor={colorGreyDark2}
            textStyle={{color: colorGreyDark2}}
            checkedColor={colorPrimaryDark}
            title={title}
            checked={this.state.checked}
            onPress={this.change}
            containerStyle={{borderRadius: 0, backgroundColor: colorGreyLight1}}
            />
        );
    }
}