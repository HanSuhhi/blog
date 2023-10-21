<template>
  <section class="intro-ls">
    <p class="intro-ls_title p-reset ">
      <span class="intro-ls_left">👉 ~</span>
      <span class="mr-small ml-large">cat ~/Readme.md</span>
      <span class="intro-ls_caret" />
    </p>
    <h1 class="intro-ls_name h-reset my-bm  relative">
      小右
      <span class="intro-ls_en">Don</span>
      / Filine
      <img class="intro-ls_badge absolute" src="~/assets/images/badge.png" alt="" srcset="">
    </h1>
    <ls class="intro-ls_list" />
  </section>
</template>

<style scoped>
@layer page {
  .intro-ls {
    --_padding-left: var(--base-space);
    --_title-height: 30px;
    --_name-height: 56px;

    padding-left: var(--base-space);

    .intro-ls_title {
      display: flex;
      align-items: center;
      line-height: var(--_title-height);

      .intro-ls_left {
        font-size: 22px;
        font-weight: bolder;
      }

      .intro-ls_caret {
        --_caret-width: 7px;
        --_caret-height: 24px;
        --_caret-color: var(--white);

        width: var(--_caret-width);
        height: var(--_caret-height);
        background-color: var(--_caret-color);
      }
    }

    .intro-ls_name {
      --_title-size: 54px;

      width: fit-content;

      font-size: var(--_title-size);
      font-weight: bold;
      line-height: var(--_name-height);
      word-break: keep-all;
      white-space: nowrap;
      margin-bottom: var(--large);

      .intro-ls_badge {
        --_badge-scale: 0.4;
        --_badge-top: -137%;
        --_badge-right: -25%;

        top: var(--_badge-top);
        right: var(--_badge-right);
        zoom: var(--_badge-scale);
        display: inline-block;
      }
      .intro-ls_en {
        text-decoration: underline;
        text-decoration-style: wavy;
      }
    }

    .intro-ls_list {
      --_leave-blank: var(--base-space);
    }

  }
}
</style>
