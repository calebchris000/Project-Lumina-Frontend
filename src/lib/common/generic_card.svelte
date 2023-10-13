<script lang="ts">
  import { onDestroy } from "svelte";
  import { globalStore } from "./../../global_store";
  export let clickable: boolean = false;
  export let style: string = "";
  let darkmode: boolean = false;
  let unsubscribe = globalStore.subscribe((value) => (darkmode = value['isDarkMode']));
  onDestroy(unsubscribe);
</script>

<section {style} class="card_generic" class:clickable class:darkmode>
  <slot />
</section>

<style>
  .card_generic {
    user-select: none;
    background-color: #ffffff;
    padding: 18px 1rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    border: 2px solid #00000000;
    transition: all 0.3s ease;
  }

  .clickable:hover {
    border: 2px solid #445569;
    cursor: pointer;
  }

  .darkmode {
    background-color: #00273f;
    color: white
  }
</style>
