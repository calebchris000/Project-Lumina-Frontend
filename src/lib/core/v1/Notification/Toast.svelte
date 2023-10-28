<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import "iconify-icon";
  import { browser } from "$app/environment";
  import { store } from "src/store/store";
  let message = "This is an example info for toast. If the string was any longer, it will fold and be responsive.";
  let showToast: boolean = true;
  let type: string = "success";
  let dismissible: boolean = true;

  let timeout;

  const unsubscribe = store.subscribe((defaults) => {
    let toast = defaults.toast;
    showToast = toast.showToast;
    type = toast.type;
    message = toast.message;
    dismissible = toast.dismissible;
  });

  onDestroy(unsubscribe)

  function triggerVisible() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      showToast = false;
      store.update((defaults) => {
        defaults.toast.showToast = showToast;
        defaults.toast.message = "";
        defaults.toast.type = "info";
        return defaults;
      });
    }, 5000);
  }
  $: showToast && triggerVisible();
</script>

{#if showToast}
  <section
    class={`fixed transition-all top-5 justify-between py-3 rounded-sm text-white w-[28rem] left-[50%] translate-x-[-50%] bg-blue-500 px-3 ${
      type == "success" ? "bg-green-600" : type == "error" ? "bg-red-600" : "bg-blue-600"
    }`}
  >
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center gap-1">
        {#if type === "success"}
          <iconify-icon class="scale-[1.2]" icon="clarity:success-standard-line" />
        {:else if type === "error"}
          <iconify-icon class="scale-[1.5]" icon="clarity:error-line" />
        {:else}
          <iconify-icon class="scale-[1.3]" icon="mdi:information-slab-circle-outline" />
        {/if}
        <p class="text-sm mx-4">{message}</p>
      </div>

      {#if dismissible}
        <button
          class="m-0 p-0 flex items-center"
          on:click={() => {
            showToast = false;
            store.update((defaults) => {
              defaults.toast.showToast = showToast;
              return defaults;
            });
            clearTimeout(timeout);
          }}
        >
          <iconify-icon class="scale-[1.1]" icon="maki:cross" />
        </button>
      {/if}
    </div>
  </section>
{/if}
