<script lang="ts">
  import MoreOptions from "$lib/common/more-options/more-options.svelte";
  import Chart from "svelte-frappe-charts";
  const data: {} = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],

    datasets: [{ name: "Attendance", type: "bar", values: [1200, 3223, 1832, 2196, 2637, 1927, 2089, 1203, 1233] }],
  };

</script>

<section style="grid-area: graph;" class="graph_holder">
  <p class="text-sm">Attendance (Weekly)</p>
  <MoreOptions />
  <Chart {data} isNavigable />

</section>

<style>
  .graph_holder {
    user-select: none;
    background-color: #ffffff;
    padding: 1.2rem 1rem;
    border-radius: 10px;
    /* width: 100%; */
    transition: all 0.3s ease;
    position: relative;
  }
  p {
    font-weight: 600
  }
</style>
