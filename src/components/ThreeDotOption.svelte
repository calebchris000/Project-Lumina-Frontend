<script lang="ts">
  import "iconify-icon";

  export let clicked: boolean = false;

  export const options = [
    ["Add Student", "/v1/students"],
    ["Remove Student", "/v1/students"],
  ];
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="scale-[1.5] flex items-center w-fit cursor-pointer" on:click|self={() => (clicked = !clicked)}>
  <iconify-icon class="scale-[1.2] text-[#445569]" icon="material-symbols:more-horiz" on:click|self={() => (clicked = !clicked)}/>

  <div class:clicked class="absolute bg-[#b2b2b9] font-medium flex flex-col w-32 right-0 py-1 top-5 rounded-md invisible">
    {#each options as option}
      <p class="text-[0.6rem] p-2 hover:bg-[#445569] hover:text-white">{option[0]}</p>
    {/each}
  </div>
</div>

<style>
  .clicked {
    visibility: visible;
  }
</style>
