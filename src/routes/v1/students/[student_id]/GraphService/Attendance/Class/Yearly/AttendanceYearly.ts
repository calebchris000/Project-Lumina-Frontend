import axios from "axios";
import { env } from "$env/dynamic/public";
import { page } from "$app/stores";
import { store } from "src/store/store";

let student_id: string = "";
let yearlyData: object;

store.subscribe((value) => {
  yearlyData = value.graph.attendance.class.yearly;
});

const GetYearlyAttendance = async (year: number = 2023) => {
  try {
    page.subscribe((value) => {
      student_id = value.params.student_id;
    });

    if (Array.isArray(yearlyData)) {
      const url = env.PUBLIC_API_URL;
      const endpoint = `/api/v1/student-attendance/${student_id}/yearly?year=${year}`;

      const response = await axios.get(url + endpoint);
      const results = response.data;
      store.update((defaults) => {
        defaults.graph.attendance.class.yearly = results;
        return defaults;
      });
    }
  } catch (error) {
    return error;
  }
};

export default GetYearlyAttendance;
