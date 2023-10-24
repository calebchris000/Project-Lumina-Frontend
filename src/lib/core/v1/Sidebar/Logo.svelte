<script lang="ts">
  import logo from "$lib/assets/logo.png";
  import "$lib/app.css"

  import { store } from "src/store/store";

  let darkMode: boolean = false;

  store.subscribe((defaults) => {
    darkMode = defaults.theme.darkMode;
  });
</script>

<div class:darkMode class="border-b-2 border-[#5d6c7e] sticky top-[1px]  z-[9999] bg-[#445569]">
  <img class="logo w-28 mx-auto my-10" src={logo} alt="school" />
</div>


<style>
  .darkMode {
    background-color: #28353f;

  }
</style>
