<script lang="ts">
  import { onMount } from "svelte";

  onMount(async () => {
    await import("apexcharts").then((module) => {
      const ApexCharts = module.default;

      var options = {
        series: [
          {
            name: "Admitted",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 66, 98, 71],
          },
          {
            name: "Expelled",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 77, 91, 82],
          },
        ],
        chart: {
          type: "bar",
          height: 300,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    });
  });
</script>

<div id="chart" />
