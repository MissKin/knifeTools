<template>
  <div>
    <carousel></carousel>
    <!-- 主打模块 -->
    <div class="knife_container">
      <!-- 模块一 -->
      <el-row class="module_one">
        <el-col :span="6" class="pr10">
          <div class="grid-content bg-f6">
            <div class="item channel-list">
              <i class="iconfont el-icon-knife-safe"></i>
              <p class="text"> 会员返利</p>
            </div>
            <div class="item channel-list">
              <i class="iconfont el-icon-knife-youhui"></i>
              <p class="text"> 优惠券</p>
            </div>
            <div class="item channel-list">
              <i class="iconfont el-icon-knife-query"></i>
              <p class="text"> 库存查询</p>
            </div>
            <div class="item channel-list">
              <i class="iconfont el-icon-knife-dingdan0"></i>
              <p class="text"> 我的订单</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6" class="pr10">
          <div class="grid-content bg-ee">
            <div class="channel-list-left">
              <span class="big-title">外径千分尺</span>
              <p class="small-title">三丰外径千分尺</p>
              <el-button type="warning" size="mini" plain>查看</el-button>
            </div>
            <img class="channel-list-right" src="../../images/index/pro1.jpg">
          </div>
        </el-col>
        <el-col :span="6" class="pr10">
          <div class="grid-content bg-ee">
          <div class="grid-content bg-ee">
            <div class="channel-list-left">
                <span class="big-title">外径千分尺</span>
                <p class="small-title">三丰外径千分尺</p>
                <el-button type="warning" size="mini" plain>查看</el-button>
              </div>
              <img class="channel-list-right" src="../../images/index/pro1.jpg">
            </div>
          </div>
        </el-col>
        <el-col :span="6"class="pr10" >
          <div class="grid-content bg-ee">
            <div class="grid-content bg-ee">
            <div class="channel-list-left">
              <span class="big-title">外径千分尺</span>
              <p class="small-title">三丰外径千分尺</p>
              <el-button type="warning" size="mini" plain>查看</el-button>
            </div>
            <img class="channel-list-right" src="../../images/index/pro1.jpg">
          </div>
          </div>
        </el-col>
      </el-row>
      <!-- 一级产品 -->
      <div class="module_first" v-for="( product, index) in proList" :key="index">
        <div class="module_title clearfix">
          <span class="title"> <i class="el-icon-star-on"></i>{{product.label}}</span>
          <p class="fr module_right_title">
            <a>刀片</a>
            <a>刀片</a>
            <a>更多</a>
          </p>
        </div>
        <!-- <div class="module_content" >
          <div class="content_box"v-for=" (child, index) in product.children" :key="index">
            <p class="top"><span class="btn_new" v-if="child.new">new</span><span class="btn_hot" v-if="child.hot">hot</span></p>
            <img class="previewImg" :src="child.previewUrl" alt="">
            <h3 class="title">{{child.name}}</h3>
            <span class="format">{{child.format}} </span>
            <h4 class="price">￥{{child.price}} <i class="yellow_shopcart iconfont el-icon-knife-shop_cart"></i></h4>
          </div>
        </div> -->
        <product :product = "product" ></product>
      </div>
    </div>
  </div>
</template>
<script>
import carousel from '@/components/carousel/carousel'
import product from '@/components/product/product'
export default {
  components: {
    carousel,
    product
  },
  data () {
    return {
      proList: [
        {
          label: '数控刀具',
          name: 'first',
          children: [
            {
              new: true,
              hot: true,
              name: '刃天行 方肩铣刀',
              format: 'RTXA0378',
              price: '28.00-38.00',
              previewUrl: 'https://i1.mifile.cn/a1/pms_1495073969.01063180!220x220.jpg'
            },
            {
              new: true,
              hot: false,
              name: '刃天行 方肩铣刀',
              format: 'RTXA0378',
              price: '28.00-38.00',
              previewUrl: 'https://i1.mifile.cn/a1/pms_1495073969.01063180!220x220.jpg'
            },
            {
              new: true,
              hot: false,
              name: '刃天行 方肩铣刀',
              format: 'RTXA0378',
              price: '28.00-38.00',
              previewUrl: 'https://i1.mifile.cn/a1/pms_1495073969.01063180!220x220.jpg'
            },
            {
              new: true,
              hot: false,
              name: '刃天行 方肩铣刀',
              format: 'RTXA0378',
              price: '28.00-38.00',
              previewUrl: 'https://i1.mifile.cn/a1/pms_1495073969.01063180!220x220.jpg'
            },
            {
              new: true,
              hot: false,
              name: '刃天行 方肩铣刀',
              format: 'RTXA0378',
              price: '28.00-38.00',
              previewUrl: 'https://i1.mifile.cn/a1/pms_1495073969.01063180!220x220.jpg'
            }
          ]
        },
        {
          label: '普通刀具',
          name: 'first',
          children: [
            {
              new: true,
              hot: true,
              name: '刃天行 方肩铣刀',
              format: 'RTXA0378',
              price: '28.00-38.00',
              previewUrl: 'https://i1.mifile.cn/a1/pms_1495073969.01063180!220x220.jpg'
            },
            {
              new: true,
              hot: false,
              name: '刃天行 方肩铣刀',
              format: 'RTXA0378',
              price: '28.00-38.00',
              previewUrl: 'https://i1.mifile.cn/a1/pms_1495073969.01063180!220x220.jpg'
            },
            {
              new: true,
              hot: false,
              name: '刃天行 方肩铣刀',
              format: 'RTXA0378',
              price: '28.00-38.00',
              previewUrl: 'https://i1.mifile.cn/a1/pms_1495073969.01063180!220x220.jpg'
            },
            {
              new: true,
              hot: false,
              name: '刃天行 方肩铣刀',
              format: 'RTXA0378',
              price: '28.00-38.00',
              previewUrl: 'https://i1.mifile.cn/a1/pms_1495073969.01063180!220x220.jpg'
            },
            {
              new: true,
              hot: false,
              name: '刃天行 方肩铣刀',
              format: 'RTXA0378',
              price: '28.00-38.00',
              previewUrl: 'https://i1.mifile.cn/a1/pms_1495073969.01063180!220x220.jpg'
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">
  $font_color:#474747;
  .pr10{padding-right: 10px;}
  .bg-f6{background: #f6f6f6;}
  .bg-ee{background: #EEEEEE;}
  $font_ora:#FF7300;

  .bg-purple {
    background: #d3dce6;
  }

  .module_one{margin-bottom:40px;}
  .grid-content{
    position: relative;
    height: 188px;
  }
  .grid-content .item{
    width: 38%;
    display: inline-block;
    text-align: center;
    padding: 8% 5% 0;
  }
  .item img{
    width: 40px;
  }
  .channel-list {
    i {
      font-size: 28px;
      color:#666666;
    }
    .text{
      font-size: 14px;
      line-height: 2;
      color: #767676;
    }
  }
  .channel-list-left{
    float: left;
    padding: 55px 0 0 47px;
    .big-title{
      font-size: 18px;
      color: #474747;
      line-height: 2;
    }
    .small-title{
      font-size: 14px;
      color: #999999;
      margin-bottom: 20px;
    }
  }
  .channel-list-right{
    position: absolute;
    right: 23px;
    bottom: 0;
    height: 148px;
  }
  .module_first{
    margin-bottom:30px;
  }
  .module_title{
      margin-bottom:15px;
      .title{
        font-size: 18px;
        color: #333333;

        i{
          color:#E8BA07;
          font-size:15px;
        }
      }
    }
    .module_right_title{
      a{
        padding: 0 10px;
        border-left:1px solid #DCDCDC;
        font-size: 14px;
        color: #767676;

        &:first-child{
          border-left:none;
        }
      }

    }

</style>
