<script lang="ts">
export let className: string = ""
</script>


<section class={`flex relative flex-col gap-4 bg-white p-4 rounded-xl max-h-full ${className}`}>
<slot></slot>
</section>