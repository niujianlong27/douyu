<template>
  <div class="home-content">
    <p>这是master分支编写的文本</p>
    <p>123</p>
    <div>要发到test测试</div>
    <div v-for="lists in datas">

        <el-row>
          <el-col :span="20">
            <img :src=lists.icon alt="">
            <span>{{lists.tabName}}</span>
            <span v-for="(list,index) in lists.cate2Info" v-if="index <= 1" :type="list.shortName" :key="index">
            <i > {{list.cate2Name}} </i>
          </span>
          </el-col>

          <el-col :span="4">
            <router-link :to=" '/morepage/' + lists.shortName + '?name='+ lists.tabName + '&mix='+ 'mixList'">
           <!--{{ lists.shortName}}-->
              <!--{{lists.tabName}}-->
              <span>更多</span>
              <img src="/static/images/icon.png" alt="">
            </router-link>

          </el-col>

        </el-row>
        <ul>
        <li v-for="(list1,ins) in lists.list" :key="ins">
          <img :src="list1.roomSrc" alt="">
          <p>{{list1.roomName}}</p>
          <div class="men">
            <img src="/static/images/cada.png" alt="">
           <span>{{list1.nickname}}</span>
          </div>

          <div class="face">
            <img src="/static/images/fire.png" alt="">
            <span>{{list1.hn}}</span>
          </div>

        </li>
        </ul>



    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data: function () {

      return {
        datas: ''
      }
    },
    mounted() {
      axios.get('/douyu/api/home/mix').then((val) => {
        this.datas = val.data.data;

      }).catch((err) => {
        console.log(err)
      })
    }
  }

</script>

<style scoped>
  .home-content > div {
    margin: 15px 0;
  }

  .home-content > div .el-row {
    text-align: left;
    margin-left: 5px;
  }

  .home-content > div .el-row .el-col-20 img {
    height: 20px;
    margin-right: 10px;
    position: relative;
    top:2px;
  }
  .home-content > div .el-row .el-col-20 span{
    position: relative;
    top:-3px;
    margin-left:4px;


  }
  .home-content > div .el-row .el-col-20 span:first-of-type {
    font-size: 15px;
    padding-right: 5px;
    border-right: solid 1px #666;
    margin-left:0px;
  }
  .home-content > div .el-row i {
    font-weight: 200;
    font-size: 12px;
    padding: 3px 7px;
    margin-right: 5px;
    border-radius: 10px;
    font-style: normal;
    border: solid 1px orangered;
    color: orangered;
  }
  .home-content .el-col-4 span{
    font-size: 14px;
    color: #6666;
    line-height: 24px;

  }
  .home-content .el-col-4 img{
       height:13px;
  }
  .home-content ul{
    overflow: hidden;
    margin-top: 10px;
  }
  .home-content ul li {
    width: 48vw;
    height: 35vw;
    float: left;
    padding: 5px 0;
    margin-left: 1vw;
    position: relative;
  }
 .home-content  ul li img{
    width: 100%;
    border-radius: 5px;
  }
  .home-content  ul li p{
    width: 100%;
    height: 15px;
    text-align: left;
    font-size:12px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }
  .home-content  ul li .men{
    text-align: left;
    color: white;
    font-size: 9px;
    position: absolute;
    bottom:8vw;
    left: 5px;
    background:linear-gradient(to left, rgba(0,0,0,0.1) 40%, rgba(0,0,0,1) 100%);
  }
  .home-content ul li div img{
    width: 11px;
    height: 12px;
  }
  .home-content ul li .face{
    position: absolute;
    top:1vw;
    right: 5px;
    color:white;
    font-size: 9px;
    text-align: right;
    background:linear-gradient(to right, rgba(0,0,0,0.1) 60%, rgba(0,0,0,1) 100%);
  }



</style>
