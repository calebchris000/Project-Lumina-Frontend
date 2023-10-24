<script lang="ts">
  import { goto } from "$app/navigation";
  import "$lib/app.css";
  import Button from "./Button.svelte";
  import Logo from "./Logo.svelte";
  import { store } from "src/store/store";

  let darkMode: boolean = false;
  let selectedItem: string;
  store.subscribe((defaults) => {
    darkMode = defaults.theme.darkMode;
    selectedItem = defaults.sidebar.selectedTab
  });
  
  function handleClick(e: any) {
   let selectedItem = e.target.value;
    store.update(defaults => {
      defaults.sidebar.selectedTab = selectedItem
      return defaults
    })
    goto("/v1/" + selectedItem.toLowerCase());
  }

  $: console.log($store.sidebar.selectedTab)
</script>

<nav class:darkMode class="sidebar bg-[#445569] w-60 border overflow-y-scroll flex flex-col border-[#445569] rounded-xl p-3">
  <section>
    <Logo />

    <div class="flex flex-col relative top-5 gap-2">
      <Button on:click={handleClick} {selectedItem} buttonName="Dashboard" iconName="mingcute:grid-2-line" />
      <Button on:click={handleClick} {selectedItem} buttonName="Students" iconName="ph:student-bold" />
      <Button on:click={handleClick} {selectedItem} buttonName="Teachers" iconName="ph:chalkboard-teacher-duotone" />
      <Button on:click={handleClick} {selectedItem} buttonName="Staff Hub" iconName="bx:briefcase" />
      <Button on:click={handleClick} {selectedItem} buttonName="Courses" iconName="mdi:book-open" />
      <Button on:click={handleClick} {selectedItem} buttonName="Exams" iconName="ph:exam" />
    </div>
  </section>
  <div class="flex flex-col mt-auto pt-10 gap-2">
    <Button buttonName="Settings" {selectedItem} iconName="material-symbols:settings-outline-rounded" on:click={handleClick} />
    <Button buttonName="Account" {selectedItem} iconName="material-symbols:account-circle-full" on:click={handleClick} />
  </div>
</nav>

<style>
  .sidebar {
    scrollbar-width: none;
  }

  .darkMode {
    background-color: #28353f;

    transition: all 200ms ease;
    color: white;
    border-color: #00000000;
  }
</style>
