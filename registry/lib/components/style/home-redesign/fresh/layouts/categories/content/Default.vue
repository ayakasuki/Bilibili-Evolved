<template>
  <div class="fresh-home-categories-default">
    <div class="fresh-home-categories-default-video-column">
      <div class="fresh-home-categories-default-video-column-item">
        <SubHeader> 有新动态 </SubHeader>
        <VideoSlides :api="activeVideosApi" />
      </div>
      <div class="fresh-home-categories-default-video-column-item">
        <SubHeader> 最新发布 </SubHeader>
        <VideoSlides :api="newVideosApi" />
      </div>
    </div>
    <div class="fresh-home-categories-default-rank-list">
      <a :href="rankingsLink" target="_blank">
        <SubHeader> 排行榜 </SubHeader>
      </a>
      <RankList :parse-json="parseJson" :api="rankingsApi" />
    </div>
  </div>
</template>
<script lang="ts">
import { applyContentFilter } from '@/components/feeds/api'
import { RankListCard } from './rank-list'
import RankList from './RankList.vue'
import VideoSlides from './VideoSlides.vue'
import SubHeader from '../../../SubHeader.vue'

/*
TODO: 有几个区表面上是普通视频, 但内容走的还是番剧那套, 所以 RankList 也要换 API
视频排行: `https://api.bilibili.com/x/web-interface/ranking/region?day=3&original=0&rid=${regionCode}`
番剧排行: `https://api.bilibili.com/pgc/season/rank/web/list?day=3&season_type=${seasonType}`
- seasonType: 1 番剧 2 电影 3 纪录片 4 国创 5 电视剧
*/

export default Vue.extend({
  components: {
    RankList,
    VideoSlides,
    SubHeader,
  },
  props: {
    region: {
      type: Object,
      required: true,
    },
  },
  data() {
    const regionCode = this.region.id
    console.log(this.region.category)
    return {
      activeVideosApi: `https://api.bilibili.com/x/web-interface/dynamic/region?ps=10&rid=${regionCode}`,
      newVideosApi: `https://api.bilibili.com/x/web-interface/newlist?ps=10&rid=${regionCode}`,
      rankingsApi: `https://api.bilibili.com/x/web-interface/ranking/region?rid=${regionCode}&day=3&original=0`,
      rankingsLink: `https://www.bilibili.com/v/popular/rank/${this.region.category.route}`,
    }
  },
  methods: {
    parseJson(json: any) {
      const items = (lodash.get(json, 'data', []) || []) as any[]
      const cards = items
        .map(
          (item): RankListCard => ({
            id: item.aid,
            title: item.title,
            playCount: item.play,
            points: item.pts,
            upHref: `https://space.bilibili.com/${item.mid}`,
            upName: item.author,
            dynamic: item.description,
            coverUrl: item.pic,
            videoHref: `https://www.bilibili.com/video/${item.bvid}`,
          }),
        )
        .slice(0, 10)
      return applyContentFilter(cards)
    },
  },
})
</script>
<style lang="scss">
@import 'common';

.fresh-home-categories-default {
  @include h-stretch(var(--fresh-home-categories-column-gap));

  &-video-column {
    @include v-stretch(16px);
    flex: 1;
    &-item {
      @include v-stretch(var(--fresh-home-categories-header-gap));
    }
  }
  &-rank-list {
    @include v-stretch(var(--fresh-home-categories-header-gap));
  }
}
</style>
