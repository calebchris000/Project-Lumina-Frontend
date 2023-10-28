import axios from "axios";
import { env } from "$env/dynamic/public";
import { store } from "src/store/store";

const GetEvents = async (date: string) => {
  try {
    const url = env.PUBLIC_API_URL + `/api/v1/events/?date=${date}`;
    const response = await axios.get(url);
    const results = await response.data;

    if (response.status === 200) {
      store.update((defaults) => {
        defaults.dashboard.calendar.events = results;
        return defaults;
      });
    } else {
      store.update((defaults) => {
        defaults.dashboard.calendar.events = [];
        return defaults;
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export default GetEvents;
