<template>
  <div class="productList">
    <!-- 二级商品 -->
    <div class="pro_second">
      <ul class="knife_container second_list clearfix">
        <li class="second_item">
          <img src="../../images/product/second_pro1.png" alt="">
          刀柄系统
          <ul class="knife_container three_list">
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
          </ul>
        </li>
        <li class="second_item">
          <img src="../../images/product/second_pro1.png" alt="">
          刀柄系统
          <ul class="knife_container three_list">
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
            <li>面铣刀刀柄</li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        secondPro: [
          {
            label: '刀柄系统',
            name: 'daob',
            children: [
              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              },
              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              },
              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              },
              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              },
              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              },
              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              },
              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              },
              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              },
              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              },
              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              },
              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              },
              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              },

              {
                label: '面铣刀刀柄',
                path: '/detail',
                id: '001'
              }
            ]
          },
          {
            label: '刀柄系统',
            name: 'daob'
          },
          {
            label: '刀柄系统',
            name: 'daob'
          },
          {
            label: '刀柄系统',
            name: 'daob'
          },
          {
            label: '刀柄系统',
            name: 'daob'
          },
          {
            label: '刀柄系统',
            name: 'daob'
          },
          {
            label: '刀柄系统',
            name: 'daob'
          },
          {
            label: '刀柄系统',
            name: 'daob'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @mixin fontbase($color: #555555, $size: 14px, $lineH:1.5){
    color: $color;
    font-size: $size;
    line-height: $lineH;
  }
  .pro_second{
    background: #FFFFFF;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 2px 5px 0 rgba(222,222,222,0.50);
  }
  .second_list{
    //display: flex;
   // justify-content: space-around;
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
</style>

