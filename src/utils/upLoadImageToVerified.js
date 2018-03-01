/**
 * Created by mymac on 2017/7/3.
 */

const headers = {
    "Content-Type": "multipart/form-data",
};
const timeOut = 60000;

const _fetch = (fetch_promise, timeout = timeOut) => {
    let abort_fn = null;
    const abort_promise = new Promise((resolve, reject) => {
        abort_fn = () => {
            const err = new Error('timeout');
            reject(err);
        }
    });
    // 接收一个数组，只要该数组中的 Promise 对象的状态发生变化（无论是 resolve 还是 reject）该方法都会返回
    const abortable_promise = Promise.race([fetch_promise, abort_promise]);
    setTimeout(() => {
        abort_fn()
    }, timeout);
    return abortable_promise;

};

const upLoadImageManager = (url, data, loadingCallBack, successCallBack, failCallBack) => {

    loadingCallBack();

    if (global.token) {
        headers.Authorization = `Bearer ${global.token}`;
        headers.DeviceId = global.UDID;
        headers.PhoneNum = global.phone;
    }
    console.log('%c HTTP Request', 'color:blue');
    console.log(`%c request url ${url}`, 'color:green');
    console.log(`%c Request params ${JSON.stringify(data)}`, 'color:green');

    const myFetch = fetch(url, {
        method: 'POST',
        headers,
        body: data,
    });


    _fetch(myFetch, timeOut)
        .then((response) => response.json())
        .then((responseData) => {
            successCallBack(responseData);
        })
        .catch((error) => {
            failCallBack(error);
        });
};
export {
    upLoadImageManager,
};
