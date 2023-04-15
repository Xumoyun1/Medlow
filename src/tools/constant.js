export const LANGUAGE = "app-medlow-language";
export const API_PATH = `https://backend.medlow.uz/${
    localStorage.getItem(LANGUAGE) ? localStorage.getItem(LANGUAGE) : "uz"
  }/`;