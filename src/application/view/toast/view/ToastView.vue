<template>
  <div id="ToastView" role="alert" :style="style">
    <div class="message">{{ message }}</div>
  </div>
</template>

<script src="./js/ToastView.js"></script>
<style lang="less" scoped>
@import "./css/ToastView.css";
</style>
