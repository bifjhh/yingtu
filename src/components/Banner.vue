<template>
  <div class="banner_box">
    <el-carousel indicator-position="outside" height="4.8rem" trigger="click" arrow="never">
    <el-carousel-item v-for="item in infoList" :key="item.id" :type="item.id" @click="toinfo">
      <img :src="item.img"  v-bind="{ 'data-type': item.id}" @click="toinfo">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    infoList: []
  }),
  created() {
    this.$http
      .post("", { apiCode: "_bannerlist_001" })
      .then(res => {
        if (res.status == 200 && res.statusText == "OK") {
          this.infoList = res.data.info;
        }
      });
  },
  methods: {
    toinfo(e) {
      let that = this;
      let id = e.target.dataset.type;
      that.$router.push({ name: "details", params: { id } });
    }
  }
};
</script>

<style >
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 4.8rem;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner_box .el-carousel__indicators {
  display: inline-block;
  position: absolute;
  left: initial;
  bottom: 0.25rem;
  right: 0.2rem;
}
.banner_box .el-carousel__indicator {
  padding: 0;
  padding-left: 0.15rem;
}
.banner_box .el-carousel__button {
  width: 0.16rem;
  height: 0.16rem;
  border-radius: 50%;
  background-color: #fff;
  opacity: 1;
}
.banner_box .el-carousel__indicator.is-active .el-carousel__button {
  width: 0.4rem;
  border-radius: 8px;
}
img {
  width: 100%;
  height: 100%;
}
</style>