<script lang="ts">
  import "iconify-icon";

  export let buttonName: string = "";
  export let iconName: any = "";
  export let selected: boolean = false;
  export let selectedItem: string = "Dashboard";
  $: selected = buttonName === selectedItem;
</script>

<button value={buttonName} class="sidebar-button-holder flex items-center w-full gap-5 py-3 px-3 text-white rounded-lg transition-all" class:selected on:click>
  <iconify-icon icon={iconName} class={`sidebar-button scale-[1.4]`} />
  {buttonName}
</button>

<style>
  .selected {
    background-color: white;
    color: #445569;
  }
</style>
