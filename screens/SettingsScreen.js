import React, {Component} from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {addCategory, removeCategory} from '../actions/CategoryActions';
import {addCountry, removeCountry} from '../actions/CountryActions';
import {colorGreyDark1, colorGreyLight1} from '../assets/base';
import Select from '../components/Select/Select';


const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const country = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];



class SettingsScreen extends Component{
    
    
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
                containerStyle={{paddingLeft:20}}
                onPress={()=> this.props.navigation.navigate('news')}
                />
                <Text style={{color: colorGreyLight1, fontSize: 22, fontWeight: 'bold', paddingLeft: 20}}>Settings</Text>
                </View>    

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

                <Button 
                buttonStyle={{backgroundColor: colorGreyLight1}}
                color={colorGreyDark1} 
                icon={{name: 'check', color: colorGreyDark1}} 
                title='DONE'
                />

                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ({category, country}) => ({
    category,
    country
});

export default connect(mapStateToProps, {addCategory, removeCategory, addCountry, removeCountry})(SettingsScreen);