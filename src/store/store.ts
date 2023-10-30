import { browser } from "$app/environment";
import { SaveLocalStorage } from "$lib/shared/LocalStorage"
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

  admission: {
    option: {
      selected: "Yearly",
    },
    yearly: [],
    monthly: [],
    weekly: [],
  },
};


if(browser) {
  const data: string = localStorage.getItem('application')
  if(data) {

    defaults = JSON.parse(data)
  }
}

export const store = writable(defaults);

store.subscribe((defaults) => {
  SaveLocalStorage(defaults);
});
