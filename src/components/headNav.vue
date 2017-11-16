<template>
    <div class="head_nav"> 
      <div class="knife_container">
          <span class="el-icon-phone"></span>
                   400-992-0808
          <div class="fr headinfo">
              <span>{{userNames}}</span>
              <span>退出</span>
              <span>消息通知</span>
              <span>我的订单</span>
              <span>个人中心</span>
              <span>帮助中心</span>
          </div>
      </div>
    </div>  
</template>
<script>
    export default {
      data () {
        return {
          msg: '这是头部的页面',
          userNames: 'auroral'
        }
      }
    }
</script>
<style  lang="scss" scoped>
    $primary-color: #333;

    body {
        color: $primary-color;  //编译后就成了 color:#333;类似于js的变量！
    }
    
    .head_nav{
        height: 36px;
        background: #363636;
        font-size: 12px;
        color: #F1F1F1; 
        line-height: 36px;
    }
    .headinfo {
        font-size: 0;
        span{
            border-left: 1px solid #F1F1F1;
            padding: 0 13px;
            font-size: 12px;

            &:first-child{
                border-left: none;
            }

        }
       
    
    }
</style>


