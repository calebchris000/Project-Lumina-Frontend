<script lang="ts">
  import "iconify-icon";
  export const title: string = "Dashboard";
  import image from '$lib/assets/image.png'
</script>

<section class="bg-white p-4 py-6 rounded-xl flex gap-10 items-center">
  <h1 class="title text-xl font-semibold text-[#445569]">{title}</h1>
  <input
    class="outline-none p-2 max-w-[90rem] text-[#445569] border-2 w-full rounded-lg border-[#b2b2b9] focus:border-[#445569] transition-all placeholder:text-[#b2b2b9]"
    type="text"
    placeholder="Search Teachers, Students, Subjects..."
  />
  <iconify-icon icon="ph:bell-simple-bold" class="scale-[1.8] text-[#445569]"/>
  <iconify-icon icon="tabler:moon-filled" class="scale-[1.8] text-[#445569]"></iconify-icon>
  <img class="w-10 rounded-full" src={image} alt="user">
</section>
