import React, {Component} from 'react';
import {View, Modal, Button} from 'react-native';
import SelectItem from './SelectItem';
import {colorGreyLight1} from '../../assets/base';

export default class SelectModal extends Component {
    state = {
        modalVisible: false 
    }
   
    //rly needed?
    componentWillReceiveProps () {
        this.setState((prevState, props)=>{
            return {
                modalVisible: props.visible
            };
          });
    }

    renderSelectList = () => {
        return this.props.options.map((item, index) => {
            return (
                <SelectItem
                key={index}
                item={item}
                add={this.props.add}
                remove={this.props.remove}
                options={this.props.checked}
                />
            )
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <Modal
                visible={this.state.modalVisible}
                animationType={'slide'}
                onRequestClose={this.props.close}
                transparent={true}
                >
                <View style={styles.listWrap}>
                    <View style={styles.list}>
                        {this.renderSelectList()}
                        <Button onPress={this.props.close} title='close'/>
                    </View>
                </View>
                </Modal>
            </View>
        );
    }
}

const styles ={
    listWrap: {
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        flex: 1
    },
    container: {
        backgroundColor: 'transparent',
    },
    list: {
        backgroundColor: 'transparent',
    }
};