<template>
  <div
    v-if="show"
    :class="[
      getActClass('cover'), {
        'press-act--hidden-tip': hideTipStyle,
      }, 'press-act']"
  >
    <div :class="[getActClass('dialog','dialog-phone')]">
      <a
        :class="[getActClass('close')]"
        @click="closeDialog"
      />
      <p :class="[getActClass('title','title--phone')]">
        {{ title ? title : '填写手机号码' }}
      </p>
      <div :class="[getActClass('content')]">
        <div :class="[getActClass('box')]">
          <div :class="[getActClass('code-wrap')]">
            <input
              :value="phone"
              :class="[getActClass('phone-number')]"
              type="string"
              placeholder="请输入手机号码"
              :disabled="disablePhoneInput"
              @input="changePhone"
            >
            <div
              v-if="needModifyButton"
              :class="[getActClass('code-btn')]"
              @click.stop="onClickModifyButton"
            >
              修改
            </div>
          </div>
          <div
            v-if="needPhoneCheck"
            :class="[getActClass('code-wrap')]"
          >
            <input
              :value="code"
              type="number"
              :class="[getActClass('code-number')]"
              placeholder="输入验证码"
              @input="changeCode"
            >
            <div
              :class="[
                getActClass('code-btn', {
                  [getActClass('code-btn--disabled')]: isDisableGetCode
                }),
              ]"
              @click.stop="onClickGetCode"
            >
              {{ getCodeText || '获取验证码' }}
            </div>
          </div>
        </div>
        <p :class="[getActClass('message')]">
          {{ remark }}
        </p>
        <div
          v-if="protocolName || userProtocolName || userProtocolList.length"
          :class="[getActClass('treaty-wrap')]"
        >
          <PressActCheckbox
            :value="isAgreeProtocol"
            :custom-class="getActClass('treaty-check')"
            :use-tip-class="useTipClass"
            @input="changeIsAgreeProtocol"
          />
          <div :class="[getActClass('treaty-terms')]">
            已阅读并同意
            <span
              v-if="protocolName"
              :class="[getActClass('treaty-desc')]"
              @click="onClickProtocol"
            >
              《{{ protocolName }}》
            </span>
            {{ protocolName && (userProtocolName || userProtocolList.length) ? '和' : '' }}
            <span
              v-if="userProtocolName"
              :class="[getActClass('treaty-desc')]"
              @click="onClickUserProtocol"
            >
              《{{ userProtocolName }}》
            </span>
            <span v-if="!userProtocolName && userProtocolList.length ">
              <span
                v-for="(protocol, index) in userProtocolList"
                :key="index"
                :class="[getActClass('treaty-desc')]"
                @click="onClickUserProtocol(protocol)"
              >
                《{{ protocol.userProtocolTitle }}》
              </span>
            </span>
          </div>
        </div>
        <div :class="[getActClass('button-wrap')]">
          <a
            :class="[getActClass('btn--cancel','btn--medium-secondary')]"
            @click="closeDialog"
          >{{ closeButtonText }}</a>
          <!-- 未勾选协议的按钮样式 tip-comp-button-disabled -->
          <a

            :class="[
              getActClass('btn--sure','btn--medium-primary', {
                [getActClass('btn--disabled')]:
                  (protocolName || userProtocolName || userProtocolList.length) && !isAgreeProtocol,
              }),

            ]"
            @click="onClickButton"
          >{{ buttonText }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHideBaseStyleMixin } from '../mixins/act/hide-base-style';
import PressActCheckbox from './press-act-checkbox.vue';
import { getActClass } from './utils';


export default {
  name: 'PressActInputPhoneDialog',
  options: {
    styleIsolation: 'shared',
  },
  components: {
    PressActCheckbox,
  },
  mixins: [getHideBaseStyleMixin()],
  props: {
    show: {
      type: Boolean,
      desc: '是否展示弹窗',
      default: false,
      required: false,
    },
    phone: {
      type: String,
      desc: '手机号码',
      default: '',
      required: false,
    },
    needPhoneCheck: {
      type: Boolean,
      desc: '是否需要验证手机号合法性',
      default: false,
      required: false,
    },
    needModifyButton: {
      type: Boolean,
      desc: '是否需要显示修改按钮',
      default: false,
      required: false,
    },
    code: {
      type: String,
      desc: '手机号验证码',
      default: '',
      required: false,
    },
    getCodeText: {
      type: String,
      desc: '获取验证码按钮文案',
      default: '',
      required: false,
    },
    isDisableGetCode: {
      type: Boolean,
      desc: '获取验证码按钮是否可点击',
      default: false,
      required: false,
    },
    remark: {
      type: String,
      desc: '兑换说明',
      default: '请填写手机号，将兑换到对应账号',
      required: false,
    },
    title: {
      type: String,
      desc: '弹窗标题',
      default: '填写手机号码',
    },
    protocolName: {
      type: String,
      desc: '协议名称',
      default: null,
    },
    userProtocolName: {
      type: String,
      desc: '用户协议名称',
      default: null,
    },
    userProtocolList: {
      type: Array,
      desc: '用户协议列表，用于多个用户协议时',
      default: () => [],
    },
    isAgreeProtocol: {
      type: Boolean,
      default: false,
      required: false,
      desc: '是否选中协议',
    },
    useTipClass: {
      type: Boolean,
      default: false,
    },
    hideTipStyle: {
      type: Boolean,
      default: false,
    },
    closeButtonText: {
      type: String,
      default: '取 消',
      required: false,
      desc: '左侧按钮文案',
    },
    buttonText: {
      type: String,
      default: '确认兑换',
      required: false,
      desc: '右侧按钮文案',
    },
    disablePhoneInput: {
      type: Boolean,
      default: false,
      required: false,
      desc: '是否禁用手机号输入框',
    },

  },
  methods: {
    closeDialog() {
      this.$emit('clickCloseButton');
      this.$emit('update:show', false);
    },
    onClickButton() {
      this.$emit('clickButton');
    },
    onClickProtocol() {
      this.$emit('clickProtocol');
    },
    onClickUserProtocol(protocol = {}) {
      this.$emit('clickUserProtocol', protocol);
    },
    onClickGetCode() {
      this.$emit('clickGetCodeButton');
    },
    onClickModifyButton() {
      this.$emit('clickModifyButton');
    },
    changeIsAgreeProtocol(checked) {
      this.$emit('changeIsAgreeProtocol', checked);
      this.$emit('update:isAgreeProtocol', checked);
    },
    changePhone(e) {
      this.$emit('update:phone', e.target.value);
    },
    changeCode(e) {
      this.$emit('update:code', e.target.value);
    },
    getActClass(...args) {
      return getActClass(this.useTipClass, args);
    },
  },
};
</script>
<style scoped lang="scss">
// body:not(.press-act-input-phone-dialog--hidden) {
//   @import "./css/pvp-vertical.scss";
// }
.press__dialog {
  box-sizing: border-box;
}
</style>
<style scoped lang="scss" src="@TIP_STYLE_NAME"></style>
<style scoped lang="scss" src="./css/base.scss"></style>
