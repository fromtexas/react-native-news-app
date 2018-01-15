import React, {Component} from 'react';
import {View, Text, Button, SectionList} from 'react-native';
import SelectItem from './SelectItem';
import SelectedList from './SelectedList';
import SelectModal from './SelectModal';

export default class Select extends Component {
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
                selected={this.state.checkedArr}
                remove={this.removeFromArr}
                />
                <Button 
                onPress={() => {this.setState({showList: !this.state.showList})}} 
                title={this.props.type} 
                />
                <SelectModal
                options={this.props.options}
                add={this.addToCheckedArr}
                remove={this.removeFromArr}
                visible={this.state.showList}
                close={this.closeModal}
                checked={this.state.checkedArr}
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