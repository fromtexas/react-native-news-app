import React, {Component} from 'react';
import {ViewPagerAndroid, View, Text, Animated, Dimensions, Image, PanResponder, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {colorGreyDark1, colorGreyLight1, colorGreyDark2, colorPrimaryLight, colorPrimaryDark} from '../../assets/base';
import moment from 'moment';
import NewsList from './NewsList';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPE_THRESHOLD = 0.6* SCREEN_HEIGHT;
const SWIPE_OUT_DURATION = 250;

export default class CategorySlider extends Component {

    panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            this.imagePosition.setValue({y: gesture.dy });
            this.getScale(gesture.dy);
        },
        onPanResponderRelease: (event, gesture) => {
          if (gesture.dy < -SWIPE_THRESHOLD) {
            this.forceSwipe();
          } else {
            this.resetPosition();
            this.resetScale();
          }
        },
        onShouldBlockNativeResponder: () => false
    })

    imagePosition = new Animated.ValueXY(0,0)
    state = {
        activeDot: 0 ,
        dotPosition: new Animated.ValueXY(0,0),
        imagePosition: this.imagePosition,
        panResponder: this.panResponder,
        scale: new Animated.Value(1)
    }

    resetPosition = () => {
        Animated.spring(this.state.imagePosition, {
          toValue: { x: 0, y: 0 }
        }).start();
    }

    forceSwipe = () => {
        Animated.timing(this.state.imagePosition, {
          toValue: { x: 0, y: -SCREEN_HEIGHT },
          duration: SWIPE_OUT_DURATION
        }).start();
    }

    getScale = (dY) => {
        let scale = Math.round(dY);
        if(scale > 0){
            scale = 1+(scale/2500);
        } else{
            scale = 1+(-1*scale/2500);
        }
        this.state.scale.setValue(scale);
    }

    resetScale = () => {
        Animated.spring(this.state.scale, {
            toValue: 1
          }).start();
    }

    renderCategories = () => {
        
        return this.props.category.map((item) => {
            return (
                <View style={styles.pageStyle} key={item}>
                <View style={{height: 60, backgroundColor: 'transparent', zIndex: 9, paddingBottom: 60}}>
                <Text style={styles.pageTitile}>{item.toUpperCase()}</Text>
                </View>
                <Animated.View 
                style={[this.state.imagePosition.getLayout(), {flex: 1, position: 'absolute', width: '100%', height: '100%', zIndex: 5, backgroundColor: colorGreyDark1}]}
                {...this.state.panResponder.panHandlers}
                >
                <Image
                ref='blurImage'
                source={{uri: this.props.news[item][0].urlToImage}}
                style={[styles.image]}
                />
                <Animated.View style={{padding: 35, flex: 1, justifyContent: 'flex-end', transform: [{scale: this.state.scale}]}}>             
                <View>
                <View style={{width: 5, height: '90%', position: 'absolute', left: -10, backgroundColor: colorPrimaryLight}}></View>
                <Text style={styles.itemSource}>{this.props.news[item][0].source.name}</Text>
                <Text style={styles.itemTitle}>{this.props.news[item][0].title}</Text>
                <Text style={styles.itemTime}>{moment.parseZone(this.props.news[item][0].publishedAt).fromNow()}</Text>
                </View>
                <Icon
                size={35}
                containerStyle={{alignSelf: 'center', marginBottom: 20}}
                color={colorGreyLight1}
                name='keyboard-arrow-up'
                />
                </Animated.View>
                </Animated.View>

                <NewsList banAction={this.props.banAction} baned={this.props.baned} news={this.props.news[item]}/>

                </View>
            );
        });
    }

    move = (activeDot) => {
        Animated.spring(this.state.dotPosition, {
            toValue: {
              x: 46*activeDot,
              y: 0
            }
          }).start();
    }

    renderDotsRow = () => {
        return this.props.category.map((item, i) => {
            return (
            <Icon
            containerStyle={styles.dotHorizontal}
            key={item} 
            name='dot-single'
            color={colorGreyLight1}
            type='entypo'
            size={46}
            />
            );
        });
    }


    getIndex = ({nativeEvent}) => {
        this.move(nativeEvent.position);
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
            onPress={() => this.props.reload()}
            />
            <Icon 
            containerStyle={styles.dots}
            name='dots-three-vertical'
            color={colorGreyLight1}
            type='entypo'
            onPress={() => this.props.navigation('settings')}
            />
            <View style={styles.dotsRow}>
            <Animated.View
            style={[this.state.dotPosition.getLayout(), styles.activeDot]}
            >
            <Icon
            name='dot-single'
            color={colorPrimaryDark}
            type='entypo'
            size={46}
            />
            </Animated.View>
            {this.renderDotsRow()}
            </View>
            </View>
        );
    }
}

var styles = {
    dotHorizontal: {
    },
    image: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        backgroundColor: colorGreyDark1
    },
    activeDot:{
        position: 'absolute',
        zIndex: 100,
    },
    viewPager: {
      height: SCREEN_HEIGHT,
    },
    pageStyle: {
      flex: 1,
      backgroundColor: colorGreyDark1
    },
    pageTitile: {
        marginLeft: 28,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: 'transparent',
        color: colorGreyLight1,
        zIndex: 10
    },
    itemTitle: {
        color: colorGreyLight1,
        fontWeight: 'bold',
        fontSize: 26,
        backgroundColor: 'transparent',
        textAlign: 'left',
        
    },
    itemTime: {
        color: colorGreyLight1,
        marginBottom: 20,
        fontSize: 16,
    },
    itemSource: {
        fontStyle: 'italic',
        color: colorGreyLight1,
        fontSize: 16,
    },
    reload: {
        position: 'absolute',
        top: 25,
        right: 60,
        borderRadius: 50
    },
    dots: {
        position: 'absolute',
        top: 25,
        right: 20,
        borderRadius: 50
    },
    dotsRow: {
        position: 'absolute',
        top: 50,
        left: 15,
        flexDirection: 'row'
    }
  }