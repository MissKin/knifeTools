<template>
    <div class="head_search">
        <div class="knife_container search_m">
            <a href="javascript:;" class="search_logo"><img src="../images/knife_logo.png" alt=""></a>
            <div class="form">
                <input type="text" class="text" placeholder="按商品、品牌、型号进行搜索..."/>
                <a href="javascript:void(0);" class="btn el-icon-search"></a>
            </div>
            <!-- 采购清单 -->
            <div class="shoplist fr">
                <i class="icon-shopcart"></i>
                采购清单(<span class="yellow">{{number <= 99 ? number : '99+'}}</span>)
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          msg: '搜索',
          number: 100
        }
      }
    }
</script>
<style lang="scss" scoped>
    $yellow_color:#FFCC00;
    $font_color:#474747;
    $height:50px;
    .head_search{
      padding: 36px 30px;
      background:#fff;
    }
    .search_logo{
        display: inline-block;
        width: 204px;
        img{
            width: 100%;
        }
    }

    .form{
        position: absolute;
        border:1px solid $yellow_color;
        border-right: none;
        height: 48px;
        line-height: 50px;
        background: #fff;
        color: $font_color;
        width: 580px;
        padding-left: 10px;
        left: 350px;
        top: 6px;
        border-radius: 0 4px 4px 0;
        overflow: hidden;
            .text{
                width: calc( 100% - 80px);

            }
            .btn{
                width:80px;
                background: $yellow_color;
                float: right;
                height: 50px;
                font-size: 23px;
                line-height: 50px;
                text-align: center;
            }
        }
        .shoplist{
            font-family: PingFangSC-Regular;
            display: inline-block;

            border: 1px solid #DCDCDC;
            border-radius: 4px;
            color: $font_color;
            padding:15px;
            font-size: 16px;
        }
        .icon-shopcart{
            display: inline-block;
            width: 22px;
            height: 22px;
            background: url('../images/shop_cart.png') no-repeat;
            background-size: 110%;
            background-position: center;
            vertical-align: middle;
        }
        .yellow{
            color: $yellow_color;

        }


</style>
