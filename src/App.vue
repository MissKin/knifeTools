<template>
  <div id="app">
      <head-nav></head-nav>
      <head-search></head-search>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <footer-nav></footer-nav>
  </div>
</template>

<script>
import headNav from '@/components/headNav'
import headSearch from '@/components/headSearch'
import footerNav from '@/components/footerNav'

export default {
  name: 'app',
  components: {
    headNav,
    headSearch,
    footerNav
  }
}
</script>

<style>
  @import './style/base.scss';
  body{
    background: #F8F8F8;
  }
  .knife_container{
    position: relative;
      width: 1200px;
      margin: 0 auto;
  }

  .clearfix:before, .clearfix:after {
    content: " ";
    display: table;
}
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
</style>
