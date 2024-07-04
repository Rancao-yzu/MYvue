import request from "@/utils/requests";
import type { loginFormData, loginResponseData, userInfoResponseData } from './type'

//定义枚举类统一管理接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

export const reqLogin = (data: loginFormData) =>
    request.post<any, loginResponseData>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
    request.get<any, userInfoResponseData>(API.USERINFO_URL)

export const reqLogOut = () => request.post<any, any>(API.LOGOUT_URL)