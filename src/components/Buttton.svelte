<script lang="ts">
  export let textContent = "Submit";
  export let className = "";

  import { store } from "src/store/store";

let darkMode: boolean = false;

store.subscribe((defaults) => {
  darkMode = defaults.theme.darkMode;
});
</script>

<button class:darkMode class={`block w-fit p-2 px-4 bg-[#445569] rounded-lg text-white ${className}`}>
  {textContent}
</button>

<style>
  .darkMode {
    background-color: #fff;

    transition: all 200ms ease;
    color: #28353f;
  }

</style>
