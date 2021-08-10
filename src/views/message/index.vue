<template>
  <div class="message">
    <van-tabs class="message-tabs" :line-width="16" color="#3399ff" sticky lazy-render>
      <van-tab v-for="item in tabs" :title="item.title" :key="item.id">
        
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        { title: '教程' },
        { title: '经验/观点' },
      ]
    }
  }
}
</script>

<style lang="less">
.message-tabs {
  .van-tabs__wrap {
    height: 50px;
  }

  .van-tabs__line {
    bottom: 22px;
  }

  .van-tab {
    font-size: 16px;
  }
}
</style>