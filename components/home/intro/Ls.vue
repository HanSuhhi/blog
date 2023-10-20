<template>
  <section class="intro-ls">
    <p class="intro-ls_title p-reset ">
      <span class="intro-ls_left">👉 ~</span>
      <span class="intro-ls_title mr-small ml-large">cat ~/Readme.md</span>
      <span class="intro-ls_caret" />
    </p>
    <h1 class="intro-ls_name h-reset my-small relative">
      小右 Don / Filine
      <!-- <svg width="32" height="32" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_238_1230)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M100 50C100 22.3858 77.6142 5.5782e-06 50 0C50 27.6102 72.3792 49.9935 99.9879 50C72.3792 50.0065 50 72.3898 50 100C50 72.3858 27.6142 50 0 50C2.18557e-06 77.6142 22.3858 100 50 100C22.3858 100 6.55671e-06 122.386 2.18557e-06 150C27.6096 150 49.9925 127.622 50 100.014C50.0075 127.622 72.3904 150 100 150C72.3858 150 50 172.386 50 200C77.6142 200 100 177.614 100 150C127.614 150 150 127.614 150 100C150 127.614 172.386 150 200 150C200 122.386 177.614 100 150 100C150 72.3858 127.614 50 100 50ZM150 2.18557e-06C122.386 2.18557e-06 100 22.3858 100 50C127.614 50 150 27.6142 150 2.18557e-06ZM150 200C122.386 200 100 177.614 100 150C127.614 150 150 172.386 150 200ZM200 50C200 77.6142 177.614 100 150 100C150 72.3858 172.386 50 200 50Z" fill="url(#paint0_linear_238_1230)" /> </g> <defs> <linearGradient id="paint0_linear_238_1230" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7" /> <stop offset="1" stop-color="#FFDBB0" /> </linearGradient> <clipPath id="clip0_238_1230"> <rect width="200" height="200" fill="white" /> </clipPath> </defs> </svg> -->
      <img class="intro-ls_badge absolute" src="~/assets/images/badge.png" alt="" srcset="">
    </h1>
    <ls class="intro-ls_list" />
  </section>
</template>

<style scoped>
@layer page {
  .intro-ls {
    --_padding-left: var(--base-margin);
    --_title-height: 30px;
    --_name-height: 56px;

    height: var(--_ls-height);
    padding-left: var(--base-margin);
    border-left: var(--border);
    border-left-color: var(--_border-color);

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
      --_title-size: 40px;

      width: fit-content;

      font-size: var(--_title-size);
      font-weight: bold;
      line-height: var(--_name-height);
      word-break: keep-all;
      white-space: nowrap;

      .intro-ls_badge {
        --_badge-scale: 0.4;
        --_badge-top: -137%;
        --_badge-right: -25%;

        top: var(--_badge-top);
        right: var(--_badge-right);
        zoom: var(--_badge-scale);
        display: inline-block;
      }
    }

    .intro-ls_list {
      --_leave-blank: var(--base-margin);

      overflow-y: auto;
      height: calc(100% - var(--_title-height) - var(--_name-height) - var(--_leave-blank));

      &::-webkit-scrollbar {
        display: none;
      }
    }

  }
}
</style>
