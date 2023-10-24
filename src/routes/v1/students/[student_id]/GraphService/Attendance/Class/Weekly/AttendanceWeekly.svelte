<script lang="ts">
  import AttendanceWeekly from "./AttendanceWeekly";
  import { onMount } from "svelte";
  import { store } from "src/store/store";
  import SchoolToCurrentYear from "$lib/shared/SchoolToCurrentYear";

  onMount(async () => {
    let AttendanceData: {} = $store.graph.attendance.class.weekly;
    await AttendanceWeekly(2023, 41);
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
          categories: ["Mon", "Tue", "Wed", "Thur", "Fri"],
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
  const getAllYears = SchoolToCurrentYear(1990)
</script>

<section class="flex gap-2">
  <div>
    <!-- <label for="year">YEAR</label> -->
    <select class="w-fit border border-[#ebebeb] bg-transparent p-1 m-0 font-poppins rounded-md text-sm" name="" id="">
      {#each getAllYears as year (year) }
        <option>{year}</option>
      {/each}
    </select>
  </div>

  <div>
    <input value="41" class="w-16 border border-[#ebebeb] outline-none block text-sm rounded-md p-1" type="number" placeholder="text">
  </div>
</section>

<div class="chart" id="chart" />
