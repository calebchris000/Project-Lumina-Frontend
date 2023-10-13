<script lang="ts">
  import "iconify-icon";
  export let isLightMode: boolean = true;
const handleClick = () => {
  isLightMode = !isLightMode
}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={handleClick}>
  {#if isLightMode}
    <iconify-icon class="dark-light-mode" icon="tabler:sun-filled" />
  {:else}
    <iconify-icon class="dark-light-mode" icon="ph:moon-fill" />
  {/if}
</div>

<style>
  .dark-light-mode {
    transform: scale(1.6);
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer
  }
</style>
