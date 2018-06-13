import React, {PureComponent} from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import SelectedList from './SelectedList';
import SelectModal from './SelectModal';
import {colorPrimaryDark} from '../../assets/base';
import {connect} from 'react-redux';
import {settingsUpdated} from '../../actions/SettingsActions';

class Select extends PureComponent {

    static defaultProps = {
        items: []
    }

    state = {
        showList: false
    }

    closeModal = () => {
        this.setState({showList: false});
    }

    render () {
        return (
            <View style={this.props.style}>
                <SelectedList
                selected={this.props.items}
                remove={this.props.remove}
                />
                <Button 
                onPress={() => {this.setState({showList: !this.state.showList})}} 
                title={this.props.type} 
                buttonStyle={{backgroundColor: colorPrimaryDark, borderRadius: 3}}
                icon={{name: this.props.icon}}
                />
                <SelectModal
                update={this.props.settingsUpdated}
                options={this.props.options}
                add={this.props.add}
                remove={this.props.remove}
                visible={this.state.showList}
                close={this.closeModal}
                checked={this.props.items}
                />
            </View>
        );
    }
}

export default connect(null, {settingsUpdated})(Select);
