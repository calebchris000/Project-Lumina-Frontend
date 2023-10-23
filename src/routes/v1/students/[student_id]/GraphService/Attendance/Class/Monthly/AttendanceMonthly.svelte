<script lang="ts">
  import AttendanceMonthly from "./AttendanceMonthly";
  import { onMount } from "svelte";

  onMount(async () => {
    const AttendanceData = await AttendanceMonthly(2023);
    let validData: boolean = typeof AttendanceData === "object";
    // const emptyData: number[]
    await import("apexcharts").then((module) => {
      const ApexCharts = module.default;

      let dynamicXaxis = []

      if(validData) {
        Object.keys(AttendanceData).forEach((item: any) => {
          dynamicXaxis.push(`Week ${item}`)
        });
      }

      var options = {
        chart: {
          type: "bar",
          fontFamily: "Poppins, san-serif",
        },
        series: [
          {
            name: "Present",
            data: validData ? Object.values(AttendanceData) : [0, 0, 0, 0],
          },
          // ,
          // {
          //   name: "Absent",
          //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          // },
        ],
        xaxis: {
          categories: dynamicXaxis,
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
