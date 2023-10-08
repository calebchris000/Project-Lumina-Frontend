<script>
  import LogoSection from "./LogoSection.svelte";
  import Option from "./Option.svelte";
  import { selected_option } from "./sidebar_store";
  let DashboardOptions = ["Dashboard", "Students", "Teachers", "Attendance", "Report Cards"];
  let payload = 'Dashboard';
  const handleSelected = (e) => {
    const key = e.detail
    payload = key
    selected_option.set(payload)
  };

</script>

<nav class="sidebar_container">
  <LogoSection />
  <div class="option_holder">
    {#each DashboardOptions as option}
      <Option {option} {payload} on:clicked={handleSelected} />
    {/each}
  </div>
</nav>

<style>
  .sidebar_container {
    background-color: #445569;
    color: white;
    width: 20%;
    padding: 1rem;
    font-family: sans-serif;
    border-radius: 18px;
    position: fixed;
    top: 0;
    bottom: 0;
    margin: 2rem 0;
  }

  .option_holder {
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    user-select: none;
  }
</style>
