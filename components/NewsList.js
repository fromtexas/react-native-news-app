import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import NewsItem from './NewsItem';


export default class NewsList extends Component {

    renderList = () => {
        const category = this.props.news[this.props.category[1]] || [];
        return category.map((item, index) => {
            return <NewsItem key={index} {...item}/>
        });
    }

    render () {
      
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        );
    }
}