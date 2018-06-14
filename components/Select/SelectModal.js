import React, {PureComponent} from 'react';
import {View, Modal, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import SelectItem from './SelectItem';
import {colorGreyLight1, colorPrimaryLight} from '../../assets/base';

export default class SelectModal extends PureComponent {
    
    keyExtractor = (item, index) => item

    renderSelectList = ({item}) => (
        <SelectItem
        update={this.props.update}
        item={item}
        add={this.props.add}
        remove={this.props.remove}
        options={this.props.checked}
        />
    )
        
    render () {
        return (
            <View style={styles.container}>
                <Modal
                visible={this.props.visible}
                animationType={'slide'}
                onRequestClose={this.props.close}
                transparent={true}
                >
                <View style={styles.listWrap}>

                <FlatList
                data={this.props.options}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderSelectList}
                />

                <Button  
                backgroundColor={colorPrimaryLight}
                color={colorGreyLight1}
                onPress={this.props.close} 
                icon={{name: 'close', color: colorGreyLight1}} 
                title='CLOSE'
                buttonStyle={{borderRadius: 3}}
                containerViewStyle={{marginTop: 10}}
                />
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