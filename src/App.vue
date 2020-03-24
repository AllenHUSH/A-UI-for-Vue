<template>
  <div id="app">
    <h1>A-UI</h1>
    <a-card>
      <h2>颜色Color</h2>A-UI内置了八种颜色,可以通过添加对应类名直接使用。
      <h3>背景颜色</h3>
      <div class="a-row">
        <div class="a-col-1 a-bg-black">
          <h4>black</h4>
          <p>#000000</p>
          <code>a-bg-black</code>
          <p>深色模式背景色</p>
        </div>
        <div class="a-col-1 a-bg-dark">
          <h4>dark</h4>
          <p>#2C3E50</p>
          <code>a-bg-dark</code>
          <p>浅色模式前景色</p>
        </div>
        <div class="a-col-1 a-bg-golden">
          <h4>golden</h4>
          <p>#D3C1AF</p>
          <code>a-bg-golden</code>
          <p>深色模式前景色</p>
        </div>
        <div class="a-col-1 a-bg-white">
          <h4>white</h4>
          <p>#FFFFFF</p>
          <code>a-bg-white</code>
          <p>浅色模式背景色</p>
        </div>
        <div class="a-col-1 a-bg-blue">
          <h4>blue</h4>
          <p>#99FFFF</p>
          <code>a-bg-blue</code>
          <p>主题色</p>
        </div>
        <div class="a-col-1 a-bg-green">
          <h4>green</h4>
          <p>#99FFCC</p>
          <code>a-bg-green</code>
          <p>成功色</p>
        </div>
        <div class="a-col-1 a-bg-yellow">
          <h4>yellow</h4>
          <p>#FFFF99</p>
          <code>a-bg-yellow</code>
          <p>警告色</p>
        </div>
        <div class="a-col-1 a-bg-red">
          <h4>red</h4>
          <p>#FF9999</p>
          <code>a-bg-red</code>
          <p>危险色</p>
        </div>
      </div>
      <h3>文字颜色</h3>
      <p class="a-bg-white">
        <span class="a-text-black">black</span>
        <span class="a-text-dark">dark</span>
        <span class="a-text-golden">golden</span>
        <span class="a-text-white">white</span>
        <span class="a-text-blue">blue</span>
        <span class="a-text-green">green</span>
        <span class="a-text-yellow">yellow</span>
        <span class="a-text-red">red</span>
        <span>Nihil labore sit labore eligendi quod molestiae. Velit expedita quam est eum sit quis. Fuga quisquam dolor saepe. Et voluptatem alias debitis. Et fugiat dolorum dolor dolorum tempora ducimus.
 
Quis error ad consectetur ipsam. Cupiditate tempora ratione. Assumenda qui reprehenderit quis eius accusamus.
 
Iste aspernatur voluptatibus. Corporis consequatur ut veniam incidunt ad itaque molestiae voluptatum omnis. Eaque natus ipsam aut. Omnis est aliquam odit ea. Tenetur eius voluptates quaerat cum et et.</span>
      </p>
      <p class="a-bg-black">
        <span class="a-text-black">black</span>
        <span class="a-text-dark">dark</span>
        <span class="a-text-golden">golden</span>
        <span class="a-text-white">white</span>
        <span class="a-text-blue">blue</span>
        <span class="a-text-green">green</span>
        <span class="a-text-yellow">yellow</span>
        <span class="a-text-red">red</span>
      </p>
      <h3>深色模式</h3>A-UI默认为浅色模式，当检测到系统处在深色模式时，将自动切换深色模式。
    </a-card>
    <a-card>
      <h2>内置样式Style</h2>
      <h3>阴影</h3>加深：0.5rem
      标准：0.2rem
      <h3>圆角</h3>标准：0.2rem
      <h3>内边距</h3>标准：1rem
    </a-card>
    <a-card>
      <h2>12栅格布局Layout</h2>
      <h3>基本</h3>使用类名
      <code>a-row</code>包裹
      <code>a-col-X</code>，X合法区间[1,12]
      <div class="a-row">
        <div class="a-col-1 a-bg-golden">1</div>
        <div class="a-col-2 a-bg-dark">2</div>
        <div class="a-col-3 a-bg-golden">3</div>
        <div class="a-col-1 a-bg-dark">1</div>
        <div class="a-col-2 a-bg-golden">2</div>
        <div class="a-col-3 a-bg-dark">3</div>
      </div>
      <div class="a-row">
        <div class="a-col-2 a-bg-golden">2</div>
        <div class="a-col-4 a-bg-dark">4</div>
        <div class="a-col-6 a-bg-golden">6</div>
      </div>
    </a-card>
    <a-card canHover>
      <h2>卡片Card</h2>
      <p>默认标准阴影、标准圆角、标准内边距</p>
      <h3>指针浮动时阴影效果</h3>
      <code>canHover</code>：加深阴影；Boolean值，默认false
      <p>入场动画0ms，出场动画150ms</p>
    </a-card>
    <a-card>
      <h2>按钮Button</h2>
      <p>按钮组件的有四个属性：是否镂空、颜色、尺寸和是否禁用，你可以在设计器中快捷查看效果并产出。按钮组件支持原生button的功能。</p>
      <p>我们不推荐使用背景色按钮，因为它永远与背景色混淆；我们也不推荐黑色、白色按钮，因为在某个模式中，也易与背景混淆。</p>
      <p>为避免上述尴尬，我们新增反景色按钮，它将永远跟随另一个模式的配色。</p>
      <h3>填充</h3>
      <p>最佳推荐</p>
      <a-button color="fg">前景色按钮</a-button>
      <a-button color="ifg">反前景色按钮</a-button>
      <a-button color="ibg">反背景色按钮</a-button>
      <p>推荐</p>
      <a-button color="dark">有色按钮</a-button>
      <a-button color="golden">有色按钮</a-button>
      <a-button color="blue">有色按钮</a-button>
      <a-button color="green">有色按钮</a-button>
      <a-button color="yellow">有色按钮</a-button>
      <a-button color="red">有色按钮</a-button>
      <p>不推荐</p>
      <a-button color="bg">背景色按钮</a-button>
      <a-button color="white">有色按钮</a-button>
      <a-button color="black">有色按钮</a-button>
      <h3>镂空</h3>
      <p>最佳推荐</p>
      <a-button color="fg" hollow>前景色按钮</a-button>
      <a-button color="ifg" hollow>反前景色按钮</a-button>
      <a-button color="ibg" hollow>反背景色按钮</a-button>
      <p>推荐</p>
      <a-button color="dark" hollow>有色按钮</a-button>
      <a-button color="golden" hollow>金色按钮</a-button>
      <a-button color="blue" hollow>有色按钮</a-button>
      <a-button color="green" hollow>有色按钮</a-button>
      <a-button color="yellow" hollow>有色按钮</a-button>
      <a-button color="red" hollow>有色按钮</a-button>
      <p>不推荐</p>
      <a-button color="bg" hollow>背景色按钮</a-button>
      <a-button color="white" hollow>有色按钮</a-button>
      <a-button color="black" hollow>有色按钮</a-button>
      <h3>不同尺寸</h3>
      <a-button color="blue">默认大小</a-button>
      <a-button color="green" size="medium">中型按钮</a-button>
      <a-button color="yellow" size="small">小型按钮</a-button>
      <a-button color="red" size="mini">迷你按钮</a-button>
      <h3>禁用</h3>
      <a-button color="fg" disabled>前景色按钮</a-button>
      <a-button color="ifg" disabled>反前景色按钮</a-button>
      <a-button color="ibg" disabled>反背景色按钮</a-button>
      <a-button color="fg" disabled hollow>前景色按钮</a-button>
      <a-button color="ifg" disabled hollow>反前景色按钮</a-button>
      <a-button color="ibg" disabled hollow>反背景色按钮</a-button>
      <ButtonDesigner />
    </a-card>
    <a-card>
      <h2>链接Link</h2>
      <h3>默认</h3>
      <a-link href="https://allenhush.github.io" target="_blank">默认链接</a-link>
      <a-link color="bg">前景色链接</a-link>
      <a-link color="bg">背景色链接</a-link>
      <a-link color="ifg">反前景色链接</a-link>
      <a-link color="ibg">反背景色链接</a-link>
      <a-link color="black">有色链接</a-link>
      <a-link color="dark">有色链接</a-link>
      <a-link color="golden">有色链接</a-link>
      <a-link color="white">有色链接</a-link>
      <a-link color="blue">有色链接</a-link>
      <a-link color="green">有色链接</a-link>
      <a-link color="yellow">有色链接</a-link>
      <a-link color="red">有色链接</a-link>
      <h3>禁用</h3>
      <a-link disabled href="https://allenhush.github.io" target="_blank">默认链接</a-link>
      <a-link disabled color="bg">前景色链接</a-link>
      <a-link disabled color="bg">背景色链接</a-link>
      <a-link disabled color="ifg">反前景色链接</a-link>
      <a-link disabled color="ibg">反背景色链接</a-link>
      <a-link disabled color="black">有色链接</a-link>
      <a-link disabled color="dark">有色链接</a-link>
      <a-link disabled color="golden">有色链接</a-link>
      <a-link disabled color="white">有色链接</a-link>
      <a-link disabled color="blue">有色链接</a-link>
      <a-link disabled color="green">有色链接</a-link>
      <a-link disabled color="yellow">有色链接</a-link>
      <a-link disabled color="red">有色链接</a-link>
    </a-card>
    <a-card>
      <h2>图标Icon</h2>
      <p>
        <a-icon v-for="(item, index) in 'YOU CAN USE IT ANYWHERE'" :key="index" :name="item" />
      </p>
      <p>
        <a-icon v-for="(item, index) in 'ABCDEFGHIJKLMNOPQISTUVWXYZ'" :key="index" :name="item" />
      </p>
      <h3>EG.</h3>
      <p>
        <a-icon name="github-fill" />Github
      </p>
      <p>
        <a-icon name="QQ" />I'm QQ - 每一天,乐在沟通
      </p>
      <p>
        <a-icon name="apple-fill" />WATCH SERIES 5
      </p>
      <p>
        <a-link>
          <a-icon name="code" />You can write here
        </a-link>
      </p>
      <p>
        <a-button>
          <a-icon name="check" />Accept
        </a-button>

        <a-button color="ifg">
          <a-icon name="close" />Refuse
        </a-button>
      </p>
    </a-card>
  </div>
</template>
<script>
import ButtonDesigner from "../src/components/ButtonDesigner";
export default {
  components: {
    ButtonDesigner
  }
};
</script>
<style lang="stylus" scoped>
#app {
  padding: 1rem;
}
</style>