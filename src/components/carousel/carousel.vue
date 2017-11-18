<template>
  <div>
    <div class="knife_container">
      <div class="site-category">
        <ul class="site-category-list clearfix">
          <li v-for="(item, index) in menuList" :key="index" :class="['category-item', {'category-item-avtive': activeTab === index}]" @mouseover="activeTab = index" @mouseleave="activeTab = -1">
            <router-link tag="a" href="#" :to="'/productList/'+item.name" class=" ">{{item.label}} <i class="el-icon-arrow-right"></i></router-link>
            <div class="children-item">
              <div class="children-list">
                <router-link tag="a" :to="'/commodityDetail/' + index" class="child-link" v-for="(child, index) in item.children" :key="index">{{child.label}}</router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="carousel-box">
      <el-carousel :interval="5000" arrow="always" height="490px">
        <el-carousel-item v-for="(item,index) in bannerList" :style="item" :key="index">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        activeTab: -1,
        bannerList: [
          {
            backgroundImage: 'url(' + require('../../images/index/banner1.jpg') + ')'
          },
          {
            backgroundImage: 'url(' + require('../../images/index/banner2.jpg') + ')'
          },
          {
            backgroundImage: 'url(' + require('../../images/index/banner3.jpg') + ')'
          }
        ]
      }
    },
    props: ['menuList']
  }
</script>

<style lang="scss" scoped>
  $font_color:#474747;
  .pr10{padding-right: 10px;}
  .bg-f6{background: #f6f6f6;}
  .bg-ee{background: #EEEEEE;}
  $font_ora:#FF7300;
  .carousel-box{
    position:relative;
    margin-bottom: 30px;
  }
  .site-category{
       // height: 490px;
      /* background: rgba(47, 47, 47, 0.8); */
     // position: absolute;
      width: 120px;
      // transform: translateX(-50%);
      // left: 50%;

      .site-category-list{
            position: absolute;
            display: inline-block;
            width: 230px;
            height:450px;
            background: rgba(47,47,47,0.80);
            padding:20px 0 ;
            z-index: 20;
      }
  }
   .category-item{
          font-size: 14px;
          line-height: 40px;
          width: 100%;
          a{
            position: relative;
            color: #fff;
            padding-left: 30px;
            width: calc( 100% - 30px);
            display: inline-block;
            i{
              position: absolute;
              top: 50%;
              right: 2px;
              transform: translateY(-50%);
            }
            &:hover{
              background:$font_ora;
            }
          }
        }
  .children-item{
    position: absolute;
    display: none;
    left: 100%;
    top: 0;
    z-index: 24;
    height: 488px;
    border: 1px solid #e0e0e0;
    border-left: 0;
    background: #fff;
    -webkit-box-shadow: 0 8px 16px rgba(0,0,0,0.18);
    box-shadow: 0 8px 16px rgba(0,0,0,0.18);
    .children-list {
      display: flex;
      flex-wrap: wrap;
      width: 650px;
    }
  }

  .category-item-avtive .children-item{
    display: block;
  }
  .children-list a{
      width: 23%;
      padding-left: 2%;
      color:$font_color;
  }


  .el-carousel__item {
    background-size:100%;
    background-repeat: no-repeat;
  }
</style>




