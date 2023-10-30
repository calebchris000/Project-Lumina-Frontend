import { store } from "src/store/store";
import { browser } from "$app/environment";


export const SaveLocalStorage = (object: {}) => {
  if (browser) {
    const stringified = JSON.stringify(object);
    localStorage.setItem("application", stringified);
  }
};