<template>
  <div class="container-wrapper">
    <el-container style="height: 800px; width: 100%" class="layout-container-demo">
      <el-header>
        <pageHeader />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <asideContainer />
        </el-aside>
        <el-main>
          <el-table :data="tableData" style="width: 100%" @row-click="clickData">
            <el-table-column prop="title" label="" width="180" />
            <el-table-column prop="content" label="" width="180" />
          </el-table>
        </el-main>
      </el-container>
      <el-footer>
        <footerPagination />
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import pageHeader from '@/components/pageHeader.vue'
import asideContainer from '@/components/asideContainer.vue'
import footerPagination from '@/components/footerPagination.vue'
import router from '@/router'

const tableData = [
  {
    title: 'CSS特效030：日蚀动画',
    content:
      'Spring Boot 的异步功能（Async）允许我们将某些任务异步执行，而不会阻塞主线程。这对于处理耗时的操作非常有用，如发送电子邮件、生成报表、调用外部 API 等。通过异步处理，我们可以释放主线程，让它继续处理其他请求，同时后台任务在后台线程中进行。这种方式可以显著提高应用程序的响应速度和并发性。'
  },
  {
    title: '2023开放原子开发者大会',
    content: '一切为了开发者'
  },
  {
    title: 'Kafka快速实战与基本原理详解',
    content:
      'Kafka是最初由Linkedin公司开发，是一个分布式、支持分区的（partition）、多副本的（replica），基于zookeeper协调的分布式消息系统，它的最大的特性就是可以实时的处理大量数据以满足各种需求场景：'
  }
]

const clickData = () => {
  router.push({
    name: 'article',
    params: {
      title: 'CSS特效030：日蚀动画'
    }
  })
}
</script>

<style scoped lang="less">
.container-wrapper {
  position: relative;
  background-image: url('../assets/images/OIP-C.jpeg'); /* 插入背景图片的路径 */
  background-size: cover; /* 调整背景图片的尺寸以覆盖容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复平铺 */
}
.layout-container-demo .el-header {
  position: relative;
  width: 100%;
  height: 60px;
}

.layout-container-demo .el-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 80px;
  bottom: 0;
}

.layout-container-demo .el-main {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}

.layout-container-demo .el-footer {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
