<template>
  <ul class="resume-legend ul-reset flex-row-start">
    <template v-for="legend_name, index of useCapabilityTheme()" :key="index">
      <li class="resume-legend_block flex-center mr-bs">
        <div :data-type="legend_name" class="resume-legend_theme mr-small pseudo-after" />
        <span class="resume-legend_text">{{ legend_name }}</span>
      </li>
    </template>
  </ul>
</template>

<style scoped>
@layer comp {
  .resume-legend {
    --_margin-left: calc(2 * var(--large));

    flex: 1;
    justify-content: flex-start;
    margin-left: var(--_margin-left);

    .resume-legend_block {
      --_color: var(--main-color);

      .resume-legend_theme {
        --_width: 20px;
        --_height: 8px;
        --_border-color: hsl(0deg 0% 100% / 90%);

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
