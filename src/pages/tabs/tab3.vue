<template>
  <van-button size="large" @click="load">异步读取</van-button>
  <div>{{ JSON.stringify(suggests, null, 2) }}</div>
</template>

<script setup>
import { TAOBAO } from "@/libs/ajax";
import { memory } from "@/libs/utils";
import { ref } from "vue";

const suggests = ref();

async function load() {
  showLoadingToast({
    message: "Loading...",
    forbidClick: true,
    duration: 0,
  });

  try {
    const res = await TAOBAO.get(
      "https://suggest.taobao.com/sug?code=utf-8&q=华为"
    );

    // Example for the global data
    console.info("suggests loaded:", res);
    memory.set("suggests", res);
    suggests.value = memory.get("suggests");

    closeToast();
  } catch (e) {
    showFailToast(e.msg);
  }
}
</script>
