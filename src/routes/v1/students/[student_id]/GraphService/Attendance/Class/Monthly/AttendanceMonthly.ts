import axios from "axios";
import { env } from "$env/dynamic/public";
import { page } from "$app/stores";

let student_id: string = "";

const GetMonthlyAttendance = async (year: number = 2023, month: number = new Date().getMonth() + 1) => {
  try {
    page.subscribe((value) => {
      student_id = value.params.student_id;
    });

    const url = env.PUBLIC_API_URL;
    const endpoint = `/api/v1/student-attendance/${student_id}/monthly?year=${year}&month=${month}`;

    const response = await axios.get(url + endpoint);
    console.log(response.data);
    const results = response.data;
    return results;
  } catch (error) {
    return error;
  }
};

export default GetMonthlyAttendance;
