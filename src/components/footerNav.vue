<template>
    <div class="footer">
        <div class="knife_container footer_nav">
            <div class="footer_trans">
                <span class="footer_icon">
                    <i class="iconfont el-icon-knife-transport5"></i>100+ 城市次日送达
                </span>
                <span class="footer_icon"> <i class="iconfont el-icon-knife-box"></i> 全国包邮</span>
                <span class="footer_icon"> <i class="iconfont el-icon-knife-safe"></i>15天换货保障</span>
                <span class="footer_icon"><i class="iconfont el-icon-knife-service"></i>远程支持服务</span>
                <span class="footer_icon"><i class="iconfont el-icon-knife-tool"></i>1年售后服务</span>
            </div>
            <div class="footer_infos">
                <a href="javascript:;" class="text">关于我们</a>
                <a href="javascript:;" class="text">联系我们</a>
                <a href="javascript:;" class="text">会员制度</a>
                <a href="javascript:;" class="text">支付方式</a>
                <a href="javascript:;" class="text">售后服务</a>
                <a href="javascript:;" class="text">配送查询</a>
                <a href="javascript:;" class="text">发展政策</a>
                <a href="javascript:;" class="text">账户安全</a>
                <a href="javascript:;" class="text">帮助中心</a>
            </div>
            <div class="footer_infos">
                <span>刀具联盟 版权所有 ©-2016  浙B2-20110151</span>
                <span>浙公网安备 33108102000346号</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          msg: '尾部'
        }
      }
    }
</script>
<style lang="scss" scoped>
    @mixin border_bt($color){
        border-bottom: 1px solid $color
    }
    $deepcolor:#666666;
    $shallowcolor:#858585;

  .footer{
    background: #ffffff;
  }
    .footer_nav{
        padding:35px 0;
    }

    .footer_trans{
        font-size: 0;
        padding-bottom: 40px;
        @include border_bt(#ECECEC);
        margin-bottom: 30px;
        .footer_icon{
            width: calc( 20% - 1px);
            text-align: center;
            display: inline-block;
            color:$deepcolor;
            font-size: 18px;
            border-left: 1px solid #ECECEC;

            i{
                font-size: 26px;
                vertical-align: middle;
            }
            &:first-child{
                border-left:none;
            }
        }
    }
    .footer_infos{
        font-size: 14px;
        color: $shallowcolor;
        text-align: center;
        margin-bottom: 24px;
        .text{
            display: inline;
            padding:0 17px;
            border-left: 1px solid #ECECEC;

            &:first-child{
                border-left:none;
            }

        }
        span{
            margin:0 10px;
        }
    }
</style>
