<script>
import { updateManager } from 't-comm/lib/mp/update-manager';
import { setLang } from 'src/utils/i18n/i18n';
import { watchMessageFromTop } from 'src/utils/post-message/post-message';
import { getAutoLaunchGameMixin } from './utils/mixin/auto-launch-game';

export default {
  mixins: [
    getAutoLaunchGameMixin(),
  ],
  onLaunch() {
    watchMessageFromTop();
    updateManager();
  },
  watch: {
    $route: {
      handler() {
        setLang();
      },
      immediate: true,
    },
  },
};
</script>


<style lang="scss" src="src/utils/style/demo.scss"></style>
<style lang="scss">
.demo-wrap--gp-iconfont {
  @import "src/utils/style/iconfont-gp.scss";
}
</style>
