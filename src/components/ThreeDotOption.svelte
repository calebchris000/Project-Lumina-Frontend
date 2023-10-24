<script lang="ts">
  import { goto } from "$app/navigation";
  import "iconify-icon";
  import { store } from "src/store/store";
  import { onDestroy } from "svelte";
  let darkMode: boolean = false;

  const unsubscribe = store.subscribe((defaults) => {
    darkMode = defaults.theme.darkMode;
  });

  onDestroy(unsubscribe)
  export let clicked: boolean = false;

  export let options = [
    ["Add Student", "/v1/students/new"],
    ["Remove Student", "/v1/students"],
  ];

  function handleLinkedTo(url: string) {
    goto(url);
    clicked = false;
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class:darkMode class="scale-[1.5] flex items-center w-fit cursor-pointer z-50" on:click|self={() => (clicked = !clicked)}>
  <iconify-icon class="scale-[1.2] text-[#445569]" icon="material-symbols:more-horiz" on:click|self={() => (clicked = !clicked)} />

  <div class:clicked class="absolute bg-[#b2b2b9] font-medium flex flex-col w-32 right-0 py-1 top-5 rounded-sm invisible">
    {#each options as option}
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <button class="text-[0.6rem] p-2 hover:bg-[#445569] hover:text-white text-left" on:click={() => handleLinkedTo(option[1])}>{option[0]}</button>
    {/each}
  </div>
</div>

<style>
  .clicked {
    visibility: visible;
  }

  .darkMode * {
    color: white;
  }

  .darkMode div {
    background-color: #101519;
  }

  .darkMode button {
    background-color: #101519;
  }

  .darkMode button:hover {
    background-color: #28353f;
  }

</style>
