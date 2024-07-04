<template>
  <div class="admin-barmy">
    <a>欢迎进入企业人力预测平台</a>
  </div>
  <div class="my-container">
    <div>
      <form class="login-form" >
        <input type="text" v-model="loginForms.username" placeholder="用户名" />
        <input type="password" v-model="loginForms.password" placeholder="密码" />
        <el-button class="login_btn" type="primary" @click="login" :loading="loading">登录</el-button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, h, reactive, ref} from 'vue';
  defineComponent({ name: 'HomeComponent' });
  import {useRoute, useRouter} from 'vue-router';
  import {useUserSrote} from "@/store/userstore";
  import {ElNotification} from "element-plus";
import {loginResponseData} from "@/api/user/type";
import {reqLogin} from "@/api/user";



const loginForms = reactive({
    username: 'admin',
    password: '666666',
  });
  const userSrote = useUserSrote();
  const route = useRoute()
  const router = useRouter()
  const loading = ref(false)
  const login = async () => {
    try {
      const res: loginResponseData = await reqLogin(loginForms);
      await userSrote.userLogin(loginForms)
      console.log(res);
      loading.value = true
      ElNotification({
        title: `Hi, ${loginForms.username}`,
        message: `${res.data.token}`,
        type: 'success',
      })
      const redirect: any = route.query.redirect;
      setTimeout(() => {
         router.push({ path: redirect || '/about' });
      }, 1000);
    } catch (error) {
      const res: loginResponseData = await reqLogin(loginForms);
      ElNotification({
        title: '登录失败',
        message: `${res.data.message}`,
        type: 'error',
      });
      loading.value = false;
    }
  }

</script>

<style scoped>


.my-container {
    height: 87vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/image/O1.jpg');
    background-size: cover;
  }

  .admin-barmy {
    background-color: #18191a;
    padding: 2.5vh 2vw;
    font-size: 2.8vw;
    color: #FFFAFA;
    text-align: center;
  }

  .login-form {
    width: 30vw;
    padding: 5vh 3vw; /* 使用视口高度和宽度单位 */
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    z-index: 2;
    overflow: hidden;
    background-color: rgba(67, 79, 93, 0.23);
  }

  .login-form input {
    height: 4.2vh;
    margin: 1.5vh 0;
    padding: 1vh 0.5vw;
    font-size: 1.2vw; /* 动态字体大小 */
  }

  .login-form input::placeholder {
    font-size: 1.2vw;
    color: #d22c32;
  }

  .login-form button {
    display: block; /* 使按钮独占一行 */
    margin: 3vh 0 0 0;
    height: 5vh; /* 动态高度 */
    border: none;
    border-radius: 0.5vw;
    background-color: darkgray;
    color: #f6f6f6;
    font-size: 1.7vw; /* 动态字体大小 */
  }

  .login-form button:hover {
    background-color:darkorange;
  }

  @media (max-width: 600px) and (max-height: 1200px) {/* 宽度低于600像素 */
    .login-form {
      width: 60vw;
    }
    .my-container {
      background-image: url('/image/O1l.jpg');
    }
    .login-form input {
      font-size: 4vw; /* 动态字体大小 */
    }
    .login-form input::placeholder {
      font-size: 4vw;

    }
  }
</style>
