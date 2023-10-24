<script lang="ts">
	import AttendanceYearly from './AttendanceYearly';
  import { onMount } from "svelte";
  import { store } from 'src/store/store';
  onMount(async () => {
    await AttendanceYearly(2023)
    let AttendanceData: {} = $store.graph.attendance.class.yearly;
    const emptyData: number[] = [0,0,0,0,0,0,0,0,0,0,0,0]
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
            data: typeof AttendanceData === 'object' ? Object.values(AttendanceData) : emptyData
          }
          // ,
          // {
          //   name: "Absent",
          //   data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          // },
        ],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
        },
        yaxis: {
          title: {
            text: "Present counts (Monthly)",
          },
        },
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    });
  });


</script>

<div class="chart" id="chart" />
