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
                <NewsItem style={(news.length -1) === index? {marginBottom: 20}: {}} banAction={this.props.banAction} {...item} key={uuidv4()}/>
            );
        });
    }

    // news = banFilter(this.props.news, this.props.baned)

    // keyExtractor = (item, index) => uuidv4()

    // renderItem = ({item, index}) => {
    //     return <NewsItem style={(this.news.length -1) === index? {marginBottom: 20}: {}} banAction={this.props.banAction} {...item}/>
    // }
        
    render () {
        return (
            // <FlatList
            // style={{backgroundColor: colorGreyDark1}}
            // date={this.news}
            // keyExtractor={this.keyExtractor}
            // renderItem={this.renderItem}
            // />
            <ScrollView style={{backgroundColor: colorGreyDark1}}>
                {this.renderList()}
            </ScrollView>
        );
    }
}