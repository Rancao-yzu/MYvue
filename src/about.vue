<template>
  <div class="app-container">
    <!-- 顶部内容区域 -->
    <header class="top-content">
      <uphead></uphead>
    </header>

    <div class="sidebar-layout">
      <aside class="sidebar">
        <lay />
      </aside>
      <main class="main-content">
        <RouterView></RouterView>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import lay from './layout/lay.vue'
import {RouterLink,RouterView} from 'vue-router'
import uphead from './layout/up.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
</script>

<style scoped>

  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh; /* 占满整个视口高度 */
  }

  /* 顶部内容区域 */
  .top-content {
    background-color: rgba(255,255,255);
    height: 10vh;
  }


  .sidebar-layout {
    display: flex;
    flex: 1; /* 侧边栏和主内容区域等分布局 */
  }

  .sidebar {
    width: 14.5vw;
    position: absolute;
    height: 200vh;
    background-color: rgba(34, 51, 75);
    filter: none;
    z-index: 2;
    border-top: none;
    top: 12.5vh;
    left: 3vw;
  }

  /* 主内容区域 */
  .main-content {
    position: relative;
    top: 3vh;
    left:20vw;
    width: 78vw;
    background-color: #e8d8d8;
  }

  @media (max-width: 600px) and (max-height: 1200px) {/* 宽度低于600像素 */
    .sidebar {
      top: 7.5vh;
      width: 24.5vw;
    }

    .main-content {
      top: 0;
      left:30vw;
    }
  }


</style>
