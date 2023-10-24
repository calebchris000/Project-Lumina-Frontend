<script lang="ts">
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import { enhance } from "$app/forms";
  import InfoCard from "$components/InfoCard.svelte";
  import ThreeDotOption from "$components/ThreeDotOption.svelte";
  import type { PageData } from "./$types";
  import add_image from "$lib/assets/add-image.svg";
  import Button from "$components/Buttton.svelte";
  import fileToBytes from "$lib/shared/fileToBase64";
  import { uploadImage } from "./uploadProfileImage";
  import UploadFormSubmission from "./form/UploadFormSubmission";
  import FlashNotification from "$lib/core/v1/Notification/FlashNotification.svelte";
  import Toast from "$lib/core/v1/Notification/Toast.svelte";
  import { store } from "src/store/store";
  export let data: PageData;
  let menuClick: boolean = false;
  let currentDate = new Date().toISOString().split("T")[0];
  let base64ProfileImage: string = "";
  let darkMode: boolean = false;

  store.subscribe((defaults) => {
    darkMode = defaults.theme.darkMode;
  });
  function triggerImage() {
    if (browser) {
      document.getElementById("fileInput").click();
    }
  }

  function getImage(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      base64ProfileImage = selectedFile;

      if (browser) {
        const placeholder: any = document.getElementById("image-placeholder");
        const addImgText = document.getElementById("add-img-text");
        const removeImage = document.getElementById("remove-image");
        placeholder.src = imageUrl;
        addImgText.textContent = "Change Profile Image";
        removeImage.style.display = "block";
      }
    }
  }

  function removeImage(e) {
    if (browser) {
      const addImgText = document.getElementById("add-img-text");
      const placeholder: any = document.getElementById("image-placeholder");
      placeholder.src = add_image;
      addImgText.textContent = "Add Profile Image";
      e.target.style.display = "none";
    }
  }

  async function handleSubmitAction(e) {
    const formData = new FormData(e.target);
    // const ibbURL = await uploadImage(base64ProfileImage);

    let formObject = {};
    for (const [key, value] of formData.entries()) {
      formObject[key] = value;
    }
    console.log(formObject);
    const results = await UploadFormSubmission(formObject);
    if (results.status_code === 201) {
      if (browser) {
        goto("/v1/students");
      }
      store.update((defaults) => {
        defaults.toast.showToast = true;
        defaults.toast.type = "success";
        defaults.toast.message = `Success: ${results.message}`;
        return defaults;
      });
    } else {
      store.update((defaults) => {
        defaults.toast.showToast = true;
        defaults.toast.type = "error";
        defaults.toast.message = results;
        return defaults;
      });
    }
  }
</script>

<InfoCard className="flex-1">
  <div class="flex relative items-center m-0 gap-4 justify-between">
    <h2 class="text-lg font-medium text-[#445569]">Add Student</h2>
    <ThreeDotOption options={[["Undo", "/v1/students"]]} clicked={menuClick} />
  </div>

  <form class:darkMode on:submit|preventDefault={handleSubmitAction} method="post" class="">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <section class="flex flex-col items-center mb-4">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="flex flex-col gap-2 items-center mb-3 cursor-pointer" on:click={triggerImage}>
        <img class="w-20 border rounded-full self-center" id="image-placeholder" src={add_image} alt="" />
        <input on:change={getImage} style="display: none" type="file" id="fileInput" />
      </div>
      <div class="flex gap-2">
        <button on:click={triggerImage} id="add-img-text" class="text-xs font-medium m-0 text-[#445569]">Add Profile Image</button>
        <button on:click|self={removeImage} id="remove-image" class="hidden text-orange-700 text-xs m-0 font-medium">Remove Image</button>
      </div>
    </section>

    <section class="grid grid-cols-2 gap-3">
      <div class="flex flex-col gap-1">
        <label class="text-[#445569] text-xs font-semibold" for="firstname">First Name</label>
        <input
          class=" placeholder:text-sm text-sm outline-none border-2 text-[#445569] p-1 border-gray-200 hover:border-gray-400 rounded-md py-2"
          type="text"
          name="first_name"
          placeholder="e.g, John"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-[#445569] text-xs font-semibold" for="lastname">Last Name</label>
        <input
          class=" placeholder:text-sm text-sm outline-none border-2 text-[#445569] p-1 border-gray-200 hover:border-gray-400 rounded-md py-2"
          type="text"
          name="last_name"
          placeholder="e.g, Doe"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-[#445569] text-xs font-semibold" for="date_of_birth">Date Of Birth</label>
        <input
          class=" placeholder:text-sm text-sm outline-none border-2 text-[#445569] p-1 border-gray-200 hover:border-gray-400 rounded-md py-2"
          type="date"
          name="date_of_birth"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[#445569] text-xs font-semibold" for="date_of_birth">Gender</label>
        <select
          name="gender"
          class="placeholder:text-sm bg-white text-sm outline-none border-2 text-[#445569] p-1 border-gray-200 hover:border-gray-400 rounded-md py-2"
        >
          <option class="font-poppins" value="male">Male</option>
          <option class="font-poppins" value="female">Female</option>
        </select>
      </div>
      <div class="flex flex-col gap-1">
        <label class="text-[#445569] text-xs font-semibold" for="name">Admission Date</label>
        <input
          bind:value={currentDate}
          class=" placeholder:text-sm text-sm outline-none border-2 text-[#445569] p-1 border-gray-200 hover:border-gray-400 rounded-md py-2"
          type="date"
          name="date_of_enrollment"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-[#445569] text-xs font-semibold" for="grade">Grade</label>

        <select
          class="placeholder:text-sm text-sm outline-none border-2 text-[#445569] bg-white p-1 border-gray-200 hover:border-gray-400 rounded-md py-2"
          name="grade"
          id=""
        >
          <option value="1"> Grade 1</option>
          <option value="2">Grade 2</option>
          <option value="3">Grade 3</option>
          <option value="4">Grade 4</option>
          <option value="5">Grade 5</option>
          <option value="6">Grade 6</option>
          <option value="7">Grade 7</option>
          <option value="8">Grade 8</option>
          <option value="9">Grade 9</option>
          <option value="10">Grade 10</option>
          <option value="11">Grade 11</option>
          <option value="12">Grade 12</option>
        </select>
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-[#445569] text-xs font-semibold" for="address">Home Address</label>
        <input
          class=" placeholder:text-sm text-sm outline-none border-2 text-[#445569] p-1 border-gray-200 hover:border-gray-400 rounded-md py-2"
          type="text"
          name="home_address"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-[#445569] text-xs font-semibold" for="address">Contact</label>
        <input
          class=" placeholder:text-sm text-sm outline-none border-2 text-[#445569] p-1 border-gray-200 hover:border-gray-400 rounded-md py-2"
          type="text"
          name="user_contact"
        />
      </div>
    </section>
    <Button textContent="Create Student" className="mt-3 w-full py-3 font-semibold" />
  </form>
</InfoCard>

<style>
  .darkMode {
    background-color: #28353f;

    transition: all 200ms ease;
    color: white;
    border-color: #00000000;
  }

  .darkMode * {
    color: white;
    background-color: #28353f;
  }

</style>
