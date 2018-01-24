import React, {Component} from 'react';
import {ViewPagerAndroid, View, Text, Animated, Dimensions, Image, PanResponder, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {colorGreyDark1, colorGreyLight1, colorGreyDark2, colorPrimaryLight, colorPrimaryDark} from '../../assets/base';
import CategoryList from './CategoryList';
import moment from 'moment';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPE_THRESHOLD = 0.6* SCREEN_HEIGHT;
const SWIPE_OUT_DURATION = 250;

export default class CategorySlider extends Component {

    panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            this.imagePosition.setValue({y: gesture.dy });
            this.state.blur.setValue(-1*gesture.dy/100);
            // this.state.blur.setValue(this.imagePosition.y.interpolate({
            //         inputRange: [0, SCREEN_HEIGHT],
            //         outputRange: [0, 3],
            //         extrapolate: 'clamp',
            // }));
            // console.log(this.state.blur);

        },
        onPanResponderRelease: (event, gesture) => {
          if (gesture.dy < -SWIPE_THRESHOLD) {
            this.forceSwipe();
          } else {
            this.resetPosition();
            this.resetBlur();
          }
        },
        onShouldBlockNativeResponder: () => false
    })

    imagePosition = new Animated.ValueXY(0,0)
    //new Animated.Value(0) for activeDot
    state = {
        activeDot: 0 ,
        dotPosition: new Animated.ValueXY(0,0),
        imagePosition: this.imagePosition,
        panResponder: this.panResponder,
        blur: new Animated.Value(0)
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

    getBlur = () => {
        const imageBlur = this.state.imagePosition.y.interpolate({
            inputRange: [0, SCREEN_HEIGHT],
            outputRange: [0, 10],
            extrapolate: 'clamp',
          });
        this.refs.blurImage.setNativeProps({ blurRadius: imageBlur });
    }

    resetBlur = () => {
        Animated.spring(this.state.blur, {
            toValue: 0
          }).start();
    }

    renderCategories = () => {

        return this.props.category.map((item) => {
            return (
                <View style={styles.pageStyle} key={item}>
                <View style={{height: 60, backgroundColor: 'transparent', zIndex: 9}}>
                <Text style={styles.pageTitile}>{item.toUpperCase()}</Text>
                </View>
                <Animated.View 
                style={[this.state.imagePosition.getLayout(), {flex: 1, position: 'absolute', width: '100%', height: '100%', zIndex: 5, backgroundColor: colorGreyDark1}]}
                {...this.state.panResponder.panHandlers}
                >
                <Animated.Image
                blurRadius={this.state.blur}
                ref='blurImage'
                source={{uri: this.props.news[item][0].urlToImage}}
                style={[styles.image]}
                />
                <View style={{ flex: 1, padding: 20, justifyContent: 'flex-end'}}>
                <Text style={styles.itemSource}>{this.props.news[item][0].source.name}</Text>
                <Text style={styles.itemTitle}>{this.props.news[item][0].title}</Text>
                <Text style={styles.itemTime}>{moment.parseZone(this.props.news[item][0].publishedAt).fromNow()}</Text>
                <Icon
                size={35}
                containerStyle={{alignSelf: 'center', marginBottom: 20}}
                color={colorGreyLight1}
                name='keyboard-arrow-up'
                />
                </View>
                </Animated.View>


                <ScrollView style={{paddingTop: 60, backgroundColor: colorGreyDark1}}>
                    {this.props.news[item].map((item, index) => {
                        return (
                            <View style={{padding: 20}} key={index}>
                            <Text style={{color: colorGreyLight1, fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
                            <Text style={{color: colorGreyLight1, fontSize: 16}}>{item.description}</Text>
                            <Text style={{color: colorGreyLight1}}>{item.author}</Text>
                            <Text style={{color: colorGreyLight1}}>{moment.parseZone(item.publishedAt).fromNow()}</Text>
                            <Text style={{color: colorGreyLight1, fontStyle: 'italic'}}>{item.source.name}</Text>
                            </View>
                        );
                    })}
                </ScrollView>
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

    //fuck this. i don't need active category anymore
    getIndex = ({nativeEvent}) => {
        // this.setState({activeDot: nativeEvent.position}, () => {
           
        // });
        this.move(nativeEvent.position);
        //this.props.activeCategory(this.props.category[nativeEvent.position]);
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
        right: 60
    },
    dots: {
        position: 'absolute',
        top: 25,
        right: 20
    },
    dotsRow: {
        position: 'absolute',
        top: 50,
        left: 15,
        flexDirection: 'row'
    }
  }