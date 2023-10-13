<script lang="ts">
  import UserProfile from "./user-profile.svelte";

  import DarkLightMode from "./toggle-dark-light.svelte";
  import user from "$lib/assets/image.png";
  import Notifications from "./notifications.svelte";

  import GenericCard from "$lib/common/generic_card.svelte";
  import "iconify-icon";
  export let title = "Dashboard";
  export let searchString: string = "";
  export let label: string = 'topbar'
</script>

<!-- <nav style={`grid-area: ${label}`} class="topbar"> -->
  <GenericCard style={`justify-content:space-between; gap: 1rem; flex-wrap: wrap; grid-area: ${label};`}>
    <h2 class="dashboard_title text-xl">{title}</h2>

    <input class="topbar-search text-xs" type="text" placeholder="Search Student, Teacher, ID, e.t.c" bind:value={searchString} />
    <div class="dashboard-profile">
      <Notifications />
      <DarkLightMode />
      <UserProfile />
    </div>
  </GenericCard>
<!-- </nav> -->

<style>
  .dashboard_title {
    font-weight: 600;
    flex: 1 1 2%;
  }
  .dashboard-profile {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1 1 5%;
    max-width: 15rem;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .topbar-search {
    border: 2px solid #44556942;
    padding: 0 1rem;
    height: 2.2rem;
    outline: none;
    border-radius: 8px;
    width: auto;
    flex: 1 1 50%;
    transition: border 0.3s ease;
    color: #445569;
  }

  .topbar-search:focus {
    outline: none;
    border-color: #445569;
  }

  .topbar-search::placeholder {
    color: #a8a8a8;
  }

  @media screen and (max-width: 1024px) {
    .topbar-search {
        flex: 1 1 30%;
        height: 2rem;
    }

    .dashboard_title {
        flex: 1 1 10%
    }
    .dashboard-profile {
        flex: 1 1 30%;
    }
  }

  @media (min-width: 1025px) {
    .dashboard-profile {
        flex: 1 1 3%
    }
  }
</style>
