import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {colorGreyDark1, colorGreyLight1} from '../assets/base';
import Select from '../components/Select/Select';
import NavigationStateNotifier from '../utils/NavigationStateNotifier';
import {addCategory, removeCategory} from '../actions/CategoryActions';
import {addCountry, removeCountry} from '../actions/CountryActions';


var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a8f31bc8eb22494a844c62dbc7b72b55';
const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const language = ['ar', 'en', 'cn', 'de', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud'];
const country = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];



class WelcomeScreen extends Component{
    constructor (props) {
        super(props);
        const onEnter = () => {
            this.setState({activeScreen: true});
            console.log('active welcome');
            
        };

        const onExit = () => {
            this.setState({activeScreen: true});
            console.log('not active welcome');
        };

        NavigationStateNotifier.newListener(this, onEnter, onExit);
    }

    state = {
        activeScreen: false
    }

    render () {
        return (
            <View style={styles.screenContainer}>
                <ScrollView>
                    <Text style={styles.screenTitle}>Vata news is welcome you, comrade!</Text>
                    <Text style={styles.screenParagraph}>Put your preferences here</Text>

                    <Icon
                    name='settings'
                    color={colorGreyLight1}
                    size={40}
                    containerStyle={styles.iconContainer}
                    />

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
                    style={{marginTop: 5, marginBottom: 10}}
                    type='LANGUAGE'
                    options={language}
                    icon='web'
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

export default connect(mapStateToProps, {addCategory, removeCategory, addCountry, removeCountry})(WelcomeScreen);

const styles = {
    screenContainer: {
        flex: 1,
        backgroundColor: colorGreyDark1,
        paddingBottom: 20
    },
    screenTitle: {
        textAlign: 'center',
        color: colorGreyLight1,
        fontSize: 22,
        paddingBottom: 10,
        paddingTop: 10
    },
    screenParagraph: {
        textAlign: 'center',
        color: colorGreyLight1
    },
    iconContainer: {
        alignSelf: 'center',
        paddingTop: 10
    }
}
