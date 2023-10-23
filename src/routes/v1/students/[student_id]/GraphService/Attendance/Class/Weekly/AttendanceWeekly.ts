import axios from "axios";
import { env } from "$env/dynamic/public";
import { page } from "$app/stores";
import { getISOWeek } from "date-fns";
let student_id: string = "";
let currentDate: Date = new Date()
let weekNumber = getISOWeek(currentDate)
const GetWeeklyAttendance = async (year: number = 2023, month: number = currentDate.getMonth() + 1, week_number: number = 41) => {
  try {
    page.subscribe((value) => {
      student_id = value.params.student_id;
    });

    const url = env.PUBLIC_API_URL;
    const endpoint = `/api/v1/student-attendance/${student_id}/weekly?year=${year}&week_number=${week_number}`;

    const response = await axios.get(url + endpoint);
    console.log(response.data);
    const results = response.data;
    return results;
  } catch (error) {
    return error;
  }
};

export default GetWeeklyAttendance;
