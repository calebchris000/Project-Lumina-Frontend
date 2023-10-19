<script lang="ts">
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
  export let data: PageData;
  let menuClick: boolean = false;
  let currentDate = new Date().toISOString().split("T")[0];
  let base64ProfileImage: string = "";

  function triggerImage() {
    if (browser) {
      document.getElementById("fileInput").click();
    }
  }

  function getImage(e) {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      console.log(imageUrl);
      base64ProfileImage = selectedFile;

      // fileToBytes(selectedFile, (base64String: string) => {
      //   // console.log("base64String", base64String);
      //   base64ProfileImage = base64String
      // });

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
    const ibbURL = await uploadImage(base64ProfileImage);

    const result = UploadFormSubmission(formData)
    console.log(result)
    // formData.append('profile_image', ibbURL);

  }
</script>

<InfoCard className="flex-1">
  <div class="flex relative items-center m-0 gap-4 justify-between">
    <h2 class="text-lg font-medium text-[#445569]">Add Student</h2>
    <ThreeDotOption options={[["Undo", "/v1/students"]]} clicked={menuClick} />
  </div>

  <form on:submit|preventDefault={handleSubmitAction} method="post" class="">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <section class="flex flex-col items-center mb-4">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="flex flex-col gap-2 items-center mb-3 cursor-pointer" on:click={triggerImage}>
        <img class="w-20 border rounded-full self-center" id="image-placeholder" src={add_image} alt="" />
        <input name="profile_image" on:change={getImage} style="display: none" type="file" id="fileInput" />
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
          name="firstname"
          placeholder="e.g, John"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-[#445569] text-xs font-semibold" for="lastname">Last Name</label>
        <input
          class=" placeholder:text-sm text-sm outline-none border-2 text-[#445569] p-1 border-gray-200 hover:border-gray-400 rounded-md py-2"
          type="text"
          name="lastname"
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
          name="admission_date"
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
          name="address"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label class="text-[#445569] text-xs font-semibold" for="address">Contact</label>
        <input
          class=" placeholder:text-sm text-sm outline-none border-2 text-[#445569] p-1 border-gray-200 hover:border-gray-400 rounded-md py-2"
          type="text"
          name="contact"
        />
      </div>
    </section>
    <Button textContent="Create Student" className="mt-3 w-full py-3 font-semibold" />
  </form>
</InfoCard>
