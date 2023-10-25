<script lang="ts">
  export let className: string = ""
  export let scrollable: boolean = true
</script>

<main class={`w-full rounded-xl flex flex-col ${className}`} class:scrollable>
  <slot />
</main>


<style>
  .scrollable {
    overflow-y: scroll;
    scrollbar-width: none;
  }
</style>