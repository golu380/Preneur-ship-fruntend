import axios from "axios";

export default async function getSchool() {
  try {
    const res = await axios.get(
      `https://10doshi12.pythonanywhere.com/api/configuration-view/`,
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("access_token")}`,
        },
      }
    );

    return res;
  } catch (e) {
    if (e.response && e.response.data) {
      return e.response.data;
    }
  }
}
