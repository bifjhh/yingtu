<template>
  <div class="info_box">
    <NavTop></NavTop>
    <div class="conten" v-html="conten"></div>
  </div>
</template>

<script>
import NavTop from '@/components/NavTop'
export default {
  components: {
    NavTop
  },
  data: () => ({
    conten: "",
  }),
  created() {
    let that = this;
    let id = that.$route.params.id;
    console.log(that.$route.params.id);

    that.$http
      .post("", {
        apiCode: "_jianqiaodetail_001",
        type: id
      })
      .then(res => {
        if (res.status == 200 && res.statusText == "OK") {
          that.conten = res.data.info.content;
        }
      });
  }
};
</script>

<style scoped>

.conten,
.info {
  box-sizing: border-box;
  padding-top: 1.2rem;
  padding-bottom: 1.38rem;
}
</style>