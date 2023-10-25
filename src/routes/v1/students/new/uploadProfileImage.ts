import { env } from "$env/dynamic/public";
import axios from "axios";

export const uploadImage = async (base64ImageString: string) => {
  try {
    const API_KEY = env.PUBLIC_IBB_API_KEY;
    const imgUploadUrl = "https://api.imgbb.com/1/upload";
    const formData = new FormData();
    formData.append("image", base64ImageString);
    const response = await axios.post(imgUploadUrl, formData, {
      params: {
        key: API_KEY,
        expiration: 0,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    return error;
  }
};
