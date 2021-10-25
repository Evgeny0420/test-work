<template>
  <div class='channels'>
    <div class='channels__header'>
      <h2 class='channels__title'>Телеканалы</h2>
      <div class='channels__all-favorite-wrapper'>
        <button class='channels__all' :class='{active: buttonAll}' @click='buttonAll = true'>
          <span>Все</span>
        </button>
        <button class='channels__favorite' :class='{active: !buttonAll}' @click='buttonAll = false'>
          <span>Избранные</span>
        </button>
      </div>
    </div>
    <ul v-if='buttonAll' class='channels__list'>
      <li class='channels__item' v-for='channel in this.allChannels' :key='channel.id'>
        <Channel
            :channel="channel"
            @addToFavorite='addToFavorite(channel)'
        />
      </li>
    </ul>
    <ul v-else class='channels__list'>
      <li class='channels__item' v-for='channel in this.favoriteChannels' :key='channel.id'>
        <Channel
            :channel="channel"
            @addToFavorite='addToFavorite(channel)'
        />
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Channel from './Channel/Channel'
let allFavoriteChannels = localStorage.getItem('favoriteChannels')

export default {
  name: 'Channels',
  data: function () {
    return {
      favoriteChannels: allFavoriteChannels ? JSON.parse(allFavoriteChannels) : [],
      buttonAll: true
    }
  },
  components: {Channel},
  computed: {
    ...mapGetters(['allChannels']),
  },

  methods: {
    ...mapActions(['fetchChannels']),

    channelFav() {
      for (const channel of this.allChannels) {
        for (const favoriteChannel of this.favoriteChannels) {
          if (favoriteChannel.id === channel.id) {
            channel.fav = true
          }
        }
      }
    },

    addToFavorite(channel) {
      if (channel.fav === true) {
        const index = this.favoriteChannels.findIndex(item => item.id === channel.id)
          this.favoriteChannels.splice(index, 1)
          channel.fav = false
      } else {
        channel.fav = true
        this.favoriteChannels.push(channel)
      }

      localStorage.removeItem('favoriteChannels')
      localStorage.setItem('favoriteChannels', JSON.stringify(this.favoriteChannels));
    },
  },

  beforeUpdate() {
    this.channelFav()
  },

  mounted() {
    this.fetchChannels()
  },
}
</script>

<style lang='scss'>
.channels__header {
  border-bottom: 1px solid #E1E4EC;
}

.channels__title {
  font-family: $font;
  font-style: normal;
  font-weight: 600;
  font-size: calc(20px + (40 - 20) * ((100vw - 360px) / (1080 - 360)));
  line-height: calc(20px + (40 - 20) * ((100vw - 360px) / (1080 - 360)));
  margin: 18px calc(16px + (32 - 16) * ((100vw - 360px) / (1080 - 360)));
}

.channels__all-favorite-wrapper {
  display: grid;
  grid-template-columns: min-content min-content;
  justify-content: start;
  grid-gap: 12px;
  padding: 12px 16px 6px;
}

.channels__all,
.channels__favorite {
  border: none;
  background-color: transparent;
  font-family: $font;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: $text-additional-color;
  height: 38px;
  box-sizing: border-box;
  padding: 0 14px 18px;
}

.active {
  color: $text-color;
  border-bottom: 2px solid $decorative-additional-color;
}

.channels__list {
  padding: 20px calc(4px + (8 - 4) * ((100vw - 360px) / (1080 - 360)));
  box-sizing: border-box;
  margin: 0;
  background-color: $blocks-color;
  list-style-type: none;
  display: grid;
  justify-content: center;
  grid-template-columns: auto;
  //grid-gap: calc(8px + (24 - 8) * ((100vw - 360px) / (1080 - 360)));
}

@media ($tablet-widths) {
  .channels__list {
    grid-template-columns: auto auto;
  }
}

@media ($desktop-widths) {
  .channels__list {
    grid-template-columns: auto auto auto;
  }
}
</style>
