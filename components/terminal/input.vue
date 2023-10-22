<script setup lang="ts">
const { hostname } = useRequestURL();
</script>

<template>
  <section class="terminal-input">
    <span class="terminal-input_user">guest@{{ hostname }}</span>
    <span class="terminal-input_domain"> ~/resume</span>
    <span class="terminal-input_symbol"> $ </span>
    <span class="terminal-input_input"><slot /></span>
  </section>
</template>

<style scoped>
@layer comp {
  .terminal-input {
    --_terminal-user-color: var(--green-bright-1);
    --_terminal-domain-color: var(--green-deep-2);
    --_terminal-symbol-color: var(--red-bright-2);

    line-height: var(--_line-height);

    .terminal-input_user {
      color: var(--_terminal-user-color);
    }

    .terminal-input_symbol {
      color: var(--_terminal-symbol-color);
      filter: brightness(.8);

      /* margin: 0 var(--mini); */
    }

    .terminal-input_domain {
      color: var(--_terminal-domain-color);
    }

    .terminal-input_git {
      color: var(--_terminal-git-color);
    }
  }
}
</style>
