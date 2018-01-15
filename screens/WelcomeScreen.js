import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {colorGreyDark1, colorGreyLight1} from '../assets/base';
import Select from '../components/Select/Select';

var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a8f31bc8eb22494a844c62dbc7b72b55';
const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const language = ['ar', 'en', 'cn', 'de', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'se', 'ud'];
const country = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];



export default class WelcomeScreen extends Component{
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
                    style={{marginTop: 10, marginBottom: 10}}
                    type='Select categories'
                    options={categories}
                    />

                    <Select
                    style={{marginTop: 10, marginBottom: 10}}
                    type='Select language'
                    options={language}
                    />

                    <Select
                    style={{marginTop: 10, marginBottom: 10}}
                    type='Select country'
                    options={country}
                    />

                    <Button title='Finish!'/>
                </ScrollView>

                
            </View>
        );
    }
}

const styles = {
    screenContainer: {
        flex: 1,
        backgroundColor: colorGreyDark1
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
        paddingBottom: 10
    }
}
