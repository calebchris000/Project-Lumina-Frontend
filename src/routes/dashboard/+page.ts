import type { PageLoad } from "./$types";
import axios from "axios";

const url = "http://127.0.0.1:8000";
export const load = (async () => {
  try {
    const promises = [axios.get(url + "/api/v1/students/total"), axios.get(url + "/api/v1/student-attendance/present/total")];

    const responses = await Promise.all(promises);
    const total_students = await responses[0].data;
    const total_students_present = await responses[1].data;

    return {
      students: {
        total: await total_students.data.total_students,
        present: total_students_present.data,
      },
      iconNames: {
        student: "ph:student-bold",
        teachers: "ph:chalkboard-teacher-bold",
        departments: "mingcute:department-fill",
        staff: "medical-icon:i-care-staff-area",
      },
    };
  } catch (error) {
    return {
      students: {
        total: 'undefined',
      },
      iconNames: {
        student: "ph:student-bold",
        teachers: "ph:chalkboard-teacher-bold",
        departments: "mingcute:department-fill",
        staff: "medical-icon:i-care-staff-area",
      },
    };
  }
}) satisfies PageLoad;
