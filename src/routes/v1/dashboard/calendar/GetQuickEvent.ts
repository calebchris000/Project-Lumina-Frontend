import Calendar from "color-calendar";

const GetQuickEvents = (calendarEvents: any[]) => {
  const quickEvents = calendarEvents.map((object) => {
    const { id, name, start_date, end_date, ...others } = object;

    return {
      id,
      name,
      start: start_date,
      end: end_date
    };
  });

  return quickEvents
};

export default GetQuickEvents