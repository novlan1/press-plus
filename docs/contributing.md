# 贡献指南

## 1. 理念

### 1.1. 开发者和使用者

组件库有两面，一面朝向开发者，一面朝向使用者。其实所有的工具都有这两面，不过大部分工具可能是个人开发，或者后期改动频率不高，所以朝向开发者的一面并不显著，而组件库（尤其是业务组件库）改动相对频繁，这两面都很重要。

Press Plus 面向开发者时，追求**高效、自动化**，让开发者少介入，少犯错，比如：

- 文档和示例就近编写，方便维护，由脚本自动派发
- CI 持续集成，多端在线示例自动更新
- 一键新增组件
- 一键发布组件库
- 自动生成 `Change Log`
- 自动生成 `Props/Event` 文档
- 一键更新 `name/emits` 属性

Press Plus 面向使用者时，追求**简单、易用**，比如：

- 统一的代码规范、命名规范，如统一全局 `QQ`、`WX`、`PC` 的使用
- 不使用简写，减少使用者负担
- 渐进式增强，允许 H5 平台更多的灵活性
- 封装 Vue3 和非 `uni-app` 环境下的适配器
- 多种组件支持函数式调用
- 始终向后兼容，业务安全升级

## 2. 目录结构

项目结构如下：

```bash
- docs            # 文档地址
- plugin          # [demo]工程用到的插件
- script          # 脚本
- tests           # 测试用例
- src
  - common        # [demo]公共内容
  - packages      # 对外发布的包内容
  - pages         # [demo]页面内容
  - static        # [demo]静态内容
  - App.vue       # [demo]应用入口
  - main.js
  - pages.json
```

组件库除了组件外，还有文档、示例、工程化配置等部分。为了维护起来方便，将示例、文档、组件都放在一个文件夹里，所以一个标准的组件目录如下：

```bash
- press-button
  - demo-helper/        # 非必需，组件示例相关数据、方法
  - helper/             # 非必需，业务层处理数据的相关方法，可能引入 t-comm 第三方模块
  - demo.vue            # 组件示例
  - press-button.vue    # 组件
  - README.md           # 组件中文文档
  - README.en-US.md     # 组件英文文档
```

`src/packages`下就是由这些组件文件夹和一些公共文件构成。

上面的组织结构并不能直接用，还需要把`README.md`移动到`docs`中，把`demo.vue`移动到`src/pages`中。开发时会监听这些文件变动，发生变动后就把它们拷贝到需要的位置上。

<img 
  src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_2de0d5cb1567b66aa7.png" width="700"
/>

## 3. 开发


首先要执行如下命令，进行组件的派发：

```bash
npm run init
```

### 3.1. 组件开发

对于H5、微信小程序、QQ小程序有不同的启动命令：

```bash
npm run dev
# h5

npm run dev:mp-weixin
# 微信小程序

npm run dev:mp-qq
# qq小程序
```

### 3.2. 新增组件

执行以下命令：

```bash
npm run new:comp
```

然后交互式的输入组件英文名、中文名等内容即可。



### 3.3. 文档开发

文档开发命令：

```bash
npm run docs:dev
```

### 3.4. 文档、示例部署

`Press Plus`接入了CI，代码推送后会自动构建，并部署H5、微信小程序、QQ小程序三端示例及文档。


### 3.5. 辅助方法

Press Plus 内部提供了一些提效工具，包括：

- 提取 `props/event`，可用于文档
- 提取 `class`，可用于 BEM 改造中的映射表
- CSS 单位转化，`rem` => `px`
- 自动添加、修正组件的 `name` 属性
- 自动添加组件的 `emits` 属性，Vue3 需要
- 活动组件增加隐藏 @TIP_STYLE_NAME 样式
- 活动组件进行 CSS 替换

使用方法如下：

```bash
# 提取 props
# npm run extract:props [componentPath]
npm run extract:props src/packages/press-act-input-phone-dialog/press-act-input-phone-dialog.vue

# 提取 event
# npm run extract:event [componentPath]
npm run extract:event src/packages/press-act-input-phone-dialog/press-act-input-phone-dialog.vue

# 提取 class
# npm run extract:class [componentPath]
npm run extract:class src/packages/press-hor-owner-index/press-hor-owner-index.vue

# rem 转 px
# npm run rem:px [componentPath]
npm run rem:px src/packages/press-message-board/press-message-board-input.vue

# 添加、修正 name 属性
npm run add:name

# 添加 emits 属性
npm run add:emits

# 活动组件增加隐藏 TIP_STYLE_NAME 样式
npm run act:hide:tip

# 活动组件进行 CSS 替换
npm run act:replace:class
```

## 4. 开发规范

### 4.1. 代码规范

需符合公司代码规范。

### 4.2. 提交规范

推荐 [Angular 规范](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)


### 4.3. 命名规范

- 导出对象、类、组件，用大驼峰命名法，首字母大写
- 导出方法，用小驼峰命名法，首字母小写，如`loader`、`post`、`appBase`、`getAreaCode`等
- 文件名用小写+中划线，比如`message-dialog`，不能用`messageDialog`

此外，命名要尽量语义化，不要用 `data2`、`dataNew`，这种不清不楚的数字、`new` 做结尾。

### 4.4. 文档规范


1. 文档 `props` 字段为横杠写法，不能为驼峰

正确写法：

| 参数           | 说明             | 类型      | 默认值  |
| -------------- | ---------------- | --------- | ------- |
| show-pic       | 是否显示图片     | _boolean_ | `false` |
| props-data     | 弹窗数据         | _object_  | -       |
| show-close-btn | 是否显示关闭图标 | _boolean_ | `true`  |

错误写法：

| 参数         | 说明             | 类型      | 默认值  |
| ------------ | ---------------- | --------- | ------- |
| showPic      | 是否显示图片     | _boolean_ | `false` |
| propsData    | 弹窗数据         | _object_  | -       |
| showCloseBtn | 是否显示关闭图标 | _boolean_ | `true`  |


2. 文档 `props` 默认值

`string/array/object`，默认为空/空数组/空对象时，一律写为`-`，不要写 `''`/`[]`/`{}`，冗余且没意义。

3. 复杂对象 `props`

必须注明每个字段的类型，如下：

```ts
type IPropsData = {
  dialogClass?: string; // 弹窗额外类名
  storePic?: string; // 商户图片
  storeName?: string; // 商户名称

  title?: string;
  content: string;
  subContent?: string // 额外说明文案
  isGold?: boolean; // subContent 是否添加 -gold 类名

  btnText?: string; // 确认按钮文案
  cancelBtnText?: string; // 取消按钮文案
  btnClass?: string; // 确认按钮额外类名
  cancelBtnClass?: string; // 取消按钮额外类名
  
  hasHook?: boolean; // 是否有对勾Dom
}
```

### 4.5. 其他

对外 API 需简单、易记忆，比如`change`、`list`，最好一个单词组成，并且不能简写，与业界流行组件库对齐。

不能在组件内部`console.log`。

类名需符合 [BEM](https://getbem.com/)规范，并以`press`为前缀。

## 5. 细节

### 5.1. rem单位

目前有的组件使用的单位是`rem`

- 优势：h5端适配更好，更合适
- 劣势：在小程序等其他端需要额外的插件来转换

`Press Plus` 并不强制单位，只要组件内部统一即可。

### 5.2. UI 与逻辑分离

好处如下：

1. **分工明确**，重构人员主要负责 UI，前端人员主要负责逻辑
2. 符合**单一职责原则**
3. 分离后，UI 和逻辑互不影响，提高各自的**扩展性**，增强各自的**可复用性**
4. 可视为一种生产者消费者模式，一方提供数据 一方消费数据，**解耦**更好，**可维护性**更强
5. 体现**分而治之**的思想，关注点分离，**开发效率**更高

符合单一职责原则的组件或工具，一定是小的，如果它很大，那么一定可以拆分为更小的单元。对应到组件库这里，Press Plus 可以提供大组件，但必须由一个个小组件构成，而不是很长很大的单文件。

此外，真正的 UI 与逻辑分离，应该是一个交付单元与逻辑的解耦。业务上的交付单元是页面，也就是页面级别拆分为 UI 和逻辑，而不是一层层的 UI 都对应一套逻辑。也就是 `UI` 不要套 `Module`，否则会降低可维护性。

### 5.3. Javascript 优先

`js`比`html`灵活，能写在`js`中的，就不要在组件中判断，灵活意味着通用性强，在**跨平台、横竖屏、技术栈迁移**时候，`js`都能够很方便的复用，但是组件就不行。

### 5.4. 项目依赖关系

Press Plus 底层依赖 `t-comm`、`uni-plugin-light` 等库。

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/11/own_mike_531f563c0322f19dc1.png" width="500" />


### 5.5. 适配多平台、多场景

Press Plus 在兼容 Vue3 项目、非 `uni-app` 环境、APP 环境时，采用的实现方式为，新建工程，并将 Press Plus 组件库作为子仓库。

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_889e9d727ea8d8b63e.png" width="500" />

### 5.6. 通用 & 灵活

下图是 H5、小程序、APP语法灵活度的对比。

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_76f35297c8da15ecea.png" width="300" />

Press Plus 在编写跨端代码的时候，采用以下原则：

1. 对齐短板，抹平差异，提供通用API
2. 特殊场景下，条件编译，保持灵活性

这里举一些 H5 环境下渐进式增强的例子：

1. 函数式调用组件的时候，可以动态创建 Dom，无需预埋组件
2. Popover Plus 点击空白处会收起，即 clickOutSide
3. List 支持自动检测外层 `scroller`，即支持任意父级的滚动

### 5.7. 业务组件的本质

业务组件基本上都是**展示型**的，即**在什么位置、显示什么样式的、什么内容**。

为什么业务组件很少会有交互很复杂的呢？因为一旦包含复杂交互的部分，一定可以抽象出来，成为一个基础组件 + 业务组件，最终导致业务组件只能是展示类型的。

这样是有好处的，符合单一职责原则，易维护，可复用性强。

### 5.8. 与业务隔离

首先，并不是从业务中沉淀的就一定是业务组件，业务组件的含义一般是**通用性差，但可以解决特定场景问题**，变化形式不多，**灵活性差，参数没有基础组件多**。

`Press Plus`的组件、逻辑都应该减少与业务的耦合，保持稳定。基础组件很容易做到，也很容易判断是否耦合，对于业务中沉淀下来的，如何做到呢？

- 不能存在业务状态码，多重判断逻辑应该前置完成
- 关注点分离，关注组件自身，而非业务
- 最少知识原则，只传入必要的参数
  
举个例子，赛程树组件中点击轮次 Tab 的事件，不能命名为 `jumpToSetPage`，需改为与业务无关的 `clickRoundTab`，因为跳转轮次设置页面是业务设定，并不一定稳定，有可能过几天需求就改了，而点击 Tab 事件却是实实在在的，永久的。

另外，赛程树的文案**不能由是业务状态驱动，而应该UI驱动**。下面是改之前的代码，与业务过度耦合，业务如果增加比赛状态，必然会改动组件。

```html
<!-- 预览状态 -->
<div
  v-if="isPreview"
  class="tip-match-current-pk-tip"
>
  <!-- 编号 -->
  <p
    v-if="battleDetail.bracketIdDesc"
    class="tip-match-num"
  >
    {{ battleDetail.bracketIdDesc }}
  </p>
  <p>&nbsp;</p>
  <p v-if="isAdmin">
    {{ isSchEnd ? '已结束' : startBattleTypeDesc }}
  </p>
</div>

<!-- 已结束 -->
<div
  v-else-if="isSchEnd"
  class="tip-match-current-pk-tip"
>
  <p
    v-if="battleDetail.bracketIdDesc"
    class="tip-match-num"
  >
    {{ battleDetail.bracketIdDesc }}
  </p>
  <p>{{ battleEndTime }}</p>
  <p>
    已结束
  </p>
</div>
```

可以改成业务无关的UI状态，在JS中前置判断业务状态码，得出UI状态。核心就是**在什么位置显示什么样式的什么内容**。

- 是否显示带背景的文案，`bracketIdDesc`
- 是否显示不带背景的标签，`timeDesc`
- 是否显示另一个不带背景的标签，及它是否可以文字高亮，`statusDesc`、`isStatusHighList`
- 是否展示直播图标，`showLiveIcon`
- 是否展示视频号图标，`showChannelsIcon`


```html
<div class="press-schedule-team-tips">
  <p
    v-if="scheGroupInfo.bracketIdDesc"
    class="press-schedule-team-tip press-schedule-team-tip--bg"
  >
    {{ scheGroupInfo.bracketIdDesc }}
  </p>
  <p
    v-if="scheGroupInfo.timeDesc"
    class="press-schedule-team-tip"
  >
    {{ scheGroupInfo.timeDesc }}
  </p>
  <p
    v-if="scheGroupInfo.statusDesc"
    class="press-schedule-team-tip"
    :class="{
      'press-schedule-team-tip--light': scheGroupInfo.isStatusHighList
    }"
  >
    {{ scheGroupInfo.statusDesc }}
  </p>
  <div
    v-if="scheGroupInfo.showLiveIcon"
    class="press-schedule-team-tip-icon press-schedule-team-tip-icon--green iconfont icon-live"
    @click.stop="onWatchBattle"
  />
  <div
    v-if="scheGroupInfo.showChannelsIcon"
    class="press-schedule-team-tip-icon iconfont icon-video-number"
  />
</div>
```

上面的改动并不是最佳的，还可以继续优化。比如，直播图标和视频号图标，可以由参数传入，以此支持更多图标类型。命名可以更脱离业务，不命名为`timeDesc`、`statusDesc`。


## 6. 活动组件

### 6.1. 介绍

`Press Plus` 中的活动组件，是一类特殊的组件，大多可以用 `@TIP_STYLE_NAME` 指定不同游戏类型的样式，同时使用方也必须引入[相应的 `loader`](https://novlan1.github.io/uni-plugin-light/zh/loader/cross-game-style.html)。

### 6.2. 新增游戏样式

以 `press-act-award-dialog` 为例

1. 启动项目，`npm run init && npm run dev`
2. 在 `press-act-award-dialog/css` 目录下，新建对应游戏的英文名，比如 `abc.scss`
3. 执行 `npm run gen:style`，生成 `styleList` 
4. 在示例项目面板，选择此次新增的样式

接下来就可以开发了。

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/12/own_mike_ecc38b3b6f256226e9.png" width="280" />


### 6.3. 开发规范

总体规范：

1. 顶层结构需要加上 `press-act` 类，以及条件式的 `press-act--hidden-tip`，用来支持隐藏 `@TIP_STYLE_NAME` 样式

```html
<div
  :class="[getActClass('benefit'), {
    'press-act--hidden-tip': hideTipStyle,
  }, 'press-act']"
>
</div>
```

2. 不允许只有 `html` 结构，没有样式。结构和样式是一个整体，缺乏样式难以调试，后期难维护。可以加参数隐藏，不可以没有
3. 始终向后兼容，新加的结构需要加参数控制，不要影响之前项目
4. 新加的结构不要使用 `getActClass`，`getActClass` 只是为了兼容老类名，请直接在 Vue 上写类名，简单直观
5. 组件样式必须加 `scoped`，不要尝试污染其他组件


样式规范：

1. 不可以在组件样式内声明字体，比如 `@font-face`，请在业务中自行声明
2. 不可以在编写其他组件的样式，否则难以维护，子组件除外
3. 组件样式不可以加 `!important`，否则业务侧难以更改样式
4. 后续开发请使用 `press` 开头的类名，老类名（`tip` 开头）会在下个大版本时去除
5. 不要频繁在页面中覆盖组件样式，请直接在组件库中修改，一次性活动除外
