var Fly = require("flyio/dist/npm/wx")
var fly = new Fly

//配置请求地址
//fly.config.baseURL = 'https://www.apiopen.top/';
fly.config.timeout = 50000;
//添加请求拦截器
fly.interceptors.request.use((request) => {
  //给所有请求添加自定义header
  // request.header = {
  //   token: wx.getStorage("token")
  // }
  //request.headers["X-Tag"] = "flyio";
  //打印出请求体
  //console.log(request.body)
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
});

// {
//   baseURL, //请求的基地址
//   body, //请求的参数
//   headers, //自定义的请求头
//   method, // 请求方法
//   timeout, //本次请求的超时时间
//   url, // 本次请求的地址
//   params, //url get参数(post请求或默认的get参数)    
//   withCredentials, //跨域请求是否发送第三方cookie
//   ... //options中自定义的属性
// }



//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    // wx.setStorage({
    //   key: token,
    //   data: response.data.token
    // })
  },
  (err) => {
    //发生网络错误后会走到这里
    return Promise.resolve("ssss")
  }
)

// {
//   data, //服务器返回的数据
//   engine, //请求使用的http engine(见下面文档),浏览器中为本次请求的XMLHttpRequest对象
//   headers, //响应头信息
//   request //本次响应对应的请求信息，即上面的request结构
// }

/**
 * 请求方法
 */
const http = {
  // get请求
  get(url, params) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then((response) => {
        resolve(response.data)
      }).catch(err => {
        console.log(err.status, err.message)
      })
    })
  },


  // post请求
  post(url, params) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then((response) => {
        responseHandler(callback);
      }).catch(err => {
        console.log(err.status, err.message)
      })
    })
  }
}

export default http;
