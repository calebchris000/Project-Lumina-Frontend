<script lang="ts">
  import InfoCard from "$components/InfoCard.svelte";
  import AdmissionYearly from "./Admission/Yearly/AdmissionYearly.svelte";
  import { store } from "src/store/store";

  let selected: string = "Yearly";

  $: selected = $store.admission.option.selected;
</script>

<InfoCard className=" col-[1/-2] w-auto">
  <div class="flex items-center justify-between">
    <h3 class="text-[#445569] font-medium">Admission Overview</h3>
    <select class="text-xs text-[#445569] rounded-sm px-2 font-medium bg-[#f1f4fa]">
      <option value="">Yearly</option>
      <option value="">Weekly</option>
      <option value="">Monthly</option>
    </select>
  </div>

  {#if selected === "Yearly"}
    <AdmissionYearly />
  {/if}
</InfoCard>
