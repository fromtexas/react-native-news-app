import React, {Component} from 'react'
import {View} from 'react-native';
import CategoryItem from './CategoryItem';

export default class CategoryList extends Component {

    renderList = () => {
        return this.props.category.map((item) => {
            return <CategoryItem  item={item} key={item}/>
        })
    }

    render () {
        return this.renderList();          
    }
}