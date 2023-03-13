import mixin from "@/assets/class/net/mixin/BaseNetActivity";
import { ChatGPTViewPresenter } from "@/assets/class/net/presenter/ChatGPTViewPresenter";
import { ViewMap } from "@/assets/class/net/view/ViewMap";

export default {
  name: "chatGPTView",
  mixins: [mixin],
  data() {
    return {
      modelList: [],
    };
  },
  mounted() {},
  created() {
    this.view.ordinaryView(this.modelsSuccess, this.modelSuccess);
  },
  methods: {
    createPresenter() {
      this.view = new ViewMap();
      return new ChatGPTViewPresenter(this.view);
    },
    models() {
      this.mPresenter.models();
    },
    sand() {
      let data = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Say this is a test!" }],
        temperature: 0.7,
      };
      this.mPresenter.completions(data);
    },
    modelsSuccess(list) {
      this.modelList = list;
    },
    modelSuccess(data) {
      console.log(data);
    },
  },
};
