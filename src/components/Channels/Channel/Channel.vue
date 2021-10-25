<template>
  <div class='channel'>
    <div class='channel__wrapper'>
      <img class='channel__img' :src='channel.image' alt='channel.name_ru'>
      <div class='channel__wrapper-titles'>
        <h3 class='channel__name'>{{ channel.name_ru }}</h3>
        <p class='channel__title'>{{ title }}</p>
      </div>
    </div>
    <div class='channel__star-wrapper' @click='addToFavorite'>
      <svg class='channel__star' width='22' height='20' viewBox='0 0 22 20' fill='none'>
        <path :class='{channel__star_active: channel.fav}' d='M10.1033 0.816987C10.4701 0.0737414 11.5299 0.0737402 11.8967 0.816986L14.294 5.67446C14.4397 5.9696 14.7213 6.17417 15.047 6.2215L20.4075 7.00043C21.2277 7.11961 21.5552 8.12759 20.9617 8.70612L17.0828 12.4871C16.8471 12.7169 16.7396 13.0479 16.7952 13.3723L17.7109 18.7111C17.851 19.528 16.9936 20.151 16.26 19.7653L11.4653 17.2446C11.174 17.0915 10.826 17.0915 10.5347 17.2446L5.74005 19.7653C5.00642 20.151 4.14899 19.528 4.2891 18.7111L5.20479 13.3723C5.26043 13.0479 5.15288 12.7169 4.91719 12.4871L1.03827 8.70612C0.444756 8.12759 0.772265 7.11961 1.59249 7.00043L6.95302 6.2215C7.27873 6.17417 7.5603 5.9696 7.70596 5.67446L10.1033 0.816987Z'
              fill='#D1D5DF'/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Channel',
  props: ['channel'],
  computed: {
    title() {
      return this.channel.current ? this.channel.current.title : 'no title'
    },
  },
  methods: {
    addToFavorite() {
      this.$emit('addToFavorite')
    }
  }
};
</script>

<style lang='scss'>
.channel {
  background-color: $basic-color;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px 8px 8px;
  box-sizing: border-box;
  width: 344px;
  margin: calc(4px + (8 - 4) * ((100vw - 360px) / (1080 - 360)));

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.08);
  }
}

.channel__wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.channel__img {
  border-radius: 4px;
  width: calc(60px + (100 - 60) * ((100vw - 360px) / (1080 - 360)));
  height: calc(60px + (100 - 60) * ((100vw - 360px) / (1080 - 360)));
  margin: 0 16px 0 0;
}

.channel__name {
  font-family: $font2;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.3px;
  margin: 6px 0 8px;
}

.channel__title {
  font-family: $font2;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: $text-additional-color;
  margin: 0 0 6px;
}

.channel__star_active {
  fill: $decorative-additional-color;
}
</style>
