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
    FlatList,
    Dimensions
} from 'react-native';
import * as ConstValue from '../../Const/constValue';
const {width, height} = Dimensions.get('window');

export default class joke extends Component<{}> {

    /*声明属性*/
    static propTypes = {

    };

    /*属性默认值*/
    static defaultProps = {

    };
    constructor(props){
        super(props);

        this.state={
            data: [],
            refreshing: false,
        };

        this.renderItem = this.renderItem.bind(this);
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                data: [
                    {key: '1', content: '小保姆嗓门特别大，主人叮嘱，今晚来的都是有身份的人，说话务必小声一点。吃完饭，主人客人玩牌，小保姆收拾完想早点休息，于是凑近男主人耳边轻声道：“那我先睡了哈。”'},
                    {key: '1', content: '男子追赶公车一直到家都没赶上 回来后对老婆说自己赶公车没赶上 不过也好 又锻炼了身体又赚了1元钱 老婆当时就怒了说 你傻啊 要追也追出租车啊 至少赚个起步价 '},
                    {key: '1', content: '有一天小明精心打扮一番,开着一部跑车,很兴奋的要去参加联谊,他心理想,条件这么好,想必是许多辣妹心仪的对象,不料却分配了三个恐龙妹坐他车,小明气到一句话都不想说,苦着一张脸开车,不料恐龙妹们却开口了∶帅哥,你心情不好哦!不然怎么都不说话?小明冷冷的回答∶你有看过垃圾车司机和垃圾说话的吗?'},
                    {key: '1', content: '与一家上中产吃饭。丈夫在家炒股，有得色，说过去两三个月“炒得不错”。女婿在金融界工作，谦称“挣点泡沫的钱”，丈母娘坚定地说，“泡沫越多越好！” '},
                    {key: '1', content: '什么是剧透呢？有一位罗姓朋友作的更绝，他把自己的MSN名字改成“邓不利多死了”，然后不停地上线和下线。于是所有人——包括完全不想被剧透的不幸人们——悲哀地看着屏幕上MSN提示窗口反覆提示“您的朋友‘邓不利多死了’已经上线…” '},
                    {key: '1', content: '今天，我开车走在一段收费公路上。靠近一个收费亭的时候车子抛锚了。我只好在冒烟的车里等着，痛哭流涕，眼睁睁看着其他车子呼啸而过。直到一个巡警过来帮我把车子推过了收费站。收费站里的妇女跟我说她很同情我，可是仍然收了我3块钱。'},
                    {key: '1', content: '玛丽太太因闯红灯上法庭。法官盯着她看，问：玛丽太太？是的。你以前在西区小学当老师？是的，你怎么知道？法官笑了，我曾是你的学生。玛丽太太也笑了，轻松起来。法官接着说，我等这一天等了20多年，现在罚你抄一千遍“我闯红灯错了，以后再也不犯了。”'},
                    {key: '1', content: '有一个四十岁的女生长的还不错,有一份工作,收入稳定,有一天小明就问她∶你条件这么好,怎么还没结婚啊?那女生回答∶我小时候是田径队的,有一次受伤,脚底留了一个疤。小明就问∶脚底有一个疤,跟你有没有结婚有什么关系呢?那女生回答∶对啊!那我结不结婚关你什么事?'},
                    {key: '1', content: '小两口为件小事吵了起来。吵完后，丈夫觉得后悔，便叫妻子观看外面的两匹马拉着一辆车子的情景，他说：“为什么我们不能像那两匹马那样齐心合力向前进呢？”妻子怒气冲冲地说：“我们不是两匹马，因为我们之中有一头是驴！”'},
                    {key: '1', content: '一天，动物园的一只大象突然死去，饲养员赶来立即伏在大象身上痛哭起来。游客们见此情景，不由深受感动，纷纷说：“这位饲养员和这只大象的感情太深了。”不料有一人插话道：“这个动物园有个规定，如果谁饲养的动物死了，那么这个动物的墓穴就得由那个饲养员去挖，他怎能不哭呢？”'},

                ],
            })
        }, 2000)
    }


    /*row*/
    renderItem(item){
        return (
            <View style={{backgroundColor: '#F5FCFF'}}>
                <Text style={{marginVertical: 5, backgroundColor: 'white', padding: 10, lineHeight: 30, fontSize: 15}}>
                    {item.content}
                </Text>
            </View>
        )
    }

    /*没有数据时显示的组件*/
    listEmptyComponent() {
        return <View style={{ flex: 1, height: height}}>
            <Text style={{
                alignItems: 'center',
                textAlign: 'center',
                lineHeight: height,
                color: 'white'}}
            >
                暂时没有数据
            </Text>
        </View>
    }

    /*下拉刷新*/
    refresh(){

        setTimeout(()=>{
            this.setState({
                refreshing: false,
            })
        },2000);

    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                          ref="flatList"
                          data={this.state.data} // 数据
                          renderItem={({item}) => this.renderItem(item)} // row
                          horizontal={false} // 水平还是垂直
                          ListEmptyComponent={this.listEmptyComponent} // 没有数据时显示的界面
                          refreshing={this.state.refreshing} // 是否刷新 ，自带刷新控件
                          onRefresh={()=>{
                             this.refresh();
                          }} // 刷新方法,写了此方法，下拉才会出现  刷新控件，使用此方法必须写 refreshing
                          numColumns ={1} // 指定多少列  等于 1 的时候，不能写 columnWrapperStyle
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: ConstValue.Tabbar_marginBottom,
    },
});

