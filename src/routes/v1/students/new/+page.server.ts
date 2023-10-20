import type { PageServerLoad } from "./$types";
import { env } from "$env/dynamic/private";
export const load = (async () => {
  const API_KEY = env.IBB_API_KEY;

  try {
    const formData = new FormData()
    formData.append('image', '')
  } catch (error) {
    
  }
}) satisfies PageServerLoad;
