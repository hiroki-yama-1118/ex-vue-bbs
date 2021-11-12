<template>
  <div class="bbs">
    <div>
      投稿者名：<input type="text" /><br />
      投稿内容：<textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <button type="button">投稿内容</button>
    <hr />
    <div v-for="article of currentArticleList" v-bind:key="article.id">
      投稿者名：{{ article.name }} <br />
      投稿内容：{{ article.content }} <br />
      <button type="button">記事削除</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Bbs extends Vue {
  private currentArticleList = []; //記事一覧リストの配列
  /**
   * Vuexストアのゲッター経由で記事一覧を取ってくる
   */
  created(): void {
    this.currentArticleList = this["$store"].getters.getArticles;
  }

  // get articles():{
  //   return this["$store"].getters.getArticle;
}
</script>

<style scoped>
.bbs {
  text-align: left;
}
</style>
