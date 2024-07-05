<template>
  <van-cell-group>
    <van-cell title="照片读取">
      <van-icon
        name="photograph"
        slot="right-icon"
        @click="takePic"
        style="margin-top: 3px"
      />
    </van-cell>
    <img :src="pic" class="pic" v-if="pic" />
  </van-cell-group>
</template>

<script setup>
import { ref } from "vue";

const pic = ref(null);

function takePic() {
  api.getPicture(
    {
      sourceType: "library",
      encodingType: "jpg",
      mediaValue: "pic",
      destinationType: "base64",
      allowEdit: true,
      quality: 90,
      targetWidth: 800,
      saveToPhotoAlbum: false,
    },
    (ret, err) => {
      if (ret) {
        pic.value = ret.base64Data; // Your can change the base64 data to a file
      } else {
        api.alert({ msg: err.msg });
      }
    }
  );
}
</script>

<style scoped>
.pic {
  width: 100%;
  text-align: center;
}
</style>
