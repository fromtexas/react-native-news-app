import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import NewsItem from './NewsItem';
import Notice from '..Notice/';
import {banResourse, unbanResourse} from '../../actions/ResourceActions';

class NewsItemWrap extends PureComponent {

    state = {
        show: true
    }

    componentWillMount (nextProp) {
        if(nextProp.ban[this.props.source] && !this.props.ban[source]){
            this.setState({show:false});
        }
        if(!nextProp.ban[this.props.source] && this.props.ban[source]){
            this.setState({show:true});
        }
    }

    render () {
        if(this.state.show){
            return <NewsItem/>;      
        }
        return <Notice/>;
    }
}

const mapStateToProps = ({ban}) => ({
    ban
});

export default connect(mapStateToProps, {banResourse, unbanResourse})(NewsItemWrap);