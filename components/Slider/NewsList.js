import React, { Component } from "react";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import { colorGreyDark1 } from "../../assets/base";
import uuidv4 from "uuid/v4";

export default class NewsList extends Component {
  shouldComponentUpdate() {
    return false;
  }

  renderList = () => {
    return this.props.news.map((item, index) => {
      return (
        <NewsItem
          style={
            this.props.news.length - 1 === index ? { marginBottom: 20 } : {}
          }
          banAction={this.props.banAction}
          {...item}
          key={uuidv4()}
        />
      );
    });
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: colorGreyDark1 }}>
        {this.renderList()}
      </ScrollView>
    );
  }
}

NewsList.propTypes = {
  banAction: PropTypes.func,
  news: PropTypes.array
};
