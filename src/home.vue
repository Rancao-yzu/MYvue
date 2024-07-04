<template>
    <div class="admin-barmy">
      <a>欢迎进入企业人力预测平台 </a>
    </div>
    <div class="my-container">
      <div>
        <form class="login-form" @submit.prevent="handleLogin">
          <input type="text" v-model="username" placeholder="用户名" />
          <input type="password" v-model="password" placeholder="密码" />
          <button type="submit">登录</button>
        </form>
      </div>
    </div>
</template>

<script setup lang="ts">
  import {defineComponent, ref} from 'vue';
  defineComponent({ name: 'HomeComponent' });
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const username = ref('');
  const password = ref('');
  const handleLogin = () => {
    if (password.value === '666666') {
      // 如果密码正确，跳转到另一个路由
      router.push({ name: 'about' }); // 假设您有一个名为'Dashboard'的路由
    } else {
      // 如果密码错误，显示警告
      alert('密码错误，请重试！');
    }
  };


</script>

<style scoped>

  .my-container {
    height: 87vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../public/image/O1.jpg');
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
