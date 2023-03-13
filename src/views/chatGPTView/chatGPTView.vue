<template>
  <div id="chatGPTView">
    <div class="modelView">
      <div
        class="modelItem"
        v-for="(item, index) in modelList"
        :key="index"
        @click="mPresenter.models(item.id)"
      >
        <div>id：{{ item.id }}</div>
        <div>object：{{ item.object }}</div>
      </div>
    </div>
    <div></div>
    <button @click="models()">models</button>
    <button @click="sand()">发送</button>
  </div>
</template>

<script src="./js/chatGPTView.js"></script>
<style lang="less" scoped>
@import "./css/chatGPTView.css";
</style>
