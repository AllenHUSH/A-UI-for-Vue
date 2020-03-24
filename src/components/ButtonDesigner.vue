<template>
  <div class="button-designer">
    <a-card canHover>
      <h3>按钮设计器</h3>
      <h4>是否镂空</h4>
      <input type="radio" name="hollow" id="h1" :value="false" v-model="hollow" />否
      <input type="radio" name="hollow" id="h2" :value="true" v-model="hollow" />是
      <h4>颜色</h4>
      <select v-model="color">
        <option value="fg">前景色</option>
        <option value="bg">背景色</option>
        <option value="ifg">反前景色</option>
        <option value="ibg">反背景色</option>
        <option value="black">黑</option>
        <option value="dark">暗蓝</option>
        <option value="golden">金</option>
        <option value="white">白</option>
        <option value="blue">浅蓝</option>
        <option value="green">浅绿</option>
        <option value="yellow">浅黄</option>
        <option value="red">浅红</option>
      </select>
      <h4>尺寸</h4>
      <input type="radio" name="size" id="s1" value v-model="size" />默认
      <input type="radio" name="size" id="s2" value="medium" v-model="size" />中型
      <input type="radio" name="size" id="s3" value="small" v-model="size" />小型
      <input type="radio" name="size" id="s4" value="mini" v-model="size" />迷你
      <h4>是否禁用</h4>
      <input type="radio" name="hollow" id="d1" :value="false" v-model="disabled" />否
      <input type="radio" name="hollow" id="d2" :value="true" v-model="disabled" />是
      <h4>内容</h4>
      <input type="text" v-model="content" />
      <h4>效果</h4>
      <a-button :hollow="hollow" :disabled="disabled" :color="color" :size="size">{{content}}</a-button>
      <h4>代码</h4>
      <div class="a-bg-ibg">
        <code id="inviteCode">
          <span>&lt;a-button</span>
          <span v-show="hollow">{{" hollow"}}</span>
          <span v-show="color!='fg'">{{" color=\""+color+"\""}}</span>
          <span v-show="size">{{" size=\""+size+"\""}}</span>
          <span v-show="disabled">{{" disabled"}}</span>
          <span>&gt;{{content}}&lt;/a-button&gt;</span>
        </code>
        <a-button color="ifg" size="mini" class="right" @click="copy()">复制</a-button>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hollow: false,
      color: "fg",
      size: "",
      disabled:false,
      content: "Button"
    };
  },
  methods: {
    copy() {
      let Url2 = document.getElementById("inviteCode").innerText;
      let oInput = document.createElement("input");
      oInput.value = Url2;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = "oInput";
      oInput.style.display = "none";
    }
  }
};
</script>
<style lang="stylus" scoped>
.right {
  float: right;
}
</style>