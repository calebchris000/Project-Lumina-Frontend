import { writable } from "svelte/store";

let studentData = {
  all_students: {},
  current_img: "http",
};
export const studentStore = writable(studentData);
