/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import FilterBar from "../components/FilterBar.vue";

storiesOf("Filters", module)
  .add("Default", () => ({
    components: { FilterBar },
    template: '<filter-bar @click="action"></filter-bar>'
  }));