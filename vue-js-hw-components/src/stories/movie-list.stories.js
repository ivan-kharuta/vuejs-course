/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MovieList from "../components/MovieList.vue";

storiesOf("Movie list", module)
  .add("Default", () => ({
    components: { MovieList },
    template: '<movie-list @click="action"></movie-list>'
  }));