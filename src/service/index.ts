import Request from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // request请求
    requestInterceptor: (config) => {
      console.log("请求成功的拦截");
      const token = localStorage.getItem("token") as string;
      if (token) {
        config.headers!.Authorization = token;
      }
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("请求失败的拦截");
      // 请求错误，这里可以用全局提示框进行提示
      return Promise.reject(err);
    },
    // response响应
    responseInterceptor: (res) => {
      console.log("请求成功的拦截");
      // 直接返回res，当然你也可以只返回res.data
      // 系统如果有自定义code也可以在这里处理
      // const { data } = res.data;
      return res.data;
    },
    responseInterceptorCatch: (err) => {
      console.log("响应成功的拦截");
      // 处理http常见错误，进行全局提示
      let message = "";
      switch (err.response?.status) {
        case 400:
          message = "请求错误(400)";
          break;
        case 401:
          message = "未授权，请重新登录(401)";
          // 做清空storage并跳转到登录页的操作
          break;
        case 403:
          message = "拒绝访问(403)";
          break;
        case 404:
          message = "请求出错(404)";
          break;
        case 408:
          message = "请求超时(408)";
          break;
        case 500:
          message = "服务器错误(500)";
          break;
        case 501:
          message = "服务未实现(501)";
          break;
        case 502:
          message = "网络错误(502)";
          break;
        case 503:
          message = "服务不可用(503)";
          break;
        case 504:
          message = "网络超时(504)";
          break;
        case 505:
          message = "HTTP版本不受支持(505)";
          break;
        default:
          message = `连接出错(${err.response.status})!`;
      }
      // 这里错误消息可以使用全局弹框展示出来
      // ElMessage({
      //   showClose: true,
      //   message: `${message}，请检查网络或联系管理员！`,
      //   type: "error",
      // });
      // AxiosError类型，所以一般只用reject需要的响应即可
      return Promise.reject(err.response);
    },
  },
});

export default request;
