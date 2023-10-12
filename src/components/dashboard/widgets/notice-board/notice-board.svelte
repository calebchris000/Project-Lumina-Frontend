<script lang="ts">
  import MoreOptions from "$lib/common/more-options/more-options.svelte";
  import NotificationConstructor from "./notification-constructor.svelte";

  export let selectedFilter: string = "All";
  const handleClick = (e) => {
    selectedFilter = e.target.textContent;
  };
</script>

<section style="grid-area: notice_board;" class="notice-board">
  <i
    ><p>Notice Board</p>
    <MoreOptions /></i
  >

  <div class="notice-filter-holder">
    <button class={`${selectedFilter === "All" && "selected"}`} on:click={handleClick}>All</button>
    <button class={`${selectedFilter === "Exam" && "selected"}`} on:click={handleClick}>Exam</button>
    <button class={`${selectedFilter === "Report" && "selected-report"}`} on:click={handleClick}>Report</button>
    <button class={`${selectedFilter === "Fees" && "selected"}`} on:click={handleClick}>Fees</button>
  </div>

  <div class="notification-holder">
    <NotificationConstructor />
    <NotificationConstructor />
    <NotificationConstructor />
    <NotificationConstructor />
    <NotificationConstructor />
    <NotificationConstructor />
    <NotificationConstructor />
    <NotificationConstructor />
  </div>
</section>

<style>
  .notice-board {
    user-select: none;
    background-color: #ffffff;
    padding: 1.2rem 1.4rem;
    border-radius: 10px;
    transition: all 0.3s ease;
    /* overflow: hidden; */
    overflow-y: scroll;
    height: 300px;
    position: relative;
    grid-area: totality;
  }
  i {
    display: inline;
    font-style: normal;
    align-items: center;
  }

  i p {
    font-weight: 500;
  }
  .notice-board::-webkit-scrollbar {
    /* opacity: 0; */
    display: none;
  }

  .notice-board::-moz-placeholder {
    display: none;
    opacity: 0;
  }
  .notice-filter-holder {
    display: flex;
    gap: 1rem;
    /* margin-top: 0.875rem; */
    position: sticky;
    top: -20px;
    width: 100%;
    padding: 0.875rem 0;
    background-color: white;
    z-index: 99;
  }

  .notification-holder {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .notice-filter-holder button {
    border: 2px solid #e6e6e6;
    border: none;
    border-radius: 5px;
    color: #445569;
    padding: 0.2rem 0.6rem;
    cursor: pointer;
    font-weight: 500;
    transition: all 100ms ease;
  }
  .notice-filter-holder button:nth-child(3) {
    border: 2px solid #f7916c;
    color: #f7916c;
  }

  .selected {
    background-color: #445569;
    color: #ffffff !important;
  }

  .selected-report {
    background-color: #f7916c;
    color: #ffffff !important;
  }
</style>
