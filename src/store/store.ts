import { writable } from "svelte/store";

let defaults = {
  toast: {
    showToast: false,
    message: "",
    type: "info",
    dismissible: true
  },
  theme: {
    darkMode: false
  }
};

export const store = writable(defaults);
