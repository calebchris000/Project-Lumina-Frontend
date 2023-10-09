<script lang="ts">
  import LogoSection from "./LogoSection.svelte";
  let currentOption: string;

  const handleClick = (e) => {
    currentOption = e.target.innerText;
  };
</script>

<nav class="sidebar_container">
  <LogoSection />
  <div class="option_holder">
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

    <button class="option" class:selected={currentOption === "Staffs"} on:click={handleClick}>
      <iconify-icon class="icon" icon="medical-icon:i-care-staff-area" />
      Staffs
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

    <div class="reserved">
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
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .reserved {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 4rem;
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

    top: 0;
    bottom: 0;
    margin: 2rem 0;
  }
  .sidebar_container::-webkit-scrollbar {
    opacity: 0;
  }

  .option_holder {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    padding: 0 0.8rem;
    top: 12rem;
    flex-direction: column;
    gap: 10px;
    user-select: none;
  }
</style>
