<template>
  <div class="productList" style="min-height: 800px;">
    <!-- 二级商品 -->
    <div class="pro_second">
      <div class="knife_container">
      <el-tabs v-model="activeName"  @tab-click="handleClick">
        <el-tab-pane :name="item.name"  v-for="( item, index) in secondlist" :key="index" >
          <span slot="label"><img class="pro-icon" :src="item.previewUrl" alt=""> {{item.label}}</span>
          <div class="thirdlist-box">
            <a   v-for="(child, index) in thirdlist" :class="{'actived': index == threeActive}" :key="index" @click="selectThirdPro(index)"> {{child.label}}{{index}}</a>
          </div>
          </el-tab-pane>
      </el-tabs>
     
      <el-dropdown class="all-category"  @command="handleCommand">
        <span class="el-dropdown-link " >
          <i class="el-icon-arrow-down el-icon--right"></i>全部分类
        </span>
        <el-dropdown-menu slot="dropdown" class="all-category-all" >
          <el-dropdown-item class="three" v-for=" (product, index) in menuList" :key="index"  @click="showNextSec(index,product.name)" :command="product.name">{{product.label}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </div>
    </div>
    
    <!-- 二级商品系列 -->
     <div class="module_first knife_container">
        <div class="module_title clearfix">
          <span class="title"> <i class="el-icon-star-on"></i>商品名称</span>
        </div>
        <el-row>
          <el-col :span="24"><div class="grid-brand">
              <span class="title">品牌:</span>
              <span class="brand-detail">铭泰顺</span>
              <span class="brand-detail">铭泰顺</span>
              <span class="brand-detail">铭泰顺</span>
            </div></el-col>
        </el-row>
        <product :product = "skuList"></product>
     </div>
  </div>
</template>
<script>
  import product from '@/components/product/product'
  import {getThirdList, getSkuList} from '@/service/get-data'
  import {mapState, mapActions} from 'vuex'

  export default {
    components: {
      product
    },
    data () {
      return {
        activeName: 'blade1',
        allcateshow: false, // 全部分类显示
        secondStart: 0,    // 二级显示的开始位置
        thirdlist: null, // 三级数据
        collapse: true,
        threeActive: 0, // 三级目录高亮显示的索引值
        skuList: null // 商品的列表
      }
    },
    activated () {
      this.init()
     // this.haveSecondList() //
    },
    methods: {
      init () {
        this.getSecondList()
        this.getThirdList()
        this.getSkuList()
      },
      // 三级目录 选择 显示高亮
      selectThirdPro (index) {
        this.threeActive = index
        // 请求三级的商品
        this.getSkuList()
      },
      // 商品详情信息
      async getSkuList () {
        let res = await getSkuList()
        console.log(res.data)
        this.skuList = res.data.data
      },
      handleClick (tab, event) {
        this.getThirdList()
      },
      handleCommand (command) {
        console.log('1111')
        console.log(command)
      },
      getParamData (value, start, number) {
        let isArray = Object.prototype.toString.call(value) === '[object Array]'
        if (!isArray) { alert('数据类型不正确,需要对象或数组'); return false }
        let end = start + number
        return value.slice(start, end)
      },
      showNextSec (index, name) {
        console.log(123)
        this.activeName = name // 显示高亮的name值
        this.secondStart = index // 二级菜单开始的索引值
        this.allcateshow = false // 全部分类隐藏
      },
      async getThirdList () {
        let res = await getThirdList()
        console.log(res)
        let data = res.data.data
        this.thirdlist = data
      },
      ...mapActions(['getSecondList']),
      // 计算是否需要请求二级目录
      haveSecondList () {
        console.log('1111')
        if (this.menuList) {
          console.log('数据拿到了')
        } else {
          this.getSecondList()
        }
      }
    },
    computed: {
      ...mapState({
        menuList: state => {
          return state.productList.secondList
        }
      }),
      secondlist () {
        return this.getParamData(this.menuList, this.secondStart, 7)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  .pro_second{
    background: #FFFFFF;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px 0 rgba(222,222,222,0.50);
  }
  .second_list{
    li{
      float: left;
      border-bottom: 4px solid #FFFFFF;
      padding-bottom: 12px;
      @include fontbase();
      &.active{
         @include fontbase(#FFCC00);
         border-bottom: 4px solid #FFCC00;
      }
    }
    .second_item{
      img {
        vertical-align: middle;
      }
    }
  }
  .pro-icon{
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
  .all-category{
    position: absolute;
    right: 0;
    top: 12px;
  }
  .all-category-all{
     display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
  }
  .three{
    width:14%;
    float: left;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
  }
  .all-category-box{
    position: absolute;
    z-index: 20;
    top: 49px;
    width: calc(100% - 20px);
    border: 1px solid #dfe4ed;
    background: #fff;
    padding: 10px;
    box-shadow: 0px 1px 5px 4px rgba(239, 236, 236, 0.8);
    .all-category-ul{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li{
        width:14%;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  .thirdlist-box{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      a{
        width: 8.3333%;
        margin-bottom: 16px;
        @include fontbase();
        border-right: 1px solid #DCDCDC;
        padding:0 11px;
        text-align: center;
        &:first-child{
          border-left: none;
          padding-left: 0;
        }
      }
      .actived{
        color: #FFCC00;
      }
  }
  a{
    &:hover{
      color:#FFCC00
    }
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
    .grid-brand{
      background: #FFFFFF;
      height: 58px;
      line-height: 58px;
      padding: 0 2%;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
      border-radius: 6px;
      color: #999999;
      margin-bottom: 22px;
      .brand-detail{
        color: #2A91D2;
        padding-left: 39px;
      }

    }
</style>

