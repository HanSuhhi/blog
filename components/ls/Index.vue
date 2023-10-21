<script lang="ts" setup>
const { showingCapabilities } = await useCapability();
</script>

<template>
  <div class="ls">
    <template v-for="{ capability_name, capabilities } of showingCapabilities" :key="capability_name">
      <div class="ls-body mb-large">
        <div class="ls-title flex-center mt-bm">
          <p class="p-reset ls-title_txt">
            >  ls ~/capabilities/{{ capability_name }} -alR
          </p>
          <ls-legend />
        </div>
        <p class="p-reset ls-total mt-bm">
          total {{ capabilities.length }}
          <span class="ml-small">
            ʕ•̫͡•ོʔ
          </span>
        </p>
        <ls-list :capabilities="capabilities" class="mb-bm" />
      </div>
    </template>
  </div>
</template>

<style scoped>
@layer comp {
  .ls {
    --_line-height: 20px;
    --_font-size: var(--font-body-small);
    --_learning-theme: var(--blue-bright-1);
    --_rusty-theme: var(--red-bright-2);

    .ls-title {
      justify-content: space-between;
    }

    .ls-total {
      font-size: var(--_font-size);
      line-height: var(--_line-height);
    }
  }
}
</style>
