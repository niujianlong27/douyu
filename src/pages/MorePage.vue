<template>
  <div class="home-content">
    <!--{{datas}}-->
    <el-header>
      <el-row>
        <el-col :span="16">
          <img src="../assets/images/logo.png" alt="">
          <span>打开APP</span>
          <span>充值</span>
        </el-col>
        <el-col :span="8">
          <img src="/static/images/tt.png" alt="">
          <span>分类</span>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
      <el-row>
      <el-col :span="24">
        <img src="/static/images/tpng.png" alt="">
        <span>{{tabName}}</span>
      </el-col>

      <el-col :span="24">
        <ul>
          <li v-for="(list1,ins) in lists" :key="ins">
            <img :src="list1.roomSrc" alt="">
            <p>{{list1.roomName}}</p>
            <div class="man">
              <img src="/static/images/cada.png" alt="">
              <span>{{list1.nickname}}</span>
            </div>
            <div class="fire">
              <img src="/static/images/fire.png" alt="">
              <span>{{list1.hn}}</span>
            </div>
          </li>
        </ul>
      </el-col>
    </el-row>

    </el-container>
    <p class="more" @click="active()">加载更多</p>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data: function () {

      return {
        lists: [],
        num: 0,
        isTrue:true,
        tabName:''
      }
    },
    mounted() {
      this.active();
    },
    methods: {
      active: function () {
        this.num += 1
        let type = this.$route.params.type;
        this.tabName = this.$route.query.name;
        let mix = this.$route.query.mix;
        console.log(mix)

        axios.get('/douyu/api/room/'+ mix, {
          params: {
            page: this.num,
            type: type,
          }
        }).then((val) => {
          this.lists = this.lists.concat(val.data.data.list);
        }).catch((err) => {
          console.log(err)
        })
      },

    }
  }

</script>

<style scoped>

  .el-container{
    width: 100vw;
    margin-top: 60px;
  }
  .el-header {
    background: #f8f8f8;
    padding: 10px 0;
    position: fixed;
    width: 100vw;
    top: 0;
    z-index: 10;
  }

  .el-header .el-col-16 {
    text-align: left;
  }

  .el-header .el-col-16 img {
    height: 34px;
    margin-left: 10px;
  }

  .el-header .el-col-16 span {
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

  .el-header .el-col-16 span:first-of-type {
    color: orangered;
  }

  .el-header .el-col-16 span:last-of-type {
    color: white;
    background: orangered;
  }

  .el-header .el-col-8 {
    height: 37.4px;

    padding-left: 20px;
  }

  .el-header .el-col-8 img {
    height: 25px;
    background: #f8f8f8;
    position: relative;
    top: 5px;

  }

  .home-content ul {
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

  .home-content ul li img {
    width: 100%;
    border-radius: 5px;
  }

  .home-content ul li p {
    width: 100%;
    height: 15px;
    text-align: left;
    font-size: 12px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
  }

  .home-content ul li .man {
    text-align: left;
    color: white;
    font-size: 9px;
    position: absolute;
    bottom:8vw;
    left: 5px;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 1) 100%);
  }

  .home-content ul li div img {
    width: 11px;
    height: 12px;
  }

  .home-content ul li .fire {
    position: absolute;
    top:1vw;
    right: 5px;
    color: white;
    font-size: 9px;
    text-align: right;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 1) 100%);
  }

  .more {
    border-radius: 5px;
    border: solid 1px #ddd;
    padding: 10px 0px;
    margin: 10px;
    font-size: 14px;
    color: #666;
    cursor: pointer;
  }
 .home-content  .el-col-24:first-child{
   padding-top: 10px;
   text-align: left;
   line-height: 20px;
 }
  .home-content  .el-col-24:first-child img{
    height: 17px;
    position: relative;
    top:3px;
    margin-left: 5px;
    margin-right: 10px;
  }


</style>
