<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let option;
  export let payload;

  const handleClick = () => {
    dispatch("clicked", option);
  };
</script>

{#if payload === option}
  <button class="option" on:click={handleClick}>{option}</button>
{:else}
  <button class="option selected" on:click={handleClick}>{option}</button>
{/if}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800&display=swap");
  .option {
    background-color: white;
    color: #445569;
    padding: 1rem;
    display: flex;
    border-radius: 10px;
    box-shadow: none;
    border: none;
    width: 100%;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .selected {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    transition: all 0.3s ease;

  }
</style>
