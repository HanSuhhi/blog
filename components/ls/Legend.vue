<template>
  <ul class="ls-legend ul-reset flex-center">
    <template v-for="legend_name, index of useCapabilityTheme()" :key="index">
      <li class="ls-legend_block flex-center mr-bm">
        <div :data-type="legend_name" class="ls-legend_theme mr-small pseudo-after" />
        <span class="ls-legend_text">{{ legend_name }}</span>
      </li>
    </template>
  </ul>
</template>

<style scoped>
@layer comp {
  .ls-legend {
    --_margin-left: calc(2 * var(--large));

    justify-content: flex-start;
    margin-left: var(--_margin-left);
    flex: 1;

    .ls-legend_block {
      --_color: var(--main-color);

      .ls-legend_theme {
        --_width: 20px;
        --_height: 8px;
        --_border-color: hsla(0, 0%, 100%, 0.9);

        width: var(--_width);
        height: var(--_height);
        background-color: var(--_color);
        box-shadow: var(--_bg-color) 2px 1px, var(--border-color) 3px 2px;

        &[data-type="learning"] {
          --_color: var(--_learning-theme);
        }
        &[data-type="rusty"] {
          --_color: var(--_rusty-theme);
        }
      }
    }
  }
}
</style>
