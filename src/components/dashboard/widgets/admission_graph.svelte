<script lang="ts">
  import Chart from "svelte-frappe-charts";

  let data: {} = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    datasets: [
      {
        values: [10, 2, 5, 3, 25, 4, 13, 16],
      },
    ],
  };
</script>

<section style="grid-area: graph;" class="graph_holder">
  <Chart {data} type="line" />
</section>

<style>
  .graph_holder {
    user-select: none;
    background-color: #ffffff;
    padding: 1.2rem 1rem;
    border-radius: 10px;
    /* width: 100%; */
    transition: all 0.3s ease;
    /* height: 60%; */
  }
</style>
