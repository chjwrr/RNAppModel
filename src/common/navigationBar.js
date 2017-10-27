/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import *as ConstValue from '../Const/constValue';

import BackImag from '../asset/navigation/navigation_back.png';
import RightImage from '../asset/navigation/navigation_right_nor.png';

export default class navigationBar extends Component<{}> {
    /*声明属性*/
    static propTypes = {
        title: PropTypes,
        showLeftItem: PropTypes,
        leftItemType: PropTypes,
        leftTitle: PropTypes,
        showRightItem: PropTypes,
        rightItemType: PropTypes,
        rightTitle: PropTypes,
        rightImage: PropTypes,
    };

    /*属性默认值*/
    static defaultProps = {
        title: '标题',
        showLeftItem: true,
        leftItemType: 'image',
        leftTitle: '返回',
        showRightItem: false,
        rightItemType: 'text',
        rightTitle: '完成',
        rightImage: RightImage,
    };
    constructor(props){
        super(props);
    }

    render() {
        const {
            title,
            showLeftItem,
            leftItemType,
            leftTitle,
            showRightItem,
            rightItemType,
            rightTitle,
            rightImage
        } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.navigationViewStyle}>

                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    {
                        (()=>{

                            if (showLeftItem){
                                if (leftItemType === 'text'){
                                    return (
                                        <Text style={{textAlign: 'left', color: 'white'}}>{leftTitle}</Text>
                                    )
                                }else {
                                    return (
                                        <Image source={BackImag}/>
                                    )
                                }
                            }else
                                return null;
                        })()
                    }
                    </View>


                    <View style={{flex: 2}}>
                        <Text style={{fontSize: 20, color: 'white', textAlign: 'center',}}>{title}</Text>
                    </View>


                    <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
                        {
                            (()=>{
                                if (showRightItem){
                                    if (rightItemType === 'text'){
                                        return (
                                            <View style={{justifyContent: 'flex-end'}}>
                                                <Text style={{textAlign: 'right', color: 'white'}}>{rightTitle}</Text>
                                            </View>
                                        )
                                    }else {
                                        return (
                                            <View style={{justifyContent: 'flex-end'}}>
                                                <Image source={rightImage}/>
                                            </View>
                                        )
                                    }
                                }else
                                    return null;
                            })()
                        }
                    </View>

                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: ConstValue.NavigationBar_StatusBar_Height,
    },
    navigationViewStyle: {
        flexDirection: 'row',
        marginTop: ConstValue.StatusBar_Height,
        padding: 10
    },

});

