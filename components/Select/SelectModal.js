import React, {Component} from 'react';
import {View, Modal, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import SelectItem from './SelectItem';
import {colorGreyLight1, colorPrimaryLight} from '../../assets/base';

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
                update={this.props.update}
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
                    <ScrollView>

                        {this.renderSelectList()}
                        <Button  
                        backgroundColor={colorPrimaryLight}
                        color={colorGreyLight1}
                        onPress={this.props.close} 
                        icon={{name: 'close', color: colorGreyLight1}} 
                        title='CLOSE'
                        containerViewStyle={{marginTop: 10}}
                        />

                    </ScrollView>
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
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    container: {
        backgroundColor: 'transparent',
    },
    list: {
        backgroundColor: 'transparent',
    }
};