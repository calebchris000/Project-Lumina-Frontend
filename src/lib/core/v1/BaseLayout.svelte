<script lang="ts">
  export let classes: string = ""
</script>

<main class={`w-full rounded-xl flex flex-col ${classes}`}>
  <slot />
</main>