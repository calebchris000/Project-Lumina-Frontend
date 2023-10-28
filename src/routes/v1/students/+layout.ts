import axios from "axios";
import type { LayoutLoad } from "./$types";
import { store } from "src/store/store";

export const load = (async () => {
  const url = "http://127.0.0.1:8000";
  try {
    const response = await axios.get(url + "/api/v1/students/?per_page=10&page=1&sort_by=ascending&order_by=first_name&load_related=false");
    
    if(response.status !== 200) {
        throw new Error('Error: ' + response.status)
    }
    const result = await response.data;
    return result;
  } catch (error) {
    console.error(error);
    store.update(defaults => {
      defaults.toast.showToast = true
      defaults.toast.message = "Could not resolve host: " + url
      return defaults
    });
  }
}) satisfies LayoutLoad;
