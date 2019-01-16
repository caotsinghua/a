<template>
    <div>
        <p class="color">{{a}}</p>
        <h1>sada收拾收拾sd</h1>
    </div>
</template>

<script>
export default {
  data() {
    return {
      a: "111"
    };
  },
  mounted() {
    console.log("mount");
  }
};
</script>

<style lang="less" scoped>
.color {
  color: red;
}
</style>

