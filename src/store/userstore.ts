import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { loginFormData, loginResponseData, userInfoResponseData } from '@/api/user/type'
import { constantRoute } from '@/router/rout'
import { reqLogin} from '@/api/user'

export const useUserSrote = defineStore('user', () => {
    const routeList = ref(constantRoute)
    const token = ref('')
    //登录
    const userLogin = async (data: loginFormData) => {
        const res: loginResponseData = await reqLogin(data)
        if (res.code === 200) { //登录成功
            token.value = res.data
            return res.message
        } else { //登录失败
            return Promise.reject(new Error(res.data))
        }
    }
    return { token,userLogin ,routeList}

})

