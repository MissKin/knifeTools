<template>
  <div class="module_content" >
    <div class="content_box"v-for=" (child, index) in product.children" :key="index">
      <p class="top"><span class="btn_new" v-if="child.new">new</span><span class="btn_hot" v-if="child.hot">hot</span></p>
      <img class="previewImg" :src="child.previewUrl" alt="">
      <h3 class="title">{{child.name}}</h3>
      <span class="format">{{child.format}} </span>
      <h4 class="price">￥{{child.price}} <i class="yellow_shopcart iconfont el-icon-knife-shop_cart"></i></h4>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      product: {
        type: Object,
        default: null
      }
    }
  }
</script>
<style lang="scss" >
.module_content{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .content_box{
      position: relative;
      display: inline-block;
      padding: 20px;
      width: calc( 20% - 47px );
      background: #FFFFFF;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
      border-radius: 6px;
      text-align: center;
      margin-bottom: 20px;
      min-height: 320px;
      .top{
        text-align: left;
      }
      .previewImg{
        height: 180px;
      }
      .format{
        font-size: 12px;
        color: #A3A3A3;
        line-height: 2;
      }
      .title{
        font-size: 14px;
        color: #666666;
        line-height: 1.5;
      }
      .price{
        font-size: 16px;
        color: #2A2A2A;
        line-height: 2.5;
      }
    }
    .btn_new, .btn_hot{
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 6px;
      border-radius: 4px;
      font-size: 10px;
      color: #FFFFFF;
      letter-spacing: 1.25px;
      margin-right: 5px;
    }
    .btn_new{
       background: #2FC5E3;
    }
    .btn_hot{
      background: #F2572F;
    }
    .yellow_shopcart{
      display: inline-block;
      vertical-align: middle;
      color: #fff;
      border-radius: 50%;
      font-size: 12px;
      line-height: 20px;
      width: 20px;
      height: 20px;
      background-image: linear-gradient(18deg, #F5A310 0%, #FFCD08 100%);
    }
</style>

