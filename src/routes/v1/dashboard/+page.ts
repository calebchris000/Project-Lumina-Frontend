import type { PageLoad } from "./$types";
import axios, { HttpStatusCode } from "axios";
export const load = (async () => {
  const url = "http://127.0.0.1:8000";
  try {
    const promises = [
      axios.get(url + "/api/v1/student-attendance/present/today"),
      axios.get(url + "/api/v1/students/total"),
      axios.get(url + "/api/v1/teacher-attendances/present/today"),
      axios.get(url + "/api/v1/teachers/total"),
      axios.get(url + "/api/v1/course/total")
    ];

    const [students_present, total_students, teachers_present, total_teachers, courses] = await Promise.all(promises);

    if (students_present.status !== 200) {
      throw new Error(`Error: ${students_present.status}`);
    }
    if (total_students.status !== 200) {
      throw new Error(`Error: ${total_students.status}`);
    }
    if (teachers_present.status !== 200) {
      throw new Error(`Error: ${teachers_present.status}`);
    }
    if (total_teachers.status !== 200) {
      throw new Error(`Error: ${total_teachers.status}`);
    }
    if (courses.status !== 200) {
        throw new Error(`Error: ${total_teachers.status}`);
      }

    const [studentPresent, totalStudents, teachersPresent, totalTeachers, totalCourses] = [
      await students_present.data,
      await total_students.data,
      await teachers_present.data,
      await total_teachers.data,
      await courses.data
    ];

    return {
      students: {
        present: studentPresent.data,
        total: totalStudents.data
      },
      teachers: {
        present: teachersPresent.data,
        total: totalTeachers.data
      },
      courses: {
        total: totalCourses.data
      }
    };
  } catch (error) {
    console.error("Could not connect to host: " + error)
  }
}) satisfies PageLoad;
