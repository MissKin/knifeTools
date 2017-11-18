<template>
  <div class="commoditydetail-box">
    <div class="knife_container">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-box">
        <el-breadcrumb-item :to="{ path: '/' }">全部类目</el-breadcrumb-item>
        <el-breadcrumb-item>刀柄刀片</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="pro-choose-main">
        <div class="pro-img-left">
          <el-tabs v-model="activeName2" tab-position="left" type="card" @tab-click="handleClick">
            <el-tab-pane v-for="(detail, index) in previewUrls" :key="index" :name="detail.name">
              <span slot="label"  ><img :src="detail.smallPreviewUrl" class="previewImg" ></span>
              <img class="pro-big-show" :src="detail.bigPreviewUrl" alt="">
            </el-tab-pane> 
          </el-tabs>
        </div>
        <div class="pro-info-right">
         <div>
           <el-button size="mini" round type="warning" plain>{{skuDetail.brand}}</el-button>
           <span class="pro-title">{{skuDetail.name}}</span>
         </div>
         <el-row class="mar-bt30">
          <el-col :span="24">
            <div class="pro-price-info">
              <p><span class="pro-title">价格</span> <span class="pro-price"> ￥{{skuDetail.priceSection}} </span</p>
              <p><span class="pro-title">发货</span>由浙江温岭总仓发货</p>
            </div>
          </el-col>
        </el-row>
        <el-row class="mar-bt20">
          <el-col :span="6">
            <span class="commodity-title">请选择收货地址</span>
          </el-col>
           <el-col :span="16">
           <el-cascader size="small"
              :options="citys"
              @active-item-change="handleItemChange"
              :props="props"
            ></el-cascader>
          </el-col>
        </el-row>
        <el-row class="mar-bt20 commodity-stock"v-if="sizeLength === 1">
          <el-col :span="6">
            <span class="commodity-title">数量 {{sizeLength}} </span>
          </el-col>
           <el-col :span="8">
             <span><el-input-number size="small" :min="1" :max="9999" v-model="amount"></el-input-number></span>
          </el-col>
          <el-col :span="8" class="commodity-stock-status">
            <span>库存正常</span>
            <a class="font-blue">库存正常</a>
          </el-col>
        </el-row>
        <el-row class="commodity-intro">
             <el-col :span="8"> <i class="iconfont el-icon-knife-transport5 color-org"></i> 16点前下单，当天发货</el-col>
             <el-col :span="8">  <i class="iconfont el-icon-knife-box color-gray"></i> 20cm X 20cm X 20cm</el-col>
            <el-col :span="8" class="font-blue">  <i class="iconfont el-icon-knife-discount color-org"></i> 折扣说明表</el-col>  
        </el-row>
        <el-button :type="addShopcart" @click="chooseSpe" class="btn-add-shopcart"> <i class="iconfont el-icon-knife-shop_cart"></i> 加入采购清单</el-button>
        </div>
      </div>
      <!-- 规格说明 /商品详情 -->
      <el-row class="commodity-content">
        <el-col :span="18" class="commodity-desc">
          <el-tabs  @tab-click="handleClick">
            <el-tab-pane label="规格说明">
              <el-input class="mar-bt15" placeholder="按商品规格型号搜索" suffix-icon="el-icon-search" v-model="specSearch"></el-input>
              <el-table
                :data="skuSpec"
                border
                style="width: 100%">
                <el-table-column
                  prop="type"
                  label="规格(cm)"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="起批量(个)"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="价格">
                </el-table-column>
                <el-table-column
                  <!-- prop="price" -->
                  label="价格">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="商品详情" >商品详情</el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">4568</div></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import { addressForAll } from '../../assets/tool'
  import {getSkuDetail} from '@/service/get-data'
  export default {
    data () {
      return {
        activeName2: 'first',
        amount: 1, // 数量默认的数量值
        citys: addressForAll, // 省市二级联动数据
        props: {  // 三级联动建名配置
          value: 'value',
          label: 'label',
          children: 'children'
        },
        specSearch: '', // 规格搜索里面的bind
        addShopcart: 'info', // 加入采购清单的按钮类型 type
        skuDetail: [] // 商品详情页
      }
    },
    activated () {
      this.getSkuDetail() // 请求获取商品详情
    },
    methods: {
      handleClick (tab) {
        console.log(tab)
      },
      handleItemChange (val) {
        console.log(val)
      },
      async getSkuDetail () {
        let res = await getSkuDetail()
        if (res.data.code === 200) {
          this.skuDetail = res.data.data
        } else {
          this.$message({message: res.data.message}) // 提示框
        }
      },
      chooseSpe () {
        this.$message({'message': '请选择规格号'})
      }
    },
    computed: {
      previewUrls () {
        return this.skuDetail.previewUrls
      },
      sizeLength () {
        return this.skuDetail.sizes.length
      },
      skuSpec () {
        return this.skuDetail.sizes
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .font-blue{
     @include fontbase(#2A91D2, 14px);
  }
  .commoditydetail-box{
    .breadcrumb-box{
      padding: 12px 0;
    }
  }
  .pro-choose-main {
    position: relative;
    display: flex;
    justify-content: space-around;
    background: #ffffff;
    padding:46px 50px;
    margin-bottom: 20px;
    & >div{
      flex: 1;
    }
  }
  .pro-big-show{
    width: 400px;
    max-height: 400px;
  }
  .previewImg{
    width: 40px;
    height: 40px;
  }
  .pro-info-right{
    .pro-title{
      @include fontbase(#333333, 26px, 50px);
    }
  }
  .pro-price-info{
    padding:20px;
    background: #FBFBFB;
    border: 1px solid #DCDCDC;
    @include fontbase(#555555, 14px);
    line-height: 40px;
    .pro-title{
      @include fontbase(#B3B3B3, 12px);
      margin-right: 45px;
      vertical-align: baseline;
    }
    .pro-price{
      @include fontbase(#F55923, 26px)
    }
  }
  .commodity-title{
      @include fontbase(#999999, 14px);
      vertical-align: -webkit-baseline-middle;
  }
  .commodity-stock{
    @include fontbase(#999999, 14px);
    .commodity-stock-status, .commodity-title{
      vertical-align: -webkit-baseline-middle;
    }
  }
  .commodity-intro{
    padding:15px 0;
    border-top: 1px solid #DCDCDC;
    border-bottom: 1px solid #DCDCDC;
    margin-bottom: 20px;
    @include fontbase(#999999, 14px);
  }
  .btn-add-shopcart{
    width: 300px;
  }
  .commodity-desc{
    position: relative;
    padding: 20px 20px 30px;
    background: #ffffff;
  }
  .commodity-content{
    margin-bottom: 64px;
  }
  .el-tabs__item, .aaa{
    display:inline-block
  }
  
</style>

