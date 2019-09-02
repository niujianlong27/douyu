<template>
  <div>
    <div class="home-top">
    <el-header>
      <el-row>
        <el-col :span="20">
          <img src="../assets/images/logo.png" alt="">
          <span>打开APP</span>
          <span>充值</span>
        </el-col>
        <el-col :span="4">
          <img src="../assets/images/index.png" alt="" >
        </el-col>
      </el-row>

    </el-header>

    <el-main>

      <el-row>

        <el-col :span="4">
          <p>推荐</p>
        </el-col>
        <el-col :span="20">
          <ul>
            <li v-for="(data,index) in datas" class="li"  :key="index">

              <router-link class=" a" :to="'/morepage/' + data.shortName + '?name=' + data.name +'&mix='+ 'list'">
                <span>{{data.name}}</span>
              </router-link>
            </li>
          </ul>
        </el-col>

      </el-row>

     <img src="../assets/images/indexc.png" alt="" @click="show()">

    </el-main>
    </div>

    <el-footer>
      <div class="block">
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 6" :key="item" >
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-footer>

  </div>
  <div>
    dev的内容
  </div>


</template>

<script>
  import axios from 'axios';
  import bus from  '../assets/bus'

  export default {
    data: function () {

      return {
        datas: '',
        isShow:true,
      }
    },
    methods:{
      show:function () {

        this.$emit('showi',this.isShow);

      }
    },
    mounted() {
      axios.get('/douyu/api/cate/recList').then((val) => {
        this.datas = val.data.data;
      }).catch((err) => {
        console.log(err)
      });

      function w(){
        console.log($('.li').length);
      };
      w()

    }
  }

</script>

<style scoped>
  .el-header {
    height: 54px !important;
    padding: 10px 0 0;
  }

  .el-header .el-col-20 {
    text-align: left;
  }

  .el-header .el-col-20 img {
    height: 34px;
    margin-left: 10px;
  }

  .el-header .el-col-20 span {
    position: relative;
    top: -10px;
    height: 28px;
    border: solid 1px orangered;
    padding: 6px 13px;
    font-size: 12px;
    border-radius: 3px;
    line-height: 14px;
    margin-left: 3px;
  }

  .el-header .el-col-20 span:first-of-type {
    color: orangered;
  }

  .el-header .el-col-20 span:last-of-type {
    color: white;
    background: orangered;
  }

  .el-header .el-col-4 {
    height: 37.4px;
  }

  .el-header .el-col-4 img {
    height: 18px;
    position: relative;
    top: 12px;
    right: -5px;
  }

  .el-main {
    padding: 0;
    height: 30px;
    font-size: 14px;
    margin: 10px 0;
  }

  .el-main .el-col-4 p {
    width: 30px;
    margin: 0 5px 0;
    color: orangered;
    font-weight: bold;
    border-bottom: solid 2px orangered;
  }
  .el-col-20 ul {
    width: 1500px;
  }
  .el-col-20 ul li {
    float: left;
    margin: 0 10px;
  }

  .el-col-20 ul li:first-child {
    margin-left: 0;
  }
  .el-main img {
    background: white;
    height: 45px;
    position: absolute;
    right: 0;
    top: 50px;
  }
  .el-footer{
    padding: 0;
    height: 100%!important;
    margin-top:100px ;
  }

  .el-carousel__item{
    background-size: 100%!important;
  }

  /deep/ .el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    color: #ffffff;
  }
  /deep/ .el-carousel__container{
    height: 58vw!important;
  }
  .home-top{
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
    z-index: 10;
  }
  .a{
    color: #444;
  }
  .el-carousel__item:nth-child(7) {
    background: url("/static/images/0.jpg") no-repeat;
  }
  .el-carousel__item:nth-child(8) {
    background: url("/static/images/1.jpg") no-repeat;
  }
  .el-carousel__item:nth-child(3) {
    background: url("/static/images/2.jpg") no-repeat;
  }
  .el-carousel__item:nth-child(4) {
    background: url("/static/images/4.jpg") no-repeat;
  }
  .el-carousel__item:nth-child(5) {
    background: url("/static/images/5.jpg") no-repeat;
  }
  .el-carousel__item:nth-child(6) {
    background: url("/static/images/6.jpg") no-repeat;
  }





</style>
