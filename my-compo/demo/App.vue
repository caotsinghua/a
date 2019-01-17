<template>
    <div>
        <my-row :gutter="10">
            <div class="col">aa</div>
            <div class="col"></div>
            <div class="col"></div>
        </my-row>
    </div>
</template>

<script>
import Home from "./containers/Home";
export default {
  data() {
    return {};
  },
  components: {
    Home
  },
  mounted() {
    console.log("mount");
  }
};
</script>

<style lang="less" scoped>
.col {
  width: 100px;
  float: left;
  height: 100px;
  background: #fcc;
}
</style>

