<template>
    <div class="home-footer">
      <el-row>
        <el-col :span="24">
          <span class="fa fa-arrow-up">
          </span>
           <span @click="uptop()">返回顶部</span>
        </el-col>
        <el-col :span="24">
             <p>下载客户端</p>
        </el-col>
        <el-col :span="24">
          客服热线：027-87057679 <br>
          武汉斗鱼网络科技有限公司 <br>
          湖北省武汉市东湖开发区光谷软件园F4栋8楼 <br>
          版权所有 www.douyu.com 鄂ICP备15011961号-1
        </el-col>
      </el-row>
      <p>这是test-1.0分支编写的文本</p>
      <p>这是test-1.0编写的内容</p>
      <p>这是master分支的内容</p>
      <mian>分支111111master的内容，新建的文本列</mian>
      <mian>分支master的内容，哦哦哦哦哦</mian>
      <!--<p>这是test2.0的内容</p>-->
      <div>test新增的内容</div>
      <p>dev的新增</p>

      <div>不被commit12344</div>
      <div>测试</div>

    </div>
</template>

<script>
    export default {
        data: function () {

            return {}
        },
      methods:{
          uptop:function () {
            $('html ').animate({scrollTop: 0},100);
          }
      }
    }

</script>

<style scoped>
  .home-footer .el-col-24 span{
    height: 18px;
    line-height: 18px;
    font-size: 14px;
    color: #666;
  }
  .home-footer .el-col-24 span:last-child{
    cursor: pointer;
  }
  .home-footer .el-col-24:nth-child(2){
    width: 80vw;
    height: 40px;
    background: orangered;
    line-height: 40px;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    margin: 20px 0 20px 10vw;
  }
  .home-footer .el-col-24:nth-child(3){
    color: #999;
    font-size: 9px;
    line-height: 18px;
  }



  </style>
