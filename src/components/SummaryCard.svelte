<script lang="ts">
  export let icon: string = "";
  export let title: string = "Students";
  export let data: number = 0;
  export let total: number | string = 0
  export let singleNumber: boolean = false
</script>

<div class="bg-white p-4 px-6 rounded-xl flex-1 flex items-center gap-8 text-[#445569]">
  <iconify-icon {icon} class="scale-[1.8]"/>
  <div>
    <p class="text-md">{title}</p>
    {#if singleNumber}
    <p class="text-xl font-[500]">{total}</p>
    {:else}
    <p class="text-xl font-[500]">{data ? data : 0} | {total}</p>
    {/if}
  </div>
</div>
