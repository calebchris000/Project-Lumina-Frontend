<script lang="ts">
  import { onMount } from "svelte";

  onMount(async () => {
    await import("apexcharts").then((module) => {
      const ApexCharts = module.default;

      var options = {
        series: [45, 55],
        chart: {
          width: 300,
          type: "donut",
          fontFamily: "Poppins, san-serif",
        },
        dataLabels: {
          style: {
            fontSize: "0.5rem",
          },
        },
        labels: ["Male", "Female"],
        colors: ["#0010a0", "#df0a8b"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      };

      var chart = new ApexCharts(document.querySelector("#pie"), options);
      chart.render();
    });
  });
</script>

<div id="pie" />
