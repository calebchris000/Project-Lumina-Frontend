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
        present: studentPresent.data || 0,
        total: totalStudents.data || 0
      },
      teachers: {
        present:  teachersPresent.data || 0,
        total:  totalTeachers.data || 0
      },
      courses: {
        total:  totalCourses.data || 0
      }
    };
  } catch (error) {
    console.error("Could not connect to host: " + error)

    return {
      students: {
        present: 0,
        total: 0
      },
      teachers: {
        present: 0,
        total: 0
      },
      courses: {
        total: 0
      }
    };
  }
}) satisfies PageLoad;
