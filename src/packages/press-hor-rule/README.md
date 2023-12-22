---
url : pages/press/hor-rule/hor-rule
type: horizontal
horHeight: 475
---

## HorRule 横版规则弹窗


## 引入

```ts
import PressHorRule from 'press-plus/press-hor-rule/press-hor-rule';

export default {
  components: {
    PressHorRule,
  }
}
```

## 代码演示

### 基础用法

```html
<PressHorRule
  v-if="show"
  @close="close"
/>
```

```ts
export default {
  methods: {
    close() {
      this.show = false;
    },
  },
};
```


## API

### Props

| 参数  | 说明     | 类型     | 默认值     |
| ----- | -------- | -------- | ---------- |
| title | 标题     | _string_ | `比赛规则` |
| rule  | 比赛规则 | _string_ | -          |

### Events

| 事件名 | 说明     | 参数 |
| ------ | -------- | ---- |
| close  | 点击关闭 | -    |

