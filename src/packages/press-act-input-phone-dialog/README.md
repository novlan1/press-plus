---
url : pages/act/act-input-phone-dialog/act-input-phone-dialog
---

## ActInputPhoneDialog 填写手机弹窗

## 引入

```ts
import PressActInputPhoneDialog from 'press-plus/press-act-input-phone-dialog/press-act-input-phone-dialog';

export default {
  components: {
    PressActInputPhoneDialog,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActInputPhoneDialog
  :show.sync="show"
  :phone.sync="inputPhone"
  :is-agree-protocol.sync="isAgreeProtocol"
  :code.sync="code"
  :need-phone-check="true"
  protocol-name="Press UI 协议"
  @clickButton="clickButton"
  @clickProtocol="clickProtocol"
  @clickUserProtocol="clickUserProtocol"
  @clickCloseButton="clickCloseButton"
/>
```

```ts
export default {
  data() {
    return {

    }
  },
  methods: {
    clickButton() {
      this.onGTip('[clickButton]');
    },
    clickProtocol() {
      this.onGTip('[clickProtocol]');
    },
    clickUserProtocol() {
      this.onGTip('[clickUserProtocol]');
    },
    clickCloseButton() {
      this.onGTip('[clickCloseButton]');
    },
  }
}
```

## API

### Props

| 参数                | 说明                                            | 类型      | 默认值                           |
| ------------------- | ----------------------------------------------- | --------- | -------------------------------- |
| show                | 是否展示弹窗                                    | _boolean_ | `false`                          |
| phone               | 手机号码                                        | _string_  | -                                |
| code                | 手机号验证码                                    | _string_  | -                                |
| need-modify-button  | 是否需要显示修改按钮                            | _boolean_ | `false`                          |
| get-code-text       | 获取验证码按钮文案                              | _string_  | -                                |
| is-disable-get-code | 获取验证码按钮是否可点击                        | _boolean_ | `false`                          |
| close-button-text   | 左侧按钮文案                                    | _string_  | `取 消`                          |
| button-text         | 右侧按钮文案                                    | _string_  | `确认兑换`                       |
| need-phone-check    | 是否需要验证手机号合法性                        | _boolean_ | `false`                          |
| remark              | 兑换说明                                        | _string_  | `请填写手机号，将兑换到对应账号` |
| title               | 弹窗标题                                        | _string_  | `填写手机号码`                   |
| protocol-name       | 协议名称                                        | _string_  | -                                |
| user-protocol-name  | 用户协议名称                                    | _string_  | -                                |
| user-protocol-list  | 用户协议列表                                    | _array_   | -                                |
| is-agree-protocol   | 是否选中协议                                    | _boolean_ | `false`                          |
| use-tip-class       | 是否使用 `tip-comp` 为前缀的类名                | _boolean_ | `false`                          |
| hide-tip-style      | 是否隐藏 `@TIP_STYLE_NAME` 关键词编译时加的样式 | _boolean_ | `false`                          |
| disable-phone-input | 是否禁用手机号输入框                            | _boolean_ | `false`                          |

### Events

| 事件名                 | 说明                 | 回调参数         |
| ---------------------- | -------------------- | ---------------- |
| clickCloseButton       | 点击关闭图标         | -                |
| clickModifyButton      | 点击修改按钮         | -                |
| clickButton            | 点击主按钮           | -                |
| clickProtocol          | 点击协议             | -                |
| clickUserProtocol      | 点击用户协议         | `userProtocol`   |
| clickGetCodeButton     | 点击获取验证码按钮   | -                |
| clickModifyButton      | 点击修改手机号按钮   | -                |
| changeIsAgreeProtocol  | 点击同意用户信息协议 | `checked`        |
| update:show            | 更新展示状态         | `show`           |
| update:isAgreeProtocol | 更新是否同意协议     | `checked`        |
| update:phone           | 更新手机号           | `e.target.value` |

### 类型说明

```ts
// userProtocolList
type IUserProtocolList = Array<IUserProtocol>

// userProtocol
type IUserProtocol = {
  brandName: String,          // 品牌名
  userProtocolTitle: String,  // 协议标题
}
```

## 自定义样式

<custom-style />
