<template >
  <div class="wrapper">
    <div class="sidebar" id="sidebar">
      <nav>
        <ul class="list-unstyled components">

          <li><router-link to="/">首页</router-link></li>

          <li>
              <a href="#pageSubmenus" data-bs-toggle="collapse" aria-expanded="false">用户设置</a>
              <ul class="collapse" id="pageSubmenus">
                <router-link to="/">登陆</router-link>
                <router-link to="/">注册</router-link>
              </ul>
          </li>

          <li><RouterLink to="/about/yuce" active-class="active">人力预测</RouterLink></li>
          <li><RouterLink to="/about/zhanshi" active-class="active">数据集展示</RouterLink></li>
          <li><a href="#">数据拟合</a></li>

        </ul>
        <div class="sidebar-footer">

            <a href="https://www.bilibili.com/" class="social-icon" ><i class="fa-brands fa-google "></i></a>
            <a href="https://www.bilibili.com/" class="social-icon" ><i class="fa-brands fa-bilibili"></i></a>
            <a href="https://www.bilibili.com/" class="social-icon" ><i class="fa-brands fa-qq"></i></a>
            <a href="https://www.bilibili.com/" class="social-icon" ><i class="fa-brands fa-github"></i></a>
            <a href="https://www.bilibili.com/" class="social-icon" ><i class="fa-brands fa-microsoft"></i></a>

          <p>
            <a target="_blank" href=" " title="网页模板">联系方式</a>
          </p>
        </div>
      </nav>
    </div>
  </div>

</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>

<style scoped>

  .social-icon {
    margin-right: 0.6vw;
    font-size: 3vh;
    font-weight: 300;
    line-height: 2em;
  }

  #sidebar ul.components {
    margin-top: 4vh;
    margin-bottom: 4vh;
    text-align: center;
  }

  #sidebar ul li a {
    color: #FFFAFA;
    padding: 3vh 1vw;
    font-size: 1.1vw;
    display: block;
    text-decoration: none; /* 下划线 */
  }

   ol ol, ol ul, ul ol, ul ul {
    margin-left: -2.1vw;
  }


  #sidebar ul li a:hover {
    color: #7c6dcc;
    background: #fff;
  }

  a[aria-expanded="false"]::before,
  a[aria-expanded="true"]::before {
    display: block;
    position: absolute;
    right: 2vw;
    font-family: FontAwesome,serif;
    font-size: 0.9vw;
    content: "\f0d7";
  }

  ul ul a {
    font-size: 0.9vw !important;
    padding-right: 1.2vw !important;
  }


  .sidebar-footer {
    font-size: 1.4vw;
    text-align: center;
  }

  @media (max-width: 600px) and (max-height: 1200px) {/* 宽度低于600像素 */
    #sidebar ul li a {
      font-size: 2.6vw;
    }
    ul ul a {
      font-size: 2.2vw !important;
    }
    ol ol, ol ul, ul ol, ul ul {
      margin-left: -7.1vw;
    }



  }


</style>

