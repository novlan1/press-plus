<template>
  <div class="demo-wrap">
    <PressLivePlayer
      :video-src="videoSrc"
      :retry-timeout="retryTimeout"
      :error-message="errorMessage"
      :show-go-other-match="showGoOtherMatch"
      :multi-resolution="multiResolution"
      @goOtherMatch="goOtherMatch"
      @clickFeedbackIcon="clickFeedbackIcon"
      @playStatusChange="playStatusChange"
      @fullScreenChange="fullScreenChange"
      @playError="playError"
    />

    <demo-block
      title="Mock Data"
    >
      <div class="input__wrap">
        <PressField
          v-model="inputValue"
          type="textarea"
          :autosize="autosize"
          placeholder="请输入直播地址"
        />
        <div class="input__buttons">
          <PressButton
            size="small"
            custom-style="margin-left: 0; margin-right: 8px"
            @click="onClearInput"
          >
            清空
          </PressButton>
          <PressButton
            type="primary"
            custom-style="margin: 0;"
            size="small"
            @click="onConfirmInput"
          >
            确定
          </PressButton>
        </div>
      </div>
    </demo-block>
  </div>
</template>
<script>
import PressLivePlayer from 'src/packages/press-live-player/press-live-player.vue';
import PressField from 'press-ui/press-field/press-field.vue';
import PressButton from 'press-ui/press-button/press-button.vue';

const MOCK_VIDEO_SRC = 'webrtc://stationlivestream.nes.smoba.qq.com/live/formal_152503299_409787_1701247524_tes1tzm?txSecret=59e65185ffdcb66df61b280fd3c301a0&txTime=65673265';
// 'webrtc://stationlivestream.nes.smoba.qq.com/live/formal_51840002_415220_1701246816_tes1tzm?txSecret=1d73bcf1db6ee3b8e5f1dc8064db3458&txTime=65672FA1';
const MOCK_VIDEO_SRC_2 = 'https://1500005692.vod2.myqcloud.com/43843706vodtranscq1500005692/62656d94387702300542496289/v.f100240.m3u8';


export default {
  components: {
    PressLivePlayer,
    PressField,
    PressButton,
  },
  data() {
    return {
      videoSrc: MOCK_VIDEO_SRC,
      retryTimeout: 5,
      errorMessage: '',
      showGoOtherMatch: true,

      inputValue: MOCK_VIDEO_SRC,
      autosize: { maxHeight: 600, minHeight: 50 },

      multiResolution: {
        sources: {
          SD: [{
            src: MOCK_VIDEO_SRC,
          }],
          HD: [{
            src: MOCK_VIDEO_SRC_2,
          }],
          FHD: [{
            src: MOCK_VIDEO_SRC,
          }],
        },
        // 配置每个清晰度标签
        labels: {
          SD: '标清', HD: '高清', FHD: '超清',
        },
        // 配置各清晰度在播放器组件上的顺序
        showOrder: ['SD', 'HD', 'FHD'],
        // 配置默认选中的清晰度
        defaultRes: 'SD',
      },
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.errorMessage = '直播失败';
    // });
  },
  methods: {
    onClearInput() {
      this.inputValue = '';
    },
    onConfirmInput() {
      const { inputValue } = this;
      this.videoSrc = inputValue;
    },
    fullScreenChange(status) {
      this.onGTip(`[fullScreenChange] ${status}`);
    },
    playStatusChange(status) {
      this.onGTip(`[playStatusChange] ${status}`);
    },
    playError() {
      this.onGTip('[playError]');
    },
    goOtherMatch() {
      this.onGTip('[goOtherMatch]');
    },
    clickFeedbackIcon() {
      this.onGTip('[clickFeedbackIcon]');
    },
  },
};
</script>
<style scoped lang="scss">
.input__buttons {
  padding-top: 12px;
  display: flex;
  justify-content: flex-end;
}
</style>
