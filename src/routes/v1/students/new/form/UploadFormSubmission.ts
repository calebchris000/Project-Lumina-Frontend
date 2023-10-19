import axios from "axios";
import { env } from "$env/dynamic/public";

const UploadFormSubmission = async (formData: FormData) => {
  try {
    const url = env.PUBLIC_API_URL;
    const response = await axios.post(url + "/api/v1/students/", formData);
    const results = response.data;

    return results;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export default UploadFormSubmission