<template>
  <div id="app" :theme-mode="themeMode">
    <transition :name="transitionName">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>

    <transition>
      <van-tabbar v-if="!hiddenTabbar" class="app-tabbar" placeholder :border="false" route>
        <template v-for="(item, index) of tabbar">
          <van-tabbar-item :to="item.pagePath" replace :key="index">
            <template #icon="props">
              <img :src="props.active ? item.activedIconPath : item.iconPath" />
            </template>
          </van-tabbar-item>
        </template>
      </van-tabbar>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: 'none',
      hiddenTabbar: true,
      tabbar: [
        {
          name: '发现',
          pagePath: '/',
          iconPath: require('@/assets/home.svg'),
          activedIconPath: require('@/assets/home-active.svg'),
        },
        {
          name: '经验',
          pagePath: '/exp',
          iconPath: require('@/assets/exp.svg'),
          activedIconPath: require('@/assets/exp-active.svg'),
        },
        {
          name: '灵感',
          pagePath: '/ins',
          iconPath: require('@/assets/ins.svg'),
          activedIconPath: require('@/assets/ins-active.svg'),
        },
        {
          name: '消息',
          pagePath: '/message',
          iconPath: require('@/assets/message.svg'),
          activedIconPath: require('@/assets/message-active.svg'),
        },
        {
          name: '我的',
          pagePath: '/mine',
          iconPath: require('@/assets/avatar.png'),
          activedIconPath: require('@/assets/avatar.png'),
        }
      ]
    }
  },
  computed: {
    themeMode () {
      return this.$store.getters.themeMode
    }
  },
  mounted () {
    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
      this.$store.commit('SET_THEME_MODE', e.matches ? 'dark' : 'light')
    }, true)
  },
  watch: {
    '$route': {
      immediate: true,
      handler (to, from) {
        const { hiddenTabbar, transitionName } = to.meta
        this.hiddenTabbar = Boolean(hiddenTabbar)
        this.transitionName = transitionName || 'none'
      }
    }
  }
}
</script>

<style lang="less">
#app {
  color: var(--text-color);
  font-size: 14px;
  min-height: 100vh;
  line-height: normal;
  background-color: var(--background-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
}

.app-tabbar {
  .van-tabbar-item__icon {
    margin-bottom: 0;

    img {
      height: 30px;
    }
  }
}
</style>
