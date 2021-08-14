<template>
  <div class="ui-found-card">
    <div class="ui-found-card-head">
      <div class="ui-found-card-head-content">
        <div class="ui-found-card-avatar">
          <img src="https://imgavater.ui.cn/avatar/2/8/9/1/171982.png" />
        </div>
        <div class="ui-found-card-name">MONK.REN</div>
        <div class="ui-found-card-tags"></div>
      </div>

      <div class="ui-found-card-extra">3 分钟前</div>
    </div>

    <div class="ui-found-card-thumb">
      <img src="https://img.ui.cn/data/file/9/9/0/3518099.png" />
    </div>

    <div class="ui-found-card-title">
      <!-- <div class="ui-found-card-title-tag">原创</div> -->
      <div class="ui-found-card-title-content van-ellipsis">JUJU / 小游戏社交 APP Redesign</div>
    </div>

    <div class="ui-found-card-info"></div>
  </div>
</template>

<script>
export default {
  name: 'UiFoundCard'
}
</script>

<style lang="less">
.ui-found-card {
  background-color: var(--card-background-color);
}

.ui-found-card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
}

.ui-found-card-head-content {
  display: flex;
  align-items: center;
}

.ui-found-card-avatar {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 12px;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}

.ui-found-card-thumb {
  padding: 0 14px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
}

.ui-found-card-title {
  padding: 12px 14px;
  display: flex;
  align-items: center;

  .ui-found-card-title-content {
    flex: 1;
  }
}
</style>