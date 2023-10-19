import axios from "axios";
import type { PageLoad } from "./$types";
import { page } from "$app/stores";
import { studentStore } from "../studentStore";

let store;
export const load = (async ({ params }) => {
  studentStore.subscribe((items) => (store = items));
  
  if(params.student_id in store.all_students) {
    return
}
  try {
   
    const url = "http://127.0.0.1:8000";
    const response = await axios.get(url + `/api/v1/students/${params.student_id}?load_related=true`);
    const result = await response.data;
    if (response.status !== 200) {
      throw new Error("Error: " + response.status);
    }

    studentStore.update((item) => {
      item.all_students[params.student_id] = result.results;
      return item;
    });
    
    return result.results;
  } catch (error) {
    console.error("Error: " + error);
    return error
  }
}) satisfies PageLoad;

