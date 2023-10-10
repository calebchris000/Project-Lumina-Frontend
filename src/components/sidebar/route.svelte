<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import 'iconify-icon';
  const dispatch = createEventDispatcher();

  export let option: string;
  export let payload: string;

  
  const handleClick = () => {
      dispatch("clicked", option);
    };
</script>

  <button class="option" class:selected={option === payload} on:click={handleClick}>
    <iconify-icon class="icon" icon="material-symbols:dashboard"></iconify-icon>
    {option}
  </button>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800&display=swap");
  .option {
    background-color: rgba(0,0,0,0);
    color: white;
    padding: 1rem;
    display: flex;
    border-radius: 10px;
    gap: 10px;
    box-shadow: none;
    align-items: center;
    border: none;
    width: 100%;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .selected {
    background-color: white;
    color: #445569;
    transition: all 0.3s ease;

  }

  .icon {
    transform: scale(1.4);
  }
</style>
