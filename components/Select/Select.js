import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import SelectedList from './SelectedList';
import SelectModal from './SelectModal';
import {colorPrimaryDark} from '../../assets/base';
import {connect} from 'react-redux';
import {settingsUpdated} from '../../actions/SettingsActions';

class Select extends Component {

    static defaultProps = {
        items: {}
    }

    showModal = () => {
        this.selectModal.changeVisibility()
    }

    shouldComponentUpdate (nextProps) {
        const currentPropsKeys = Object.keys(this.props.items);
        const nextPropsKeys = Object.keys(nextProps.items);
        return currentPropsKeys.length !== nextPropsKeys.length;
    }


    render () {
        return (
            <View style={this.props.style}>
                <SelectedList
                selected={this.props.items}
                remove={this.props.remove}
                update={this.props.settingsUpdated}
                />
                <Button 
                onPress={this.showModal} 
                title={this.props.type} 
                buttonStyle={{backgroundColor: colorPrimaryDark, borderRadius: 3}}
                icon={{name: this.props.icon}}
                />
                <SelectModal
                ref={instance => { this.selectModal = instance }}
                update={this.props.settingsUpdated}
                options={this.props.options}
                add={this.props.add}
                remove={this.props.remove}
                checked={this.props.items}
                />
            </View>
        );
    }
}

export default connect(null, {settingsUpdated})(Select);
