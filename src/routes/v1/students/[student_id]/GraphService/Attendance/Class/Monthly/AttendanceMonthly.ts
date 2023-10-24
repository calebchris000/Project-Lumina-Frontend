import axios from "axios";
import { env } from "$env/dynamic/public";
import { page } from "$app/stores";
import { store } from "src/store/store";

let student_id: string = "";
let monthlyData: object;

store.subscribe((value) => {
  monthlyData = value.graph.attendance.class.monthly;
});

const GetMonthlyAttendance = async (year: number = 2023, month: number = new Date().getMonth() + 1) => {
  try {
    page.subscribe((value) => {
      student_id = value.params.student_id;
    });

    if (Array.isArray(monthlyData)) {
      const url = env.PUBLIC_API_URL;
      const endpoint = `/api/v1/student-attendance/${student_id}/monthly?year=${year}&month=${month}`;

      const response = await axios.get(url + endpoint);
      const results = response.data;
      store.update((defaults) => {
        defaults.graph.attendance.class.monthly = results;
        return defaults;
      });
    }
  } catch (error) {
    return error;
  }
};

export default GetMonthlyAttendance;
