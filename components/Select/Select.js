import React, {Component} from 'react';
import {View, Text, SectionList} from 'react-native';
import {Button} from 'react-native-elements';
import SelectItem from './SelectItem';
import SelectedList from './SelectedList';
import SelectModal from './SelectModal';
import {colorPrimaryLight} from '../../assets/base';

export default class Select extends Component {

    static defaultProps = {
        items: []
    }

    state = {
        checkedArr: [],
        showList: false
    }

    addToCheckedArr = (item) => {
        this.setState({checkedArr: [...this.state.checkedArr, item]})
    }
    
    removeFromArr = (newItem) => {
       const newArr = this.state.checkedArr.filter(item => {
        if(item !== newItem) {
            return item;
        }
       });

       this.setState({checkedArr: newArr});
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
                buttonStyle={{backgroundColor: colorPrimaryLight}}
                icon={{name: this.props.icon}}
                />
                <SelectModal
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

const styles = {
    list: {
        marginTop: 10
    }
}