import axios from "axios";
export default async function getCompanies() {
  try {
    const r = await axios.get(
      `https://10doshi12.pythonanywhere.com/api/companies/`
    );
    return r.data;
  } catch (e) {
    if (e.response && e.response.data) {
      return e.response.data;
    }
  }
}
