<template>
  <div>
    <Banner></Banner>
    <div class="nav">
      <div class="info" @click="toInfo"  v-for='(item,index) in 12' :key="index" v-bind="{ 'data-type': item}">
        <a class="toweb" :href="webview" v-if="item==11"></a>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  components: {
    Banner
  },
  created() {
    let that = this;
    that.$http.post("", { apiCode: "_diantailist_001" }).then(res => {
      if (res.status == 200 && res.statusText == "OK") {
        that.webview = res.data.info.link_to;
      }
    });
  },

  data: () => ({
    webview: ""
  }),
  methods: {
    toInfo(e) {
      let that = this;
      let id = e.target.dataset.type;
      if (id < 8) {
        console.log(e.target.dataset.type);
        that.$router.push({ name: "info", params: { id } });
      } else if (id < 10) {
        console.log(id);
        that.$router.push({ name: "list", params: { id } });
      } else if (id == 10) {
        console.log(id);
        that.$router.push({ name: "school", params: { id } });
      }else if (id == 12) {
        id = 8;
        console.log(id);
        that.$router.push({ name: "info", params: { id } });
      }
    }
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.15rem;
  padding-left: 0.2rem;
}

.info {
  box-sizing: border-box;
  width: 2.22rem;
  height: 1.48rem;
  margin-right: 0.2rem;
  margin-top: 0.2rem;
  border-radius: 0.15rem;
  background-size: 100%, 100%;
  background-image: url("../images/11.png");
  position: relative;
}
.info:nth-of-type(2) {
  background-image: url("../images/12.png");
}
.info:nth-of-type(3) {
  background-image: url("../images/13.png");
}
.info:nth-of-type(4) {
  background-image: url("../images/14.png");
}
.info:nth-of-type(5) {
  background-image: url("../images/15.png");
}
.info:nth-of-type(6) {
  background-image: url("../images/16.png");
}
.info:nth-of-type(7) {
  background-image: url("../images/21.png");
}
.info:nth-of-type(8) {
  background-image: url("../images/22.png");
}
.info:nth-of-type(9) {
  background-image: url("../images/23.png");
}
.info:nth-of-type(10) {
  background-image: url("../images/31.png");
}
.info:nth-of-type(11) {
  background-image: url("../images/32.png");
}
.info:nth-of-type(12) {
  background-image: url("../images/33.png");
}
.toweb{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
}
</style>