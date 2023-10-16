<script lang="ts">
  import { goto } from "$app/navigation";

  export let img_url: string = "";
  export let name: string = "";
  export let student_id: string = "";
  export let year: number = 2023;
  import { studentStore } from "./studentStore";
  const linkToPage = () => {
    goto(`/v1/students/${student_id}`)
    studentStore.update(item => {
      item.current_img = img_url
      return item
    })
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={linkToPage} class="flex justify-between gap-5 items-center cursor-pointer border-b-2 border-[#ebebeb] pb-5 text-[#445569] font-medium">
  <div class="flex items-center">
    <img class="w-8 rounded-full" src={img_url} alt="" />
  </div>
  <div class="flex-1">
    <p class="text-xs">{name}</p>
  </div>
  <p class="flex-1 text-xs">{student_id}</p>
  <p class="text-xs">{year}</p>
</div>
