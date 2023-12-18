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
          <mainContainer />
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
import mainContainer from '@/components/mainContainer.vue'
import asideContainer from '@/components/asideContainer.vue'
import footerPagination from '@/components/footerPagination.vue'
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
