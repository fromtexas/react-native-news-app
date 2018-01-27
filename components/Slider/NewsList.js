import React, {Component} from 'react';
import {ScrollView, FlatList} from 'react-native';
import NewsItem from './NewsItem';
import {colorGreyDark1, colorGreyLight1, colorGreyDark2, colorPrimaryLight, colorPrimaryDark} from '../../assets/base';
import {banFilter} from '../../utils';
import uuidv4 from 'uuid/v4';


export default class NewsList extends Component {

    renderList = () => {
        const news = banFilter(this.props.news, this.props.baned);
        return news.map((item, index) => {
            return (
                <NewsItem banAction={this.props.banAction} {...item} key={uuidv4()}/>
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