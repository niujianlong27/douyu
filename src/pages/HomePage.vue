<template>
  <div class="">
    <home-header @showi="show"></home-header>
    <home-content></home-content>
    <home-footer></home-footer>
    <template v-if="isShow">
      <div class="all"></div>
      <kind-page class="kind"  @showi="show"></kind-page>
    </template>



  </div>
</template>

<script>
  import HomeHeader from '../components/HomeHeader';
  import HomeContent from '../components/HomeContent';
  import HomeFooter from '../components/HomeFooter';
  import KindPage from '../components/KindPage';


  export default {
    data: function () {

      return {
        isShow: ''
      }
    },
    methods: {
      show: function (str) {
        this.isShow = str;
      }
    },
    components: {
      HomeHeader,
      HomeContent,
      HomeFooter,
      KindPage,
    }
  }

</script>

<style scoped>
  .kind {
    position: fixed;
    top: 0;
    z-index: 20;
    background: white;
  }
  .all{
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.4);
    z-index: 5;
  }



</style>
