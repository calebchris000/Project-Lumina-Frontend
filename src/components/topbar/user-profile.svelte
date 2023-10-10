<script lang="ts">
  import user from "$lib/assets/image.png";

  import GenericCard from "$lib/common/generic_card.svelte";
</script>

<section class="user-profile-holder">
        <img class="image-user" src={user} alt="user" />
      </section>

<style>
  .user-profile-holder {
    width: 2rem;
    display: flex;
    border-radius: 50%;
    align-items: center;
    cursor: pointer;
  }

  .image-user {
    border-radius: 50%;
    width: 100%;
    position: relative;
    bottom: 3px;
  }
</style>

