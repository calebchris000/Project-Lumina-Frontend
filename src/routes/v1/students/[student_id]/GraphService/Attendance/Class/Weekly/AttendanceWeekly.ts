import axios from "axios";
import { env } from "$env/dynamic/public";
import { page } from "$app/stores";
import { getISOWeek } from "date-fns";
import { store } from "src/store/store";

let weeklyData: object;

store.subscribe((value) => {
  weeklyData = value.graph.attendance.class.monthly;
});

let student_id: string = "";
let currentDate: Date = new Date();
let weekNumber = getISOWeek(currentDate);
const GetWeeklyAttendance = async (year: number = 2023, week_number: number = weekNumber) => {
  try {
    page.subscribe((value) => {
      student_id = value.params.student_id;
    });

    if (Array.isArray(weeklyData)) {
      const url = env.PUBLIC_API_URL;
      const endpoint = `/api/v1/student-attendance/${student_id}/weekly?year=${year}&week_number=${week_number}`;

      const response = await axios.get(url + endpoint);
      const results = response.data;
      store.update((defaults) => {
        defaults.graph.attendance.class.weekly = results;
        return defaults;
      });
    }
  } catch (error) {
    return error;
  }
};

export default GetWeeklyAttendance;
