<script lang="ts">
  export let clickable: boolean = false;
  export let style:string = ''
</script>

<section style={style} class="card_generic" class:clickable>
  <slot />
</section>

<style>
  .card_generic {
    user-select: none;
    background-color: #ffffff;
    padding: 1.2rem 1rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    border: 2px solid #00000000;
    transition: all 0.3s ease;
  }

  .clickable:hover {
    border: 2px solid #445569;
    cursor: pointer;
  }
</style>
