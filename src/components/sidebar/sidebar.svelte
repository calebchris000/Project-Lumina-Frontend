<script lang="ts">
  import LogoSection from "./logo_section.svelte";
  import '$lib/common/app.css'
  let currentOption: string = "Dashboard";
  import "iconify-icon";

  const handleClick = (e) => {
    currentOption = e.target.innerText;
  };
</script>

<nav class="sidebar_container relative">
  <LogoSection />
  <div class="option_holder relative">
    <button class="option" class:selected={currentOption === "Dashboard"} on:click={handleClick}>
      <iconify-icon class="icon" icon="material-symbols:space-dashboard" />
      Dashboard
    </button>
    <button class="option" class:selected={currentOption === "Students"} on:click={handleClick}>
      <iconify-icon class="icon" icon="ph:student-bold" />
      Students
    </button>

    <button class="option" class:selected={currentOption === "Teachers"} on:click={handleClick}>
      <iconify-icon class="icon" icon="ph:chalkboard-teacher-bold" />
      Teachers
    </button>

    <button class="option" class:selected={currentOption === "Staff Hub"} on:click={handleClick}>
      <iconify-icon class="icon" icon="medical-icon:i-care-staff-area" />
      Staff Hub
    </button>

    <button class="option" class:selected={currentOption === "Departments"} on:click={handleClick}>
      <iconify-icon class="icon" icon="mingcute:department-fill" />
      Departments
    </button>

    <button class="option" class:selected={currentOption === "Attendance"} on:click={handleClick}>
      <iconify-icon class="icon" icon="pepicons-pop:person-checkmark" />
      Attendance
    </button>

    <button class="option" class:selected={currentOption === "Calendar"} on:click={handleClick}>
      <iconify-icon class="icon" icon="material-symbols:calendar-month" />
      Calendar
    </button>

    <div class="reserved ">
      <button class="option" class:selected={currentOption === "Settings"} on:click={handleClick}>
        <iconify-icon class="icon" icon="material-symbols:settings-rounded" />
        Settings
      </button>
  
      <button class="option" class:selected={currentOption === "Logout"} on:click={handleClick}>
        <iconify-icon class="icon" icon="material-symbols:logout-rounded" />
        Logout
      </button>
    </div>
  </div>
  
 
</nav>

<style>
  .option {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    padding: 0.8rem;
    display: flex;
    border-radius: 10px;
    gap: 10px;
    box-shadow: none;
    align-items: center;
    border: none;
    width: 100%;
    font-size: 0.75rem;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  button {
    font-size: 0.6rem;
  }

  .reserved {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: auto;
    margin-bottom: 2rem;
  }

  .selected {
    background-color: white;
    color: #445569;
    transition: all 0.3s ease;
  }

  .icon {
    transform: scale(1.4);
  }
  .sidebar_container {
    background-color: #445569;
    color: white;
    width: 12rem;
    padding: 1rem;
    font-family: sans-serif;
    border-radius: 18px;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    top: 1rem;
    left: 1rem;
    bottom: 1rem;
  }
  .sidebar_container::-webkit-scrollbar {
    opacity: 0;
  }

  .option_holder {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 0.8rem;
    top: 10rem;
    flex-direction: column;
    gap: 3px;
    user-select: none;
  }
  @media (max-width: 768px) {
    .sidebar_container {
      left: -15rem;
    }
  }
</style>
