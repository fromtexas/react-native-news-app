import React, {Component} from 'react';
import {ScrollView, FlatList} from 'react-native';
import NewsItem from './NewsItem';
import {colorGreyDark1, colorGreyLight1, colorGreyDark2, colorPrimaryLight, colorPrimaryDark} from '../../assets/base';

export default class NewsList extends Component {

    renderList = () => {
        return this.props.news.map((item, index) => {
            return (
                <NewsItem {...item} key={index}/>
            );
        });
    }

    render () {
        return (
            <ScrollView style={{backgroundColor: colorGreyDark1}}>
                {this.renderList()}
            </ScrollView>
        );
    }
}