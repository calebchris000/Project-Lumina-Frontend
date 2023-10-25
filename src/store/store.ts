import { writable } from "svelte/store";

let defaults = {
  sidebar: {
    selectedTab: "Dashboard",
  },
  toast: {
    showToast: false,
    message: "",
    type: "info",
    dismissible: true,
  },
  theme: {
    darkMode: false,
  },
  graph: {
    attendance: {
      class: {
        yearly: [],
        monthly: [],
        weekly: [],
      },
    },
  },

  dashboard: {
    calendar: {
      events: [],
    },
  },
};

export const store = writable(defaults);
