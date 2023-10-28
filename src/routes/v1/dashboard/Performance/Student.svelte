<script lang="ts">
  import image from "$lib/assets/image.png";
  export let name: string = "Caleb Nwaizu";
  export let studentID: string = "ST39473029";
  export let grade: string = "7th";
  export let rank: number = 88.3;
</script>

<section class="flex w-full gap-2 items-center">
  <div class="w-[10%]">
    <img class="w-8 rounded-full" src={image} alt="" />
  </div>
  <p class="text-xs font-medium w-[30%] text-[#445569]">{name}</p>
  <p class="text-xs font-medium w-[20%] text-[#bebebe]">{studentID}</p>
  <p class="text-xs font-medium w-[20%] text-[#445569]">{grade} grade</p>

  <div class="w-[20%] flex flex-col gap-1">
    <p class="text-xs font-medium text-[#0010a0]">{rank}%</p>

    <div class="bg-gray-200 w-full h-[0.2rem] rounded-md overflow-hidden flex z-20 items-center justify-start">
      <div style="width: {rank}%;" class="bg-[#0010a0] transition-all h-full z-[1] rounded-md" />
    </div>
  </div>
</section>
