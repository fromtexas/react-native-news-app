import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import NewsItem from './NewsItem';


export default class NewsList extends Component {

    renderList = () => {
        const activeCategory = this.props.activeCategory || this.props.category[0];
        console.log(activeCategory);
        const category = this.props.news[activeCategory] || [];
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