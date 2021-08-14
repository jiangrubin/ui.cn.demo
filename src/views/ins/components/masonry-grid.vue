<template>
  <div class="masonry-grid">
    <div v-for="(item, index) of list" :key="index" class="masonry-grid-item">
      <img :src="item.imgPath" />
    </div>
  </div>
</template>

<script>
import Masonry from 'masonry-layout'

export default {
  data () {
    return {
      list: [
        { imgPath: require('@/assets/ins-thumb-1.png') },
        { imgPath: require('@/assets/ins-thumb-2.png') },
        { imgPath: require('@/assets/ins-thumb-3.png') },
        { imgPath: require('@/assets/ins-thumb-4.png') },
        { imgPath: require('@/assets/ins-thumb-5.png') },
        { imgPath: require('@/assets/ins-thumb-1.png') },
        { imgPath: require('@/assets/ins-thumb-2.png') },
        { imgPath: require('@/assets/ins-thumb-3.png') },
        { imgPath: require('@/assets/ins-thumb-4.png') },
        { imgPath: require('@/assets/ins-thumb-5.png') },
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      var grid = document.querySelector('.masonry-grid');
      var masonry = new Masonry(grid, {
        itemSelector: '.masonry-grid-item',
        columnWidth: '.masonry-grid-item',
        gutter: 10,
        percentPosition: true,
      })
    }, 50)
  }
}
</script>

<style lang="less">
.masonry-grid {
  // margin: 0 10px;
}

.masonry-grid-item {
  width: calc(50% - 5px);
  margin-bottom: 10px;

  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
}
</style>