<template>
  <van-nav-bar
    id="nav"
    title="APICLOUD"
    :left-arrow="left"
    @click-left="clickLeft"
    safe-area-inset-top
    fixed
  />
</template>

<script setup>
const props = defineProps({
  left: Boolean,
});

function clickLeft() {
  api.closeWin({
    type: "reveal",
    subType: "from_left",
  });
}
</script>

<style scoped>
.van-nav-bar {
  height: auto !important;
}
</style>
