<template>
  <div id="flowerView">
    <div class="actionBar">
      <div
        class="island"
        :style="'width: ' + width + 'px; height: ' + height + 'px'"
        v-if="type !== 'big'"
      ></div>
      <div
        class="island2"
        :style="'width: ' + width + 'px; height: ' + height + 'px'"
        v-if="type === 'big'"
      ></div>
      <div class="islandPoint" v-if="showLandPoint"></div>
    </div>
    <div style="height: 200px"></div>
    <div>
      <button @click="longMessage()">长信息</button>
      <button @click="shortMssage()">短信息</button>
      <button @click="bigMessage()">大信息</button>
      <button @click="noMessage()">无信息</button>
    </div>
    <div>
      <button>两条信息</button>
    </div>
    <!-- <div>
      <button @click="slideLongMessage()">上滑长信息</button>
      <button @click="slideShortMssage()">上滑短信息</button>
    </div>
    <div>
      <button @click="longToShortMssage()">长信息切换短信息</button>
      <button @click="shortToLongMssage()">短信息切换长信息</button>
    </div> -->
    <div></div>
  </div>
</template>

<script src="./js/flowerView.js"></script>
<style lang="less" scoped>
@import "./css/flowerView.css";
</style>
