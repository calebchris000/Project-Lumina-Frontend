<script lang="ts">
  import AttendanceWeekly from "./AttendanceWeekly";
  import { onMount } from "svelte";

  onMount(async () => {
    const AttendanceData = await AttendanceWeekly(2023);
    let validData: boolean = typeof AttendanceData === "object";
    // const emptyData: number[]
    await import("apexcharts").then((module) => {
      const ApexCharts = module.default;

      var options = {
        chart: {
          type: "bar",
          fontFamily: "Poppins, san-serif",
        },
        series: [
          {
            name: "Present",
            data: validData ? Object.values(AttendanceData) : [0, 0, 0, 0, 0],
          },
          // ,
          // {
          //   name: "Absent",
          //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          // },
        ],
        xaxis: {
          categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'],
        },
        yaxis: {
          title: {
            text: "Present counts",
          },
        },
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    });
  });
</script>

<div class="chart" id="chart" />
