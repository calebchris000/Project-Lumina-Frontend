<script lang="ts">
  import "iconify-icon";
  import { page } from "$app/stores";
  import InfoCard from "$components/InfoCard.svelte";
  import OptionTabs from "../OptionTabs.svelte";
  import ThreeDotOption from "$components/ThreeDotOption.svelte";
  import { onMount } from "svelte";
  let clickedFilter: string = "Year";
  import Graph from "../Graph.svelte";
  import ScoreOption from "./ScoreOption.svelte";

  onMount(async () => {
    await import("apexcharts").then((module) => {
      const ApexCharts = module.default;

      var options = {
        chart: {
          type: "bar",
          fontFamily: "Poppins, san-serif",
          // width: 30
        },
        series: [
          {
            name: "Exam",
            data: [108, 99, 65, 65],
          },
        ],

        xaxis: {
          categories: ["1st Term", "2nd Term", "3rd Term", "4th Term"],
        },
        yaxis: {
          title: {
            text: "Score",
          },
        },
        colors: ["#037e03", "#848484"],
      };

      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
    });
  });

  let selectedOption: number = 0;

  function handleSelectedOption(e) {
    selectedOption = e.detail.index;
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<InfoCard className="mt-16">
  <ScoreOption on:currentIndex={handleSelectedOption} />
  <section class="flex items-center justify-between">
    <section class="flex items-center justify-between flex-1 mr-10 gap-10">
      <h3 class="text-[#445569]">Attendance</h3>

      <div class="flex gap-3 items-center text-[#445569]">
        <p class="cursor-pointer m-0 p-0 text-sm font-medium" on:click={() => (clickedFilter = "Year")} class:current={clickedFilter == "Year"}>Year</p>
        |
        <p class="cursor-pointer m-0 p-0 text-sm font-medium" on:click={() => (clickedFilter = "Monthly")} class:current={clickedFilter == "Monthly"}>
          Monthly
        </p>
        |
        <p class="cursor-pointer m-0 p-0 text-sm font-medium" on:click={() => (clickedFilter = "Weekly")} class:current={clickedFilter == "Weekly"}>Weekly</p>
        |
      </div>
    </section>
    <ThreeDotOption />
  </section>
  <div class="chart" id="chart" />
</InfoCard>

<style>
  .current {
    background-color: #445569;
    border-radius: 0.4rem;
    padding: 0.1rem 0.4rem;
    color: white;
    font-size: 0.875rem;
  }

  .chart {
    font-family: "Poppins", sans-serif;
  }
</style>
