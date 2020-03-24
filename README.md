# A-UI

## 下载和使用

### 下载

```shell
npm install @allenhush/a-ui --save 
```

### 使用

在Vue项目的/src/main.js中

```javascript
import AUI from '@allenhush/a-ui';
import '@allenhush/a-ui/dist/a-ui.css';

Vue.use(AUI);
```

## 开发日记

### 0.1.X

#### 20200323

+ 修改了主题色，使四种主观色易在浅色主题下分辨。
+ 新增Link组件，可选属性disabled。
+ 为Button和Link组件新增鼠标样式cursor:pointer。

#### 20200324

+ Button组件新增disabled属性。
+ 所有disabled属性cursor改为not-allowed。
+ 新增Icon组件，使用Symbol方案。
+ span自动换行。


