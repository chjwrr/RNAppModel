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
    TouchableOpacity
} from 'react-native';


export default class menu extends Component<{}> {

    /*声明属性*/
    static propTypes = {

    };

    /*属性默认值*/
    static defaultProps = {

    };
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{marginTop: 50}}
                                  onPress={()=>{
                                      this.props.onClick();
                                }}>
                    <Text style={{lineHeight: 50}}>
                        touch me hide
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                                  onPress={()=>{
                                      this.props.onClick();

                                }}>
                    <Text style={{lineHeight: 50}}>
                        touch me hide
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                                  onPress={()=>{
                                      this.props.onClick();

                                }}>
                    <Text style={{lineHeight: 50}}>
                        touch me hide
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                                  onPress={()=>{
                                      this.props.onClick();

                                }}>
                    <Text style={{lineHeight: 50}}>
                        touch me hide
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

