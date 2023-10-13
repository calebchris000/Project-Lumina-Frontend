<script lang="ts">
  import NotificationConstructor from "./notification-constructor.svelte";
  let body: string = `A friendly reminder to read your books!`;
  export let Person: string = "James Wood";

  import { globalStore } from "../../../../global_store";
  import { onDestroy } from "svelte";
  let isDarkMode: boolean = false;
  const unsubscribe = globalStore.subscribe((value) => (isDarkMode = value["isDarkMode"]));
  onDestroy(unsubscribe);
</script>

<div class="notification-constructor" class:isDarkMode>
  <p class="date">23, Oct, 2023</p>
  <p class="notification-body">{body}</p>
  <p class="notice-poster">{Person} |<iconify-icon class="clock" icon="mdi:clock-outline" /> <i>4 min ago</i></p>
</div>

<style>
  .notification-constructor {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid #00000000;
    padding: 0.8rem 0.3rem;
    gap: 4px;
    height: 2.4rem;
    border-radius: 8px;
    top: 10px;
    transition: all 300ms ease;
  }

  .notification-constructor * {
    transition: all 300ms ease;

  }
  .date {
    font-size: 0.75rem;
    border: 2px solid #e6e6e6;
    width: fit-content;
    padding: 0 0.2rem;
    border-radius: 5px;
    background-color: #e6e6e6;
    color: #445569;
    font-weight: 500;
  }

  .isDarkMode .date {
    border-color: #00273f;
    background-color: #00273f;
    color: white;
  }

  .isDarkMode .notification-body {
    color: #d0dff0;
  }

  .isDarkMode .notice-poster {
    color: #b9b9b9;
  }
  .notification-body {
    font-size: 0.75rem;
    font-weight: 500;
    /* flex: 1 1 80%; */
    margin: 0;
    text-wrap: wrap;
  }

  .notice-poster {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 0.65rem;
    font-weight: 500;
  }

  .clock {
    transform: scale(1.1);
    color: #929292;
    font-weight: 600;
  }

  i {
    display: inline;
    font-weight: 600;
    font-style: normal;
    color: #929292;
  }
</style>
