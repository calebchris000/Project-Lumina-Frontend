<script lang="ts">
  import "$lib/app.css";
  import Button from "./Button.svelte";
  import Logo from "./Logo.svelte";
  let selectedItem: string = "Dashboard";
  function handleClick(e: any) {
    selectedItem = e.target.value;
  }
</script>

<nav class="sidebar bg-[#445569] w-60 border overflow-y-scroll flex flex-col border-[#445569] h-[96vh] rounded-xl p-3 ml-4 absolute top-[50%] translate-y-[-50%]">
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

</style>
