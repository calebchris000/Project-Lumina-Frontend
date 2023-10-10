<script lang="ts">
  import NotificationConstructor from "./notification-constructor.svelte";
  //   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  //   export let date = new Date().getDate();
  // let setDate = date[0]
  // let setTime = date[1]
  let body: string = `Happy Teacher's Day! All teaching staffs should report to the hall by 12:00pm.`
</script>

<div class="notification-constructor">
  <p class="date">31 Oct</p>
  <p class="notification-body">{body}</p>
</div>

<style>
  .notification-constructor {
    position: relative;
    display: flex;
    border: 1px solid rgba(0,0,0,0);
    padding: 0.2rem 0.3rem;
    height: 2.4rem;
    border-radius: 8px;
    top: 10px;
    flex-wrap: wrap;
  }
  .date {
    font-size: 0.8rem;
    padding: 0;
    flex: 1 1 20%;
    font-weight: 600;
    /* align-self: center; */
  }
  .notification-body {
    font-size: 0.8rem;
    font-weight: 500;
    flex: 1 1 80%;
    text-wrap: wrap;
  }

</style>
