<template>
  <div>
    <div class="top_nav"><span class="go" @click="go"></span></div>
    <div class="base_nav"><a :href="'tel:'+phone">联系我们</a></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    phone: ""
  }),
  created() {
    let that = this;
    that.$http
        .post("", {
          apiCode: "_mobilelist_001",
        })
        .then(res => {
          if (res.status == 200 && res.statusText == "OK") {
            that.phone = res.data.info.mobile;
          }
        });
  },
  methods:{
    go() {
      this.$router.go(-1);
    },
  }
};
</script>

<style scoped>
div {
  box-sizing: border-box;
}
.top_nav {
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  background-color: #d7000f;
  position: fixed;
  left: 0;
  top: 0;
  color: #fff;
  z-index: 9;
}
.base_nav {
  width: 100%;
  height: 0.98rem;
  line-height: 0.98rem;
  text-align: center;
  font-size: 17px;
  background-color: #d7000f;
  position: fixed;
  left: 0;
  bottom: 0;
  color: #fff;
  z-index: 9;
}
.base_nav a{
  display: inline-block;
  width: 100%;
  line-height: 0.98rem;
  color: inherit;
}
.go {
  position: absolute;
  height: 0.33rem;
  width: 0.33rem;
  top: 50%;
  left: 0.2rem;
  transform: translateY(-50%);
  background: url("../images/jt_l.png") center no-repeat;
  background-size: 100% 100%;
}
</style>