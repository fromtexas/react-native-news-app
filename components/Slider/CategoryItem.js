import React, {PureComponent} from 'react';
import {View, Text, Animated, Dimensions, Image, PanResponder} from 'react-native';
import {Icon} from 'react-native-elements';
import {colorGreyDark1, colorGreyLight1, colorPrimaryLight} from '../../assets/base';
import moment from 'moment';
import NewsList from './NewsList';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPE_THRESHOLD = 0.6* SCREEN_HEIGHT;
const SWIPE_OUT_DURATION = 250;

export default class CategoryItem extends PureComponent {

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


    render () {
        return (
            <View >
            <View style={{height: 75, backgroundColor: 'transparent', zIndex: 9, paddingBottom: 60}}>
            <Text style={styles.pageTitile}>{this.props.item.toUpperCase()}</Text>
            </View>
            <Animated.View 
            style={[
                this.state.imagePosition.getLayout(), 
                {flex: 1, position: 'absolute', width: '100%', height: SCREEN_HEIGHT, zIndex: 5, backgroundColor: colorGreyDark1}
            ]}
            {...this.state.panResponder.panHandlers}
            >
            
            <Image
            ref='blurImage'
            source={{uri: this.props.news[this.props.item][0].urlToImage}}
            style={[styles.image]}
            />
            <View style={{flex: 1, position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(51, 51, 51, 0.5)', zIndex: 2}}/>

            <Animated.View style={{zIndex: 3, padding: 35, flex: 1, justifyContent: 'flex-end', transform: [{scale: this.state.scale}]}}>             
            <View>
            <View style={{width: 5, height: '90%', position: 'absolute', left: -10, backgroundColor: colorPrimaryLight}}></View>
            <Text style={styles.itemSource}>{this.props.news[this.props.item][0].source.name}</Text>
            <Text style={styles.itemTitle}>{this.props.news[this.props.item][0].title}</Text>
            <Text style={styles.itemTime}>{moment.parseZone(this.props.news[this.props.item][0].publishedAt).fromNow()}</Text>
            </View>
            <Icon
            size={35}
            containerStyle={{alignSelf: 'center', marginBottom: 20}}
            color={colorGreyLight1}
            name='keyboard-arrow-up'
            />
            </Animated.View>
            </Animated.View>

            <NewsList banAction={this.props.banAction} baned={this.props.baned} news={this.props.news[this.props.item]}/>

            </View>
        );
    }
}

var styles = {
    image: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        backgroundColor: colorGreyDark1
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
    }
  }