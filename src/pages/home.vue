<template>
  <div>
    <Header :left="false" />
    <van-tabbar id="tabbar" v-model="tabActive" @change="changeTab">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Header from "@/components/header";
import apicloud from "@/libs/apicloud";

const tabActive = ref(0);

// No vue-router, use apicloud's framegroup to get the max transform efficiency
// But if u wanna a smooth coding feeling, just use the vue router and the v-tap
onMounted(() => {
  // You can only use the apicloud library to get dom infomations
  const navHeight = apicloud.dom("#nav").offsetHeight;
  const tabHeight = apicloud.dom("#tabbar").offsetHeight;
  const frameHeight = api.winHeight - navHeight - tabHeight;

  api.openFrameGroup(
    {
      name: "homeTabs",
      scollEnabled: true,
      rect: {
        x: 0,
        y: navHeight,
        w: "auto",
        h: frameHeight,
      },
      index: 0,
      useWKWebView: false, // Be careful here
      historyGestureEnabled: true,
      frames: [
        {
          name: "tab1",
          url: "./tabs-tab1.html", // sub diretory file format: ./[subdir]-[subdir]-[filename].html
        },
        {
          name: "tab2",
          url: "./tabs-tab2.html",
          bounces: true,
          vScrollBarEnabled: false,
        },
        {
          name: "tab3",
          url: "./tabs-tab3.html",
        },
      ],
    },
    (ret, err) => {
      tabActive.value = ret.index;
    }
  );
});

// You can't test this on the browser, use wifi sync to ur phone pleaz
function changeTab(index) {
  console.info("select tab:", index);
  api.setFrameGroupIndex({
    name: "homeTabs",
    index,
    scroll: true,
  });
}
</script>
