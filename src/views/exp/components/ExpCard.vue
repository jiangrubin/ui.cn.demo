<template>
  <div class="exp-card">
    <div class="exp-card-content">
      <div>
        <div class="exp-card-tags">
          <div v-if="tag" class="exp-card-tag">{{ tag }}</div>
        </div>
        <div class="exp-card-title van-multi-ellipsis--l2">{{ title }}</div>
      </div>

      <div class="exp-card-info">
        <img class="exp-card-avatar" :src="require('@/assets/avatar.png')" />
        <span class="exp-card-nickname">{{ nickname }}</span>
      </div>
    </div>
    <div class="exp-card-thumb">
      <img :src="thumb" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: String,
    avatar: String,
    nickname: String,
    title: String,
    thumb: String,
  }
}
</script>

<style lang="less">
.exp-card {
  display: flex;
  background-color: var(--card-background-color);
  padding: 14px 12px;
}

.exp-card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 12px;
}

.exp-card-tags {
  margin-bottom: 6px;
}

.exp-card-tag {
  display: inline-block;
  background-color: #3399FF;
  color: #fff;
  border-radius: 2px;
  font-size: 12px;
  padding: 1px 6px;
}

.exp-card-title {
  font-size: 15px;
  font-weight: 500;
}

.exp-card-info {
  display: flex;
  align-items: center;
}

.exp-card-avatar {
  width: 20px;
  height: 20px;
  object-fit: cover;
  display: block;
  margin-right: 6px;
}

.exp-card-nickname {
  color: #d1d1d6;
  font-size: 12px;
}

.exp-card-thumb {
  width: 125px;
  height: 94px;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
}
</style>