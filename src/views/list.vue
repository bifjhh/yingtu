<template>
  <div class="info_box">
    <div class="conten" v-for="item in list" :key="item.id" v-bind="{ 'data-type': item.id}" @click="toinfo">
      <div class="title" v-bind="{ 'data-type': item.id}">{{item.title}}</div>
      <div class="img" v-bind="{ 'data-type': item.id}">
        <img :src="item.img" v-bind="{ 'data-type': item.id}">
      </div>
    </div>
    <button v-if="ifNext" @click="next">加载更多...</button>
    <NavTop ></NavTop>
  </div>
</template>

<script>
import NavTop from "@/components/NavTop";
export default {
  components: {
    NavTop
  },
  data: () => ({
    list: [],
    page: 1,
    id: "",
    ifNext:false,
  }),
  created() {
    let that = this;
    that.id = this.$route.params.id;
    that.getList(that);
  },
  methods: {
    toinfo(e) {
      let that = this;
      let id = e.target.dataset.type * 1 + 1000;
      that.$router.push({ name: "details", params: { id } });
    },
    getList(that) {
      let apiCode;
      if (that.id == 8) {
        apiCode = "_manyoulist_001";
      } else if (that.id == 9) {
        apiCode = "_huodonglist_001";
      }
      that.$http
        .post("", {
          apiCode: apiCode,
          page: that.page,
          size: 10
        })
        .then(res => {
          if (res.status == 200 && res.statusText == "OK") {
            that.list = that.list.concat(res.data.info);
            if(that.list.length>10){
              that.ifNext=true;
            }else{
              that.ifNext=false;
            }
          }
        });
    },
    next(){
      let that = this;
      that.getList(that)
    }
  }
};
</script>

<style scoped>
.info_box {
  box-sizing: border-box;
  padding: 0 0.2rem;
  padding-top: 0.88rem;
  padding-bottom: 1.38rem;
}
.title {
  padding-left: 0.2rem;
  position: relative;
  height: 0.84rem;
  line-height: 0.84rem;
}
.title::before {
  position: absolute;
  content: "";
  width: 3px;
  height: 0.38rem;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: #fe5c2b;
}
.conten {
  padding-bottom: 0.34rem;
  border-bottom: 1px solid #ccc;
}
.img {
  width: 100%;
  height: 3.9rem;
}
.img > img {
  width: 100%;
  height: 100%;
}
button {
  margin-top: 0.5rem;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: #f3f3f3;
  border-radius: 10px;
}
</style>