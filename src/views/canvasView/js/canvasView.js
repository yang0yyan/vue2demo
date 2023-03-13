export default {
  name: "canvasView",
  data() {
    return {
      ctx: null,
      width: 1200,
      height: 800,
      list: [
        [0, 0],
        [1, 17.23],
        [2, 18.67],
        [3, 20.1],
        [4, 21.51],
        [5, 22.14],
        [6, 25.04],
        [7, 26.4],
        [8, 28.5],
        [9, 31.31],
        [10, 34.09],
        [11, 37.58],
        [12, 40.3],
        [13, 44.45],
        [14, 48.56],
        [15, 53.34],
        [16, 59.5],
        [17, 64.18],
        [18, 69.52],
        [19, 74.8],
        [20, 80.74],
        [21, 85.92],
        [22, 91.74],
        [23, 96.82],
        [24, 103.23],
        [25, 108.21],
        [26, 113.14],
        [27, 118.03],
        [28, 122.88],
        [29, 130.38],
        [30, 136.47],
        [31, 143.18],
        [32, 149.16],
        [33, 155.76],
        [34, 161.65],
        [35, 169.45],
        [36, 176.54],
        [37, 184.22],
        [38, 191.84],
        [39, 199.41],
        [40, 207.55],
        [41, 215.64],
        [42, 224.3],
        [43, 233.52],
        [44, 243.31],
        [45, 256.17],
        [46, 268.31],
        [47, 281.61],
        [48, 294.81],
        [49, 309.16],
        [50, 323.4],
        [51, 336.93],
        [52, 350.37],
        [53, 364.33],
        [54, 378.2],
        [55, 398.61],
        [56, 416.51],
        [57, 434.27],
        [58, 452.52],
        [59, 472.44],
        [60, 492.83],
        [61, 513.68],
        [62, 539.13],
        [63, 565.6],
        [64, 592.48],
        [65, 624.47],
        [66, 651.6],
        [67, 679.72],
        [68, 707.69],
        [69, 727.22],
        [70, 765.42],
        [71, 794.61],
        [72, 824.79],
        [73, 851.37],
        [74, 877.8],
        [75, 914.29],
        [76, 946.63],
        [77, 979.35],
        [78, 1010.78],
        [79, 1044.84],
        [80, 1077.04],
        [81, 1109.64],
        [82, 1143.17],
        [83, 1176.54],
        [84, 1209.74],
        [85, 1253.8],
        [86, 1288.84],
        [87, 1325.35],
        [88, 1363.33],
        [89, 1405.46],
        [90, 1449.88],
      ],
    };
  },
  mounted() {
    // this.initCanvas();
    // this.draw();
    this.init2();
  },
  created() {},
  methods: {
    initCanvas() {
      let ctx = document.getElementById("myCanvas");
      this.ctx = ctx.getContext("2d");
      //CSS颜色,渐变,或图案,默认设置是#000000（黑色）
      this.ctx.fillStyle = "pink";
      this.ctx.font = "10px Arial";
      ctx.textBaseline = "middle";
    },
    draw() {
      let max = [0, 0];
      let proportion = [0, 0];
      this.list.forEach((item) => {
        if (item[0] > max[0]) max[0] = item[0];
        if (item[1] > max[1]) max[1] = item[1];
      });
      proportion[0] = this.width / max[0];
      proportion[1] = this.height / max[1];

      console.log("max", max);
      console.log("proportion", proportion);
      this.ctx.beginPath();
      this.list.forEach((item, index) => {
        if (index === 0) {
          this.ctx.moveTo(
            item[0] * proportion[0],
            this.height - item[1] * proportion[1]
          );
        } else {
          this.ctx.lineTo(
            item[0] * proportion[0],
            this.height - item[1] * proportion[1]
          );
        }
      });
      this.ctx.stroke();

      // this.ctx.beginPath();
      // this.ctx.strokeStyle = "red";
      // this.list.forEach((item) => {
      //   this.ctx.moveTo(item[0] * proportion[0], this.height);
      //   this.ctx.lineTo(
      //     item[0] * proportion[0],
      //     this.height - item[1] * proportion[1]
      //   );
      //   this.ctx.fillText(item[0], item[0] * proportion[0], this.height);

      //   this.ctx.moveTo(0, this.height - item[1] * proportion[1]);
      //   this.ctx.lineTo(
      //     item[0] * proportion[0],
      //     this.height - item[1] * proportion[1]
      //   );
      //   this.ctx.fillText(item[1], 0, this.height - item[1] * proportion[1]);
      // });
      // this.ctx.stroke();
      // this.ctx.closePath();
    },

    // init() {
    //   const level = 90;
    //   const level2 = 93;
    //   // const master = 1000;
    //   const efficiency = 2.855 + 0.3;
    //   // 攻击 + (854 * 1.12) + (691 * 0.86)  0.0123*60  + 0.2 + 0.2
    //   const aggressivity =
    //     (335 + 608) *
    //       (1 + 0.047 + 0.087 + 0.099 + (efficiency - 1.0) * 0.28 + 0.2 + 0.2) +
    //     311 +
    //     19 +
    //     854 * (1.12 + 0.2) +
    //     691 * 0.86;
    //   console.log("攻击", aggressivity);
    //   // 倍率
    //   const magnification = 6.81 + 0.0661 * 60;
    //   console.log("倍率", magnification);
    //   // 增伤
    //   const element =
    //     1 + (efficiency - 1.0) * 0.4 + 0.466 + 9.68 * 0.04 + 3.0 * 0.25;
    //   console.log("增伤", element);
    //   // 爆伤
    //   const crit = 1.883 + 0.6;
    //   console.log("爆伤", crit);
    //   // 防御
    //   const defense1 = (level2 * 5 + 500) * (1 - 0.6) * (1 - 0);
    //   const defense3 = defense1 / (defense1 + level * 5 + 500);
    //   const defense4 = 1 - defense3;
    //   console.log("防御", defense4);
    //   // 抗性
    //   const resistance = (0 - 0.4) / 2;
    //   console.log(resistance);
    //   // 元素反应
    //   const reaction = 1;
    //   console.log(reaction);
    //   // // 增幅反应
    //   // let increase1 = (25 * master) / 9 / (master + 1400);
    //   // // // 剧变反应
    //   // let increase2 = (16 * master) / (master + 2000);
    //   // // 激化反应
    //   // let increase3 = (5 * master) / (master + 1200)
    //   // // 结晶反应
    //   // let increase4 = (40 * master) / 9 / (master + 1400)
    //   // let increase = increase3
    //   // console.log(increase)
    //   const hurt =
    //     aggressivity *
    //     magnification *
    //     element *
    //     (1 + crit) *
    //     defense4 *
    //     (1 - resistance) *
    //     reaction;
    //   console.log(hurt);
    //   // console.log("increase1", increase1);
    //   // console.log("increase2", 1 + increase2 + 0.6);
    // },
    init2() {
      const level = 81;
      // const level2 = 93;
      const master = 250;
      const levelCoefficient = this.list[level][1];
      // const efficiency = 2.855 + 0.3;
      // 攻击
      // const aggressivity = 1213 + 426;
      // console.log("攻击", aggressivity);
      // // 倍率
      // const magnification = 6.81 + 0.0661 * 60;
      // console.log("倍率", magnification);
      // // 增伤
      // const element =
      //   1 + (efficiency - 1.0) * 0.4 + 0.466 + 9.68 * 0.04 + 3.0 * 0.25;
      // console.log("增伤", element);
      // // 爆伤
      // const crit = 1.883 + 0.6;
      // console.log("爆伤", crit);
      // // 防御
      // const defense1 = (level2 * 5 + 500) * (1 - 0.6) * (1 - 0);
      // const defense3 = defense1 / (defense1 + level * 5 + 500);
      // const defense4 = 1 - defense3;
      // console.log("防御", defense4);
      // // 抗性
      const resistance = (0 - 0.4) / 2;
      // console.log(resistance);
      // // 元素反应
      // const reaction = 1;
      // console.log(reaction);
      // 增幅反应精通提升
      const increase1 = (25 * master) / 9 / (master + 1400);
      // 剧变、绽放反应精通提升
      const increase2 = (16 * master) / (master + 2000);
      // 激化反应
      const increase3 = (5 * master) / (master + 1200);
      // 结晶反应
      const increase4 = (40 * master) / 9 / (master + 1400);
      // // let increase = increase3
      // // console.log(increase)
      // const hurt =
      //   aggressivity *
      //   magnification *
      //   element *
      //   (1 + crit) *
      //   defense4 *
      //   (1 - resistance) *
      //   reaction;
      // console.log(hurt);

      // const hurt =
      //   levelCoefficient * 0.6 * (1 + increase2 + 0.6) * (1 - resistance);
      const hurt = levelCoefficient * 1.15 * (1 + increase2);
      console.log("level", level);
      console.log("master", master);
      console.log("levelCoefficient", levelCoefficient);
      console.log("resistance", resistance);
      console.log("increase1", increase1 * 100);
      console.log("increase2", increase2 * 100);
      console.log("increase3", increase3 * 100);
      console.log("increase4", increase4 * 100);
      console.log("hurt", hurt);
    },
  },
};
