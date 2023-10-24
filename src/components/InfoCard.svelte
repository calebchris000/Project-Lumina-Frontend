<script lang="ts">
  export let className: string = "";
  import { store } from "src/store/store";

  let darkMode: boolean = false;

  store.subscribe((defaults) => {
    darkMode = defaults.theme.darkMode;
  });
</script>

<section class:darkMode class={`flex relative flex-col gap-4 bg-white p-4 rounded-xl max-h-full ${className}`}>
  <slot />
</section>

<style>
  .darkMode {
    background-color: #28353f;

    transition: all 200ms ease;
    color: white;
  }

  .darkMode * {
    color: white;
  }
</style>
