/**
 * Created by chj on 2018/3/1.
 */

import axios from 'axios'
import {Platform} from 'react-native'

const baseURL = 'http://qwer/';
const AUTH_TOKEN = 'token';

/*
* 配置默认值
* */
const defaultAxiosConfig = ()=>{

    axios.defaults.baseURL = baseURL;

    if (AUTH_TOKEN) {
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    }
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.defaults.headers.platform = Platform.OS === 'ios' ? 1 : 2

};

/*
* axios get 请求
* url       请求接口相对路径
* params    请求参数{}
* loading   开始请求回调
* success   请求成功回调
* fail      请求失败回调
* finish    请求完成回调
* */
const axiosGetHTTP = (url, params, loading, success, fail, finish)=>{

    defaultAxiosConfig();

    loading();

    axios.get(url, {
        params: params
    })
        .then(function (response) {
            console.log(response);
            success(response);
            finish();
        })
        .catch(function (error) {
            console.log(error);
            fail();
            finish();
        });

};

/*
* axios post  请求
* url         请求接口相对路径
* params      请求参数 {}
* loading     开始请求回调
* success     请求成功回调
* fail        请求失败回调
* finish      请求完成回调
* */
const axiosPostHTTP = (url, params, loading, success, fail, finish)=>{
    defaultAxiosConfig();
    loading();

    axios.post(url, {
        params: params
    })
        .then(function (response) {
            console.log(response);
            success(response);
            finish();
        })
        .catch(function (error) {
            console.log(error);
            fail();
            finish();
        });

};


const http = (url,params)=>{
    axios.get(url,{
        params: params
    });
};

/*
* 多个请求一并触发
* 多个请求都执行完成才能 success 回调
* https       请求的数组，item 为上方参数类型
* loading     开始请求回调
* success     请求成功回调
* fail        请求失败回调
* finish      请求完成回调
* */
const multi_HTTP = (https,results,loading, success, fail, finish)=>{
    defaultAxiosConfig();
    loading();
    axios.all(https)
        .then(axios.spread(()=>{
            console.log(arguments[0]); // arguments[] 对应请求返回的结果
            success();
            finish();
        }))
            .catch(function (error) {
            console.log(error);
            fail();
            finish();
        });
};