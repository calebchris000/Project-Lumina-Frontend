<script>
  import InfoCard from "$components/InfoCard.svelte";


  import AdmissionGraph from "./GraphService/AdmissionGraph.svelte";
  import Label from "./Performance/Label.svelte";
  import Option from "./Performance/Option.svelte";
  import Student from "./Performance/Student.svelte";

</script>



<section class="flex flex-col flex-1 gap-5 justify-start">
    <AdmissionGraph />

   <section class="flex gap-5">
    <InfoCard className="w-full flex-1 basis-[60%]">
      <h3 class="text-[#445569] font-medium">Top Performers</h3>
      <Option />
      <Label />
      <Student />
      <Student name="Mark Rober" grade="8th" rank={71.6}/>
    </InfoCard>

    <InfoCard className="w-full flex-1 basis-[30%]">
      <h3 class="text-[#445569] font-medium">Students</h3>
    </InfoCard>
   </section>
  </section>