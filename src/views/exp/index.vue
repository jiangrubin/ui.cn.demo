<template>
  <div class="exp">
    <van-tabs class="exp-tabs" :line-height="0">
      <van-tab v-for="(item, index) of tabs" :key="index">
        <template #title>
          <ui-icon :src="item.iconPath" :dark-src="item.darkIconPath" />
          <div>{{ item.title }}</div>
        </template>
      </van-tab>
    </van-tabs>

    <exp-card tag="教程" title="规范化入门交互设计" nickname="凌心云0810" :thumb="require('@/assets/exp-thumb-1.png')"></exp-card>
    <exp-card tag="人物访谈" title="大咖驾到 | 从北京到深圳，腾讯高级设计师的打怪升级之路" nickname="Tommy子言" :thumb="require('@/assets/exp-thumb-2.png')"></exp-card>
    <exp-card tag="经验/观点" title="Martin-K 分割！形式美暗藏的小心思" nickname="YelloArt" :thumb="require('@/assets/exp-thumb-3.png')"></exp-card>
    <exp-card tag="教程" title="如何从 0 到 1 制作个人网站" nickname="Jackywoo" :thumb="require('@/assets/exp-thumb-4.png')"></exp-card>
    <exp-card tag="教程" title="设计师必须知道的 | WEB品牌官网设计进阶知识" nickname="沈子砚" :thumb="require('@/assets/exp-thumb-5.png')"></exp-card>
  </div>
</template>

<script>
import ExpCard from './components/ExpCard'

export default {
  components: {
    ExpCard
  },
  data () {
    return {
      tabs: [
        { title: '教程', iconPath: require('@/assets/exp-tab-教程.svg'), darkIconPath: require('@/assets/exp-tab-教程-dark.svg') },
        { title: '经验/观点', iconPath: require('@/assets/exp-tab-经验观点.svg'), darkIconPath: require('@/assets/exp-tab-经验观点-dark.svg') },
        { title: '规范/资料', iconPath: require('@/assets/exp-tab-规范资料.svg'), darkIconPath: require('@/assets/exp-tab-规范资料-dark.svg') },
        { title: '人物访谈', iconPath: require('@/assets/exp-tab-人物访谈.svg'), darkIconPath: require('@/assets/exp-tab-人物访谈-dark.svg') },
        { title: '行业资讯', iconPath: require('@/assets/exp-tab-行业资讯.svg'), darkIconPath: require('@/assets/exp-tab-行业资讯-dark.svg') },
        { title: '设计趋势', iconPath: require('@/assets/exp-tab-设计趋势.svg'), darkIconPath: require('@/assets/exp-tab-设计趋势-dark.svg') },
      ]
    }
  },
  computed: {
    themeMode () {
      return this.$store.getters.themeMode
    }
  }
}
</script>

<style lang="less">
.exp-tabs {
  .van-tabs__wrap {
    height: 100px;
  }

  .van-tabs__nav--complete {
    padding-left: 0;
    padding-right: 0;
  }

  .van-tab {
    width: 85px;
    padding: 0;
  }

  .van-tab__text {
    flex: 1;
    text-align: center;

    img {
      display: block;
      width: 36px;
      height: 36px;
      margin: auto;
    }
  }
}
</style>