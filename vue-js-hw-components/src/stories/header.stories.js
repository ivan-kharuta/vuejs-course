/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MainHeader from "../components/MainHeader.vue";

storiesOf("Header", module)
  .add("Without text", () => ({
    components: { MainHeader },
    template: '<main-header @click="action"></main-header>'
  }));