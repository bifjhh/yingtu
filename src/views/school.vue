<template>
  <div class="info_box">
    <div class="top_nav"><span class="go" @click="go"></span></div>
    <div class="conten" v-for="item in list" :key="item.id" v-bind="{ 'data-type': item.type}">
      <div class="title">{{item.name}}</div>
      <div class="img">
        <img :src="item.img" >
      </div>
      <div class="info">
        <div class="info_l">
          <div class="dz">地址:&nbsp;{{item.address}}</div>
          <div class="dh">电话:&nbsp;{{item.mobile}}</div>
        </div>
        <div class="info_r">
          <div class="icon"></div>
          <div class="zx">咨询</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
document.getElementsByTagName('body')[0].style.backgroundColor="#F5F5F5"
export default {
  data: () => ({
    list: "",
    page: 1
  }),
  created() {
    console.log(this.$route.params.id);
    let that = this;
    let id = this.$route.params.id;

    that.$http
      .post("", { apiCode: "_schoollist_001", page: that.page, size: 10 })
      .then(res => {
        if (res.status == 200 && res.statusText == "OK") {
          console.log(res.data.info);
          that.list = res.data.info;
        }
      });
  },
  methods: {
    go() {
      this.$router.go(-1);
    }
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
.info_box {
  box-sizing: border-box;
  padding-top: .88rem;
  padding-bottom: 1.38rem;
}
.conten {
  width: 100%;
  height: 2.3rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 0.2rem;
  padding-right: 0.4rem;
  position: relative;
  margin-top: 0.43rem;
}
.title {
  padding-left: 0.45rem;
  position: absolute;
  top: 0;
  left: .2rem;
  width: 3.8rem;
  height: 0.5rem;
  line-height: 0.5rem;
  color: #fff;
  font-size: 16px;
  background-color: #D7000F;
  transform: translateY(-50%);
  border-radius:5px;
}

.title::before{
  position: absolute;
  content: '';
  width: 0.14rem;
  height: 0.14rem;
  top: 50%;
  left: .13rem;
  background-color: #fff;
  border-radius: 50%;
  transform: translateY(-50%);
}
.img {
  width: 2rem;
  height: 1.4rem;
}
.img > img {
  width: 100%;
  height: 100%;
}
.info {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.38rem;
}
.info_l {
  display: flex;
  width: 3.8rem;
  flex-direction: column;
}
.info_r {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 0.35rem;
  height: 0.42rem;
  background: url('../images/phone.png') center no-repeat;
  background-size: 100% 100%;
}
.dz,.dh {
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
}
.zx {
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
  margin-top: 0.28rem;
}
</style>