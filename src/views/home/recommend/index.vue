<template>
  <div class="recommend">
    <transition-group tag="div" appear>
      <template v-for="item of 10">
        <ui-found-card :key="item" style="margin-bottom: 8px;"></ui-found-card>
      </template>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Recommend'
}
</script>

<style>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(80px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}

/* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素，渐渐地漂上来的效果 */
.v-move {
  transition: all 0.6s ease;
}

.v-leave-active {
  position: absolute;
}
</style>