<template>


  <el-container>
    <el-header>
      <el-row>
        <el-col :span="2">
          <img src="/static/images/x.png" alt="" @click="isShow">
        </el-col>
        <el-col :span="22">
          选择分类
        </el-col>
      </el-row>
    </el-header>

    <div>
      <el-row>
        <el-col :span="3">
          <p @click="aw('all')" :class="{active1: num === 'all'}">全部</p>
        </el-col>

        <el-col :span="21">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item v-for=" (data,index) in datas.cate1Info" index="index" :key="index"
                          @click="active(data.cate1Id)">
              <p :class="{active1 : num === data.cate1Id}">{{data.cate1Name}}</p>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>

    <el-main>
      <ul>
        <li v-for="(list,ins) in datas.cate2Info" :key="ins" :type="list.shortName"
            v-if="(num === list.cate1Id) || (num === 'all') ">

           <router-link class=" a" :to="'/morepage/' + list.shortName + '?name=' + list.cate2Name +'&mix='+ 'list'">
            <img :src="list.icon" alt="">
            <p>{{list.cate2Name}}</p>
          </router-link>
        </li>
      </ul>
    </el-main>

  </el-container>
</template>

<script>
  import axios from 'axios';

  export default {
    data: function () {

      return {
        activeIndex: '1',
        datas: '',
        num: 'all',
        isnum:false,
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      active: function (numid) {
        this.num = numid;
      },
      aw: function (num1) {
        this.num = num1;
      },
      isShow:function () {
        this.$emit('showi',this.isnum)
      },

    },
    mounted() {
      axios.get('/douyu/api/cate/list').then((val) => {
        this.datas = val.data.data;
      }).catch((err) => {
        console.log(err)
      })
    }

  }

</script>

<style scoped>
  .el-container {
    height: 70vh;
  }

  .el-header {
    padding-top: 20px;
  }

  .el-header img {
    height: 16px;
    position: relative;
    left: -5px;

  }


  .el-container {
    width: 100%;
    border: none;
  }

  .el-row {
    width: 100vw;
    height: 32px;
    overflow: scroll;
  }

  .el-container .el-row .el-col-3 p {
    width: 30px;
    margin: 0 8px;
    font-size: 14px;
    line-height: 18px;
  }

  .active1 {
    color: orangered;
    border-bottom: 2px solid orangered;
  }

  .el-menu-demo {
    width: 600px;
    border: none;
  }

  .el-menu-demo .el-menu-item {
    height: 20px;
    line-height: 20px;
    border: none;
    color: #323232;
    padding: 0 10px;
  }
  .el-main {
    padding: 0;
  }
  .el-main ul {
    overflow: hidden;
  }
  .el-main ul li {
    float: left;
    width: 33.33vw;
    height: 33.33vw;
    background: #f4f4f4;
    overflow: hidden;
    text-align: center;
    border-right: 1px #ddd dashed;
    border-bottom: 1px #ddd dashed;
  }
  .el-main ul li:nth-of-type(3n){
    border-right: none;
  }

  .el-main ul li img {
    border-radius: 50%;
    margin-top: 24.6%;
    margin-bottom: 5px;
    width: 48.8%;
    height: 48.8%;
  }

  .el-main ul li p {
    font-size: 12px;
  }
  .a{
    color: #444;
  }



</style>
