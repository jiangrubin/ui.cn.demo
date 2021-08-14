<template>
  <div class="ins">
    <van-tabs class="ins-tabs" :line-width="16" color="#3399ff" sticky lazy-render>
      <van-tab v-for="item in tabs" :title="item.title" :key="item.id">
        <masonry-grid style="margin: 0 10px;" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import MasonryGrid from './components/masonry-grid'

export default {
  components: {
    MasonryGrid
  },
  data () {
    return {
      tabs: [
        { id: 0, title: '全部', to: '/', name: 'Recommend' },
        { id: 1, title: 'UI', to: '/', name: 'Follow' },
        { id: 2, title: 'WEB', to: '/', name: 'Recommend' },
        { id: 3, title: '插画', to: '/', name: 'Recommend' },
        { id: 4, title: '平面', to: '/', name: 'Recommend' },
        { id: 5, title: '动效', to: '/', name: 'Recommend' },
        { id: 6, title: '品牌', to: '/', name: 'Recommend' },
      ]
    }
  },
  mounted () {
    
  }
}
</script>

<style lang="less">
.ins-tabs {
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