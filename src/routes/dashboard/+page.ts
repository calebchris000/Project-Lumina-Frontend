import type { PageLoad } from "./$types";
import axios from "axios";

const url = "http://127.0.0.1:8000";
export const load = (async () => {
  try {
    const promises = [
      axios.get(url + "/api/v1/students/total"),
      axios.get(url + "/api/v1/student-attendance/present/today"),
      axios.get(url + "/api/v1/teachers/total"),
      axios.get(url + "/api/v1/teacher-attendances/present/today"),
      axios.get(url + "/api/v1/course/total"),
    ];

    const [total_students, total_students_present, total_teachers, total_teachers_present, total_course] = await Promise.all(promises);

    if (total_students.status !== 200) {
      throw new Error(`Error: ${total_students.status}`);
    }
    if (total_students_present.status !== 200) {
      throw new Error(`Error: ${total_students_present.status}`);
    }
    if (total_teachers.status !== 200) {
      throw new Error(`Error: ${total_teachers.status}`);
    }
    if (total_teachers_present.status !== 200) {
      throw new Error(`Error: ${total_teachers_present.status}`);
    }

    if (total_course.status !== 200) {
      throw new Error(`Error: ${total_course.status}`);
    }
    const totalStudents = await total_students.data;
    const totalStudentsPresent = await total_students_present.data;
    const totalTeachers = await total_teachers.data;
    const totalTeachersPresent = await total_teachers_present.data;
    const totalCourse = await total_course.data;
    return {
      students: {
        total: totalStudents.data.total_students,
        present: totalStudentsPresent.data,
      },
      teachers: {
        total: totalTeachers.data.total_teachers,
        present: totalTeachersPresent.data,
      },

      courses: {
        total: totalCourse.data,
      },
      iconNames: {
        student: "ph:student-bold",
        teachers: "ph:chalkboard-teacher-bold",
        course: "lucide:graduation-cap",
        staff: "tabler:briefcase",
      },
    };
  } catch (error) {
    return {
      students: {
        total: "undefined",
      },
      iconNames: {
        student: "ph:student-bold",
        teachers: "ph:chalkboard-teacher-bold",
        course: "lucide:graduation-cap",
        staff: "tabler:briefcase",
      },
    };
  }
}) satisfies PageLoad;
