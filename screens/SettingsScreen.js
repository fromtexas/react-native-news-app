import React, {Component} from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {addCategory, removeCategory} from '../actions/CategoryActions';
import {addCountry, removeCountry} from '../actions/CountryActions';
import {unbanResourse} from '../actions/ResourceActions';
import {colorGreyDark1, colorGreyLight1, colorPrimary} from '../assets/base';
import Select from '../components/Select/Select';
import {submit} from '../utils';
import BanedList from '../components/Baned/BanedList';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const country = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];



class SettingsScreen extends Component{
    
    state = {
        warning: ''
    }
    
    render () {
        return (
            <View style={{paddingTop: StatusBar.currentHeight, backgroundColor: colorGreyDark1, flex: 1}}>
                <View 
                style={{flexDirection: 'row', 
                height: 60,
                alignItems: 'center',
                }}>
                <Icon
                name='arrow-back'
                color={colorGreyLight1}
                size={32}
                containerStyle={{marginLeft:20, borderRadius: 50}}
                onPress={() => submit(this.props.country.length, this.props.category.length, this, this.props.navigation.navigate)}
                />
                <Text style={{color: colorGreyLight1, fontSize: 22, fontWeight: 'bold', paddingLeft: 20}}>Settings</Text>
                </View> 

                <Text style={{textAlign: 'center', color: colorPrimary}}>{this.state.warning}</Text> 

                <ScrollView>

                <Select
                add={this.props.addCategory}
                remove={this.props.removeCategory}
                items={this.props.category}
                style={{marginTop: 10, marginBottom: 10}}
                type='CATEGORY'
                options={categories}
                icon='call-received'
                />

                <Select
                add={this.props.addCountry}
                remove={this.props.removeCountry}
                items={this.props.country}
                style={{marginTop: 5, marginBottom: 20}}
                type='COUNTRY'
                options={country}
                icon='map'
                />

                <BanedList
                unban={this.props.unbanResourse}
                ban={this.props.ban} 
                />

                <Button 
                buttonStyle={{backgroundColor: colorGreyLight1, borderRadius: 3}}
                color={colorGreyDark1} 
                icon={{name: 'check', color: colorGreyDark1}} 
                title='DONE'
                onPress={() => submit(this.props.country.length, this.props.category.length, this, this.props.navigation.navigate)}
                />

                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ({category, country, ban}) => ({
    category,
    country,
    ban
});

export default connect(mapStateToProps, {addCategory, removeCategory, addCountry, removeCountry, unbanResourse})(SettingsScreen);