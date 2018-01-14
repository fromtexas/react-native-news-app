import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {colorGreyDark1, colorGreyLight1} from '../assets/base';
import Select from '../components/Select/Select';

var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a8f31bc8eb22494a844c62dbc7b72b55';
const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

export default class WelcomeScreen extends Component{
    render () {
        return (
            <View style={styles.screenContainer}>
                <ScrollView>
                    <Text style={styles.screenTitle}>Vata news is welcome you, comrade!</Text>
                    <Text style={styles.screenParagraph}>Put your preferences here</Text>

                    <Select
                    type='Select categories'
                    options={categories}
                    />
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
}
