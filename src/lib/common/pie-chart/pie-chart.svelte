<script>
    import {spring, tweened} from 'svelte/motion';
    import Pie from './pie.svelte';
  
    export let percent = 0;
    const store = tweened(0, {duration: 1000});
      //const store = spring(0, {stiffness: 0.3, damping: 0.3});
    $: store.set(percent);
  </script>
  
  <Pie size={200} percent={$store} />