<template>
  <van-search placeholder="Search here" />
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="no more..."
    @load="loadMore"
  >
    <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
</template>

<script setup>
import { ref } from "vue";

const list = ref([]);
const loading = ref(false);
const finished = ref(false);

function loadMore() {
  // async load datas
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + i);
    }

    loading.value = false;

    if (list.value.length > 40) {
      finished.value = true;
    }
  }, 0);
}
</script>
