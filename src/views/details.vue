<template>
  <div class="info_box">
    <NavTop></NavTop>
    <div class="conten">
      <div class="title">{{conten.title}}</div>
      <div class="time" v-if="conten.push_time">更新日期：{{conten.push_time}}</div>
      <div class="time" v-if="conten.create_time">创建时间：{{conten.create_time}}</div>
      <div class="info">{{conten.content}}</div>
      <div class="img"><img :src="conten.img" ></div>
    </div>
  </div>
</template>

<script>
import NavTop from '@/components/NavTop'
export default {
  components: {
    NavTop
  },
  data: () => ({
    conten: ""
  }),
  created() {
    let that = this;
    let id = that.$route.params.id;

    if (id < 1000) {
      that.$http
        .post("", {
          apiCode: "_bannerdetail_001",
          id: id
        })
        .then(res => {
          if (res.status == 200 && res.statusText == "OK") {
            that.conten = res.data.info;
          }
        });
    } else {
      id -= 1000;
      that.$http
        .post("", {
          apiCode: "_manyoudetail_001",
          id: id
        })
        .then(res => {
          if (res.status == 200 && res.statusText == "OK") {
            that.conten = res.data.info;
          }
        });
    }
  }
};
</script>

<style scoped>

.title {
  font-size: 21px;
  color: rgba(51, 51, 51, 1);
  line-height: 0.4rem;
}
.time {
  font-size: 12px;
  color: rgba(153, 153, 153, 1);
  line-height: 0.4rem;
  margin-top: 0.2rem;
}
.conten {
  box-sizing: border-box;
  padding: 1.2rem 0.4rem;
}
.info {
  width: 100%;
  word-wrap: break-word;
  margin-top: 0.2rem;
  text-indent: 2em;
  font-size: 15px;
  color: rgba(51, 51, 51, 1);
  line-height: 0.4rem;
}
.img {
  width: 100%;
  height: 3.9rem;
  margin: 0.2rem 0;
}
.img > img {
  width: 100%;
  height: 100%;
}
</style>