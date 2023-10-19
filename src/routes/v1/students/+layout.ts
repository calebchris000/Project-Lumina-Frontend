import axios from "axios";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  try {
    const url = "http://127.0.0.1:8000";
    const response = await axios.get(url + "/api/v1/students/?per_page=10&page=1&sort_by=ascending&order_by=first_name&load_related=false");
    
    if(response.status !== 200) {
        throw new Error('Error: ' + response.status)
    }
    const result = await response.data;
    return result;
  } catch (error) {
    console.error(error);
    return error;
  }
}) satisfies LayoutLoad;
