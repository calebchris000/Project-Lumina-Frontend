<script lang="ts">
  import "iconify-icon";

  import { store } from "src/store/store";
  export let buttonName: string = "";
  export let iconName: any = "";
  export let selected: boolean = false;
  export let selectedItem: string = "Dashboard";
  let darkMode: boolean = false;
  store.subscribe((defaults) => {
    darkMode = defaults.theme.darkMode;
  });
  $: selected = buttonName === selectedItem;
</script>

<button class:darkMode value={buttonName} class="flex items-center w-full gap-5 py-3 px-3 text-white rounded-lg transition-all" class:selected on:click>
  <iconify-icon icon={iconName} class={`scale-[1.4]`} />
  {buttonName}
</button>

<style>
  .selected {
    background-color: white;
    color: #445569;
  }
  
  .darkMode * {
    /* background-color: #28353f; */
    /* color: #28353f ; */
  }
</style>
