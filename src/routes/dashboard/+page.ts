import type { PageLoad } from './$types';

export const load = (async () => {
    return {
        iconNames: {
            student: 'ph:student-bold',
            teachers: 'ph:chalkboard-teacher-bold',
            departments: 'mingcute:department-fill',
            staff: 'medical-icon:i-care-staff-area'

        },
        students: 120323,
        teachers: 23445,
        departments: 321
    };
}) satisfies PageLoad;