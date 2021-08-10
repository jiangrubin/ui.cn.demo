<template>
  <div class="home">
    <van-tabs class="home-tabs" :line-width="16" color="#3399ff" sticky lazy-render>
      <van-tab v-for="item in tabs" :title="item.title" :key="item.id">
        <keep-alive>
          <component :is="item.name" />
        </keep-alive>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Recommend from './recommend'
import Follow from './follow'

export default {
  name: 'Home',
  components: {
    Recommend,
    Follow
  },
  data () {
    return {
      tabs: [
        { id: 0, title: '推荐', to: '/', name: 'Recommend' },
        { id: 1, title: '关注', to: '/', name: 'Follow' },
        { id: 2, title: '最新', to: '/', name: 'Recommend' },
        { id: 3, title: '佳作分享', to: '/', name: 'Recommend' },
        { id: 4, title: 'UTalk', to: '/', name: 'Recommend' },
        { id: 5, title: '设计大赛', to: '/', name: 'Recommend' },
      ]
    }
  }
}
</script>

<style lang="less">
.home-tabs {
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