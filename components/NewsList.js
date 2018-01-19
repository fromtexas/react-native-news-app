import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import NewsItem from './NewsItem';


export default class NewsList extends Component {

    renderList = () => {
        return this.props.news.map((item, index) => {
            return <NewsItem key={index} {...item}/>
        });
    }

    render () {
        console.log(this.props.news);
        
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        );
    }
}