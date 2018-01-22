import React, {Component} from 'react';
import {ViewPagerAndroid, View, Text, Animated, Dimensions, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import {colorGreyDark1, colorGreyLight1, colorGreyDark2} from '../../assets/base';


const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class CategorySlider extends Component {

    state = {
        activeDot: 0,
        dotPosition: new Animated.ValueXY(0,0)
    }

    renderCategories = () => {
        return this.props.category.map((item) => {
            return (
                <View style={styles.pageStyle} key={item}>
                <Image 
                    source={{uri: this.props.news[item][0].urlToImage}}
                    style={styles.image}
                />
                    <Text style={styles.pageTitile}>{item.toUpperCase()}</Text>
                    <View style={{justifyContent: 'flex-end', flex: 1, padding: 20}}>
                    <Text style={styles.itemTitle}>{this.props.news[item][0].title}</Text>
                    </View>
                </View>
            );
        });
    }

    move = () => {
        Animated.spring(this.state.dotPosition, {
            toValue: {
              x: 40*this.state.activeDot,
              y: 0
            }
          }).start();
    }

    renderDotsRow = () => {
        return this.props.category.map((item, i) => {
            return (
            <Icon
            key={item} 
            name='dot-single'
            color={colorGreyLight1}
            type='entypo'
            size={40}
            />
            );
        });
    }

    

    getIndex = ({nativeEvent}) => {
        this.setState({activeDot: nativeEvent.position}, () => {
            this.move();
        });
        this.props.activeCategory(this.props.category[nativeEvent.position]);
    }

    render () {
        
        return (
            <View>
            <ViewPagerAndroid
            onPageSelected={this.getIndex}
            style={styles.viewPager}
            >
            {this.renderCategories()}
            </ViewPagerAndroid>
            <Icon 
            containerStyle={styles.reload}
            name='update'
            color={colorGreyLight1}
            />
            <Icon 
            containerStyle={styles.dots}
            name='dots-three-vertical'
            color={colorGreyLight1}
            type='entypo'
            />
            <View style={styles.dotsRow}>
            <Animated.View
            style={[this.state.dotPosition.getLayout(), styles.activeDot]}
            >
            <Icon
            name='dot-single'
            color={colorGreyDark2}
            type='entypo'
            size={40}
            />
            </Animated.View>
            {this.renderDotsRow()}
            </View>
            </View>
        );
    }
}

var styles = {
    image: {
        backgroundColor: colorGreyDark1,
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    activeDot:{
        position: 'absolute',
        zIndex: 100
    },
    viewPager: {
      height: SCREEN_HEIGHT
    },
    pageStyle: {
      flex: 1
    },
    pageTitile: {
        marginLeft: 28,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: 'transparent',
        color: colorGreyLight1
    },
    itemTitle: {
        color: colorGreyLight1,
        fontWeight: 'bold',
        fontSize: 26,
        backgroundColor: 'transparent',
        textAlign: 'right',
        marginBottom: 30
    },
    reload: {
        position: 'absolute',
        top: 15,
        right: 60
    },
    dots: {
        position: 'absolute',
        top: 15,
        right: 20
    },
    dotsRow: {
        position: 'absolute',
        top: 50,
        left: 20,
        flexDirection: 'row'
    }
  }